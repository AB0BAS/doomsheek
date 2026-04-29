/**
 * DOOMSHEEK Pricing Section
 * Subscription tiers with glassmorphism cards
 */

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const FUNPAY_URL = "https://funpay.com/users/16307604/";

const plans = [
  {
    name: "1 месяц",
    price: 350,
    period: "руб",
    description: "Доступ на 30 дней",
    features: ["Все модули", "Обход античита", "Поддержка"],
    popular: true,
  },
  {
    name: "1 год",
    price: 450,
    period: "руб",
    description: "Доступ на 365 дней",
    features: ["Все модули", "Обход античита", "VIP поддержка", "Ранний доступ", "Скидка 20% на продления"],
    popular: true,
  },
  {
    name: "Навсегда",
    price: 550,
    period: "руб",
    description: "Пожизненный доступ",
    features: ["Все модули", "Обход античита", "VIP поддержка", "Ранний доступ", "Все будущие обновления"],
    popular: true,
  },
  {
    name: "Сброс Хвид",
    price: 50,
    period: "руб",
    description: "Сброс истории на серверах",
    features: ["Очистка данных", "Мгновенный сброс"],
    popular: true,
  },
];

const mainPlans = plans.filter((plan) => plan.name !== "Сброс Хвид");
const servicePlans = plans.filter((plan) => plan.name === "Сброс Хвид");

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
  delay,
}: {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
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
      className="glass-card"
      style={{
        padding: "2rem",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        border: popular ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(59, 130, 246, 0.15)",
        boxShadow: popular ? "0 0 30px rgba(59, 130, 246, 0.2)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {popular && (
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#3b82f6",
            color: "#ffffff",
            padding: "4px 12px",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          ПОПУЛЯРНО
        </div>
      )}

      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          marginTop: popular ? "1rem" : "0",
        }}
      >
        {name}
      </h3>

      <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        {description}
      </p>

      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>
          {price}
          <span style={{ fontSize: "1rem", color: "#9ca3af", marginLeft: "0.5rem" }}>{period}</span>
        </div>
      </div>

      <a
        href={FUNPAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1.5rem",
          backgroundColor: popular ? "#3b82f6" : "transparent",
          border: popular ? "none" : "1px solid rgba(59, 130, 246, 0.3)",
          color: "#ffffff",
          borderRadius: "0.75rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.3s",
          textAlign: "center",
          textDecoration: "none",
          display: "block",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#2563eb";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = popular ? "#3b82f6" : "transparent";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Купить на FunPay
      </a>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "#d1d5db",
              fontSize: "0.875rem",
            }}
          >
            <Check size={16} color="#3b82f6" />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingSection() {
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
      id="pricing"
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
      {/* Section Title */}
      <div
        ref={titleRef}
        style={{
          maxWidth: "56rem",
          width: "100%",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.025em",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Выберите подписку
        </h2>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "1.125rem",
            maxWidth: "42rem",
            margin: "0 auto 1rem",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Найдите идеальный план для вашего стиля игры. Оплата — на{" "}
          <a
            href={FUNPAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#60a5fa", textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            FunPay
          </a>
          .
        </p>
      </div>

      {/* Main subscription plans */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          position: "relative",
          zIndex: 10,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {mainPlans.map((plan, i) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            delay={i * 100}
          />
        ))}
      </div>

      {/* Extra service card */}
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          marginTop: "2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {servicePlans.map((plan, i) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            delay={(mainPlans.length + i) * 100}
          />
        ))}
      </div>
    </section>
  );
}
