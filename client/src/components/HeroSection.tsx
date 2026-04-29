/**
 * DOOMSHEEK Hero Section
 * Full-screen hero with particles and clean CTA
 */

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "none";
    }
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 5rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "980px",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "1rem 1rem 2rem" }}>
          <div className="glass-pill" style={{ marginBottom: "1.5rem" }}>
            Версия 1.21.4 Fabric
          </div>

          <h1
            ref={titleRef}
            style={{
              margin: 0,
              color: "#eef6ff",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
              opacity: 0,
              transform: "translateY(14px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              textShadow: "0 0 30px rgba(72, 138, 233, 0.24)",
            }}
          >
            DoomSheek
          </h1>

          <p
            style={{
              margin: "1rem auto 0",
              color: "#a8bbd7",
              fontSize: "clamp(1rem, 2.3vw, 1.25rem)",
              maxWidth: "40rem",
              lineHeight: 1.55,
            }}
          >
            Мощный и стабильный клиент с обходом античита, высокой производительностью и регулярными обновлениями.
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.65rem",
            }}
          >
            <span className="glass-pill">Обход античита</span>
            <span className="glass-pill">Высокий FPS</span>
            <span className="glass-pill">Постоянные обновления</span>
          </div>

          <a className="btn-accent" href="#pricing" style={{ marginTop: "2rem" }}>
            Купить на FunPay
          </a>
        </div>
      </div>

    </section>
  );
}
