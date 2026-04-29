/**
 * DOOMSHEEK Stats Section
 * 3 glass cards with animated counters: Users, Updates, Launches
 */

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatCard({ target, suffix = "", label, delay = 0 }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            if (!animatedRef.current) {
              animatedRef.current = true;
              const duration = 2000;
              const startTime = performance.now();
              const step = (timestamp: number) => {
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * target));
                if (progress < 1) requestAnimationFrame(step);
                else setCount(target);
              };
              requestAnimationFrame(step);
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, target]);

  const formatCount = (n: number) => {
    if (target >= 10000) {
      return (n / 1000).toFixed(0) + ",000";
    }
    return n.toString();
  };

  return (
    <div
      ref={ref}
      className="glass-card glass-card-hover"
      style={{
        padding: "2rem",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "0.5rem",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {formatCount(count)}{suffix}
      </div>
      <p style={{ color: "#9ca3af", fontSize: "0.875rem", margin: 0 }}>{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        padding: "4.5rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(ellipse 80% 50% at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1.5rem",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <StatCard target={326} label="Пользователей" delay={0} />
        <StatCard target={3} label="Обновлений" delay={150} />
        <StatCard target={30000} label="Запусков" delay={300} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
