import type Stripe from "stripe";
import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";
import { STRIPE_WEBHOOK_SECRET, APP_URL } from "@/lib/constants";
import {
  getLatestRelease,
  findInstallerAsset,
} from "@/lib/github-release";
import EmailDownloadTemplate from "@/components/email-download";

const resend = new Resend(process.env.RESEND_API_KEY);

function getDigest(
  release: Awaited<ReturnType<typeof getLatestRelease>>,
  platform: "win" | "mac",
): string | undefined {
  if (!release) return undefined;
  return findInstallerAsset(release, platform)?.digest?.replace("sha256:", "");
}

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response(null, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const rawBody = await req.text();
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return new Response(null, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    console.log(
      JSON.stringify({
        event: "purchase_completed",
        session_id: session.id,
        email,
        amount_total: session.amount_total,
        currency: session.currency,
        created_at: new Date().toISOString(),
      }),
    );

    if (email) {
      const recipient =
        process.env.NODE_ENV === "production"
          ? [email]
          : ["delivered@resend.dev"];

      let hashes: { win?: string; mac?: string } | undefined;
      try {
        const release = await getLatestRelease();
        hashes = {
          win: getDigest(release, "win"),
          mac: getDigest(release, "mac"),
        };
      } catch (releaseError) {
        console.error("GitHub release fetch failed in webhook:", releaseError);
      }

      try {
        const { error } = await resend.emails.send({
          from: "Ezequiel de Fiscalio <ezequiel@fiscalio.app>",
          to: recipient,
          subject: "Tu descarga de Fiscalio está lista",
          react: EmailDownloadTemplate({
            downloadUrl: `${APP_URL}/descarga?session_id=${session.id}`,
            hashes,
          }),
        });
        if (error) {
          console.error("Resend error in stripe webhook:", error);
        }
      } catch (resendError) {
        console.error("Resend exception in stripe webhook:", resendError);
      }
    }
  }

  return new Response(null, { status: 200 });
}
