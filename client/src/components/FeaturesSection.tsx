/**
 * DOOMSHEEK Features Section
 * "Почему Doomsheek" with bento grid of 6 feature cards
 */

import { useEffect, useRef, useState } from "react";

const features = [
  {
    num: "01",
    title: "Мощный обход",
    desc: "Продвинутые алгоритмы для стабильной работы на любых серверах",
  },
  {
    num: "02",
    title: "Custom модули",
    desc: "Огромный выбор продвинутых модулей для любых задач: CustomFOG, ESP, Aura и многие другие",
  },
  {
    num: "03",
    title: "Обход античита",
    desc: "Эксклюзивные обходы под популярные серверы. Идеальный Movement и беспалевная KillAura без флагов. Vulcan, Grim, Matrix, Spartan, Karhu, Polar, Intave.",
  },
  {
    num: "04",
    title: "Кастомизация",
    desc: "Полная настройка под ваш стиль игры и предпочтения игрока",
  },
  {
    num: "05",
    title: "Оптимизации",
    desc: "Максимальный FPS и плавный геймплей",
  },
  {
    num: "06",
    title: "Поддержка",
    desc: "Быстрая помощь и обновления",
  },
];

function BentoCard({
  num,
  title,
  desc,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="magic-bento-card magic-bento-card--border-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        boxShadow: hovered
          ? "0 4px 20px rgba(30, 58, 138, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)"
          : "none",
      }}
    >
      <div className="magic-bento-card__header">
        <div className="magic-bento-card__label">{num}</div>
      </div>
      <div className="magic-bento-card__content">
        <h2 className="magic-bento-card__title">{title}</h2>
        <p className="magic-bento-card__description">{desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "5.5rem 1.5rem 3rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        style={{
          maxWidth: "56rem",
          width: "100%",
          marginBottom: "3.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "1.25rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Почему{" "}
          <span
            style={{
              background: "linear-gradient(180deg, #5aa9ff 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Doomsheek
          </span>
        </h2>
        <p
          style={{
            color: "#8d9ab0",
            textAlign: "center",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            fontWeight: 500,
            maxWidth: "42rem",
            margin: "0 auto",
            lineHeight: 1.5,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Всё, что нужно для комфортной игры - в одном месте
        </p>
      </div>

      {/* Bento Grid */}
      <div
        className="bento-section"
        style={{
          maxWidth: "72rem",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="bento-grid">
          {features.map((f, i) => (
            <BentoCard
              key={f.num}
              num={f.num}
              title={f.title}
              desc={f.desc}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
