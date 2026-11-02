import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#0b0b0b", color: "#f4f1ea", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}><span>©2026</span><span>PORTFOLIO</span></div>
      <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -5, lineHeight: 0.9 }}>SOFTWARE<br />ENGINEER</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><span>{site.name}</span><span>{site.location}</span></div>
    </div>,
    size
  );
}
