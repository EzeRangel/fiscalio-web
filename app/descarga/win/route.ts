import { proxyDownload } from "@/lib/download-proxy";

export async function GET(req: Request): Promise<Response> {
  return proxyDownload(req, "win");
}
