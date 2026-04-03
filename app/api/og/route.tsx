import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic parameters
    const title = searchParams.get("title") || "Fiscalio";
    const subtitle = searchParams.get("subtitle");
    const label = searchParams.get("label");

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#fcfaf6", // Warm neutral background from DESIGN.MD
          padding: "80px",
          border: "20px solid #f0f0f0", // Accent border
        }}
      >
        {/* Label */}
        {label ? (
          <div
            style={{
              fontSize: "24px",
              fontFamily: "sans-serif",
              letterSpacing: "0.3em",
              color: "#666",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
        ) : null}

        {/* Title */}
        <div
          style={{
            fontSize: "84px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#1a1a1a",
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        {/* Subtitle */}
        {subtitle ? (
          <div
            style={{
              fontSize: "32px",
              fontFamily: "sans-serif",
              color: "#555",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        ) : null}

        {/* Branding Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img width={32} height={32} src="https://www.fiscalio.app/logo.png" />
          <span
            style={{
              fontSize: "24px",
              letterSpacing: "-.025em",
              color: "#1a1a1a",
            }}
          >
            FISCALIO
          </span>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
