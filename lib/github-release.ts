import { GITHUB_TOKEN, GITHUB_RELEASES_REPO } from "./constants";

interface GithubAsset {
  name: string;
  size: number;
  url: string;
  content_type: string;
  digest?: string;
}

export interface GithubRelease {
  tag_name: string;
  assets: GithubAsset[];
}

const apiHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

export async function getLatestRelease(): Promise<GithubRelease | null> {
  if (!GITHUB_RELEASES_REPO) return null;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_RELEASES_REPO}/releases/latest`,
      { headers: apiHeaders, cache: "no-store" },
    );
    if (!res.ok) {
      console.error(
        `GitHub releases/latest failed: ${res.status} ${await res.text()}`,
      );
      return null;
    }
    return (await res.json()) as GithubRelease;
  } catch {
    return null;
  }
}

export async function fetchAssetStream(
  asset: GithubAsset,
): Promise<Response | null> {
  try {
    const res = await fetch(asset.url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/octet-stream",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    });
    if (!res.ok || !res.body) return null;
    return res;
  } catch {
    return null;
  }
}

export function findInstallerAsset(
  release: GithubRelease | null,
  platform: "win" | "mac",
): GithubAsset | null {
  if (!release) return null;
  const extension = platform === "win" ? ".exe" : ".dmg";
  return (
    release.assets.find(
      (asset) =>
        asset.name.toLowerCase().endsWith(extension) &&
        !asset.name.toLowerCase().includes("latest.yml"),
    ) ?? null
  );
}
