import { ImageResponse } from "next/og";

export const alt =
  "Md Rakib Mostofa - Frontend-Focused Full-Stack and Product Engineer";
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
          justifyContent: "center",
          padding: "76px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 80% 15%, rgba(139,92,246,0.34), transparent 38%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.3), transparent 42%), #050816",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#60a5fa",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Frontend-Focused Full-Stack / Product Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Md Rakib Mostofa
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 930,
            color: "#cbd5e1",
            fontSize: 30,
            lineHeight: 1.4,
          }}
        >
          React · Next.js · React Native · TypeScript · Node.js
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 46,
            color: "#94a3b8",
            fontSize: 24,
          }}
        >
          Chemnitz, Germany · rakibmostofa.dev
        </div>
      </div>
    ),
    size,
  );
}
