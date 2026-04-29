/**
 * DOOMSHEEK - Home Page
 * Design: Dark Cyberpunk Glassmorphism
 * Colors: #080808 bg, #7c3aed accent (violet)
 * Style: Plasma blobs, glass cards, floating particles, scroll reveals
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";

import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import RulesSection from "@/components/RulesSection";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(62% 36% at 50% 12%, rgba(59,130,246,0.42), rgba(59,130,246,0.08) 45%, transparent 74%), radial-gradient(56% 34% at 50% 48%, rgba(59,130,246,0.32), rgba(59,130,246,0.06) 48%, transparent 74%), radial-gradient(68% 36% at 50% 86%, rgba(59,130,246,0.36), rgba(59,130,246,0.07) 48%, transparent 75%)",
        }}
      />
      <div
        className="floating-particles"
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        {Array.from({ length: 44 }).map((_, i) => (
          <div
            key={i}
            className="cube-particle"
            style={{
              left: `${(i * 31) % 100}%`,
              top: `${(i * 47) % 100}%`,
              width: `${14 + (i % 4) * 4}px`,
              height: `${14 + (i % 4) * 4}px`,
              animationDelay: `${(i % 10) * 0.4}s`,
              animationDuration: `${11 + (i % 6)}s`,
              ["--cube-size" as "--cube-size"]: `${14 + (i % 4) * 4}px`,
              ["--rx" as "--rx"]: `${14 + (i % 5) * 7}deg`,
              ["--ry" as "--ry"]: `${20 + (i % 7) * 13}deg`,
              ["--rz" as "--rz"]: `${(i % 8) * 19}deg`,
              ["--spin-duration" as "--spin-duration"]: `${20 + (i % 8)}s`,
              opacity: 0.2 + (i % 5) * 0.08,
            }}
          >
            <div className="cube-core">
              <span className="cube-face cube-face-front" />
              <span className="cube-face cube-face-back" />
              <span className="cube-face cube-face-right" />
              <span className="cube-face cube-face-left" />
              <span className="cube-face cube-face-top" />
              <span className="cube-face cube-face-bottom" />
            </div>
          </div>
        ))}
      </div>

      <Header />
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />

        <PricingSection />
        <RulesSection />
        <CTASection />
      </main>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}
