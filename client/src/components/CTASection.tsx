/**
 * DOOMSHEEK CTA Section
 * "Готовы начать?" with subscription button
 */

import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "400px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.025em",
          }}
        >
          Готовы начать?
        </h2>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "1.125rem",
            marginBottom: "2.5rem",
          }}
        >
          Присоединяйтесь к тысячам игроков, которые уже выбрали Doomsheek
        </p>
        <a
          className="btn-accent"
          href="#pricing"
          style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
        >
          Выбрать подписку
        </a>
      </div>
    </section>
  );
}
