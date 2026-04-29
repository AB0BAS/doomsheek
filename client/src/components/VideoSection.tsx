/**
 * DOOMSHEEK Video Section
 * "Узнайте больше о Doomsheek" with YouTube embed
 */

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background plasma */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.25,
        }}
      >
        <div className="plasma-wrapper" style={{ opacity: 0.3 }}>
          <div
            className="plasma-blob plasma-blob-1"
            style={{
              background: "radial-gradient(circle, rgb(124, 58, 237) 0%, transparent 70%)",
              animationDuration: "67s",
              transform: "scale(1.5)",
            }}
          />
          <div
            className="plasma-blob plasma-blob-2"
            style={{
              background: "radial-gradient(circle, rgb(124, 58, 237) 0%, transparent 70%)",
              animationDuration: "87s",
              transform: "scale(1.275)",
            }}
          />
          <div
            className="plasma-blob plasma-blob-3"
            style={{
              background: "radial-gradient(circle, rgb(124, 58, 237) 0%, transparent 70%)",
              animationDuration: "60s",
              transform: "scale(1.05)",
            }}
          />
        </div>
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: "56rem",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1rem",
            letterSpacing: "-0.025em",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(-30px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Узнайте больше о{" "}
          <span style={{ color: "rgb(181, 146, 254)" }}>Doomsheek</span>
        </h2>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            fontSize: "1.125rem",
            marginBottom: "2.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Краткий видеообзор наглядно покажет ключевые функции и преимущества.
        </p>

        {/* Video embed */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/HpNiUGdVktk?si=TI4-OeXn3IxZ5nYZ"
              title="Doomsheek Client Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
