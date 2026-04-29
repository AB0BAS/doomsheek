/**
 * On-page rules block — anchor #rules for header / footer links
 */

import { useEffect, useRef, useState } from "react";
import RulesContent from "@/components/RulesContent";

export default function RulesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="rules"
      style={{
        scrollMarginTop: "5.5rem",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "48rem",
          position: "relative",
          zIndex: 10,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            marginBottom: "1.5rem",
            letterSpacing: "-0.025em",
            textAlign: "center",
          }}
        >
          Правила использования Doomsheek
        </h2>

        <div
          className="glass-card"
          style={{
            padding: "2rem",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <RulesContent />
        </div>
      </div>
    </section>
  );
}
