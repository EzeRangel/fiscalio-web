import { getPaidSession } from "@/lib/stripe";
import {
  getLatestRelease,
  findInstallerAsset,
  fetchAssetStream,
} from "@/lib/github-release";

export async function proxyDownload(
  req: Request,
  platform: "win" | "mac" | "mac-arm64",
): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");
  const session = await getPaidSession(sessionId);
  if (!session) {
    return new Response(null, { status: 404 });
  }

  const release = await getLatestRelease();
  if (!release) {
    return new Response(null, { status: 502 });
  }

  const asset = findInstallerAsset(release, platform);
  if (!asset) {
    return new Response(null, { status: 404 });
  }

  const upstream = await fetchAssetStream(asset);
  if (!upstream) {
    return new Response(null, { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": String(asset.size),
      "Content-Disposition": `attachment; filename="${asset.name}"`,
      "Cache-Control": "no-store",
    },
  });
}
