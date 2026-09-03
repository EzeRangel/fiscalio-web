import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "./constants";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeClient) {
    stripeClient = new Stripe(STRIPE_SECRET_KEY);
  }
  return stripeClient;
}

export async function getPaidSession(
  sessionId: string | null | undefined,
): Promise<Stripe.Checkout.Session | null> {
  if (!sessionId) return null;
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") return session;
    return null;
  } catch {
    return null;
  }
}
