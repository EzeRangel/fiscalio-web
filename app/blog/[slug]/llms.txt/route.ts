import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

/**
 * Dynamic route handler to serve llms.txt for any blog post.
 * It looks for a corresponding markdown file in assets/llm-context/[slug].md
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "assets", "llm-context", `${slug}.md`);

  try {
    const content = await fs.readFile(filePath, "utf8");
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(`Error reading LLM context for slug ${slug}:`, error);
    return new NextResponse("LLM context not found", { status: 404 });
  }
}
