import { ImageResponse } from "next/og";

export const alt =
  "Manuel Augusto & Filhos, Lda. — Eletrodomésticos e Material Elétrico em Ílhavo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0b1626 0%, #0f1e33 55%, #10254a 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#fff",
              color: "#0b1626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            MA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>
              Manuel Augusto &amp; Filhos, Lda.
            </span>
            <span style={{ fontSize: 20, color: "#93b0e6" }}>
              Ílhavo · desde os anos 60
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 940,
            }}
          >
            Eletrodomésticos, material elétrico e assistência técnica.
          </span>
          <span style={{ fontSize: 28, color: "#aac0e6", maxWidth: 820 }}>
            Há mais de 60 anos a cuidar da energia e do conforto da sua casa.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 4, background: "#2664f0" }} />
          <span style={{ fontSize: 24, color: "#dbe6fb", fontWeight: 600 }}>
            manuelaugusto.pt
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
