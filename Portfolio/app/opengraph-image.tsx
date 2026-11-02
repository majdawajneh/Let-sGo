import { ImageResponse } from "next/og";

export const alt =
  "Majd Al-Awajneh — Software Engineer & Full-Stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          color: "#111111",
          padding: "70px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* TOP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Majd Al-Awajneh
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#666666",
            }}
          >
            Portfolio / 2026
          </div>
        </div>

        {/* CENTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
            }}
          >
            SOFTWARE ENGINEER
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 500,
              color: "#707070",
              letterSpacing: "-0.04em",
            }}
          >
            Full-Stack Developer
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "12px",
              fontSize: 24,
              color: "#555555",
            }}
          >
            ASP.NET Core / C# / Next.js / React / SQL Server
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #c8c4bc",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#666666",
            }}
          >
            Amman, Jordan
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#666666",
            }}
          >
            Full-Stack Web Engineering
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}