import { getLatestRelease, fetchAssetStream } from "@/lib/github-release";

interface UpdatesRouteContext {
  params: Promise<{ path: string[] }>;
}

const YAML_CONTENT_TYPES: Record<string, string> = {
  yml: "text/yaml; charset=utf-8",
  yaml: "text/yaml; charset=utf-8",
};

export async function GET(_req: Request, ctx: UpdatesRouteContext) {
  const { path } = await ctx.params;
  if (path.length !== 1) {
    return new Response(null, { status: 404 });
  }
  const fileName = decodeURIComponent(path[0]);

  const release = await getLatestRelease();
  if (!release) {
    return new Response(null, { status: 502 });
  }

  const asset = release.assets.find((a) => a.name === fileName);
  if (!asset) {
    return new Response(null, { status: 404 });
  }

  const upstream = await fetchAssetStream(asset);
  if (!upstream) {
    return new Response(null, { status: 502 });
  }

  const extension = fileName.split(".").pop()?.toLowerCase() ?? "";
  const contentType =
    YAML_CONTENT_TYPES[extension] ?? "application/octet-stream";

  return new Response(upstream.body, {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(asset.size),
      "Cache-Control": "no-store",
    },
  });
}
