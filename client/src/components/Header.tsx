/**
 * DOOMSHEEK Header
 * Floating pill navbar with glassmorphism effect
 * Nav: Главная, Подписка, Правила + Discord/Telegram icons + Войти button
 */

import { useState } from "react";
import { Home, Gem, FileText, X, Menu } from "lucide-react";
import LoginModal from "./LoginModal";

const DiscordIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "1rem",
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 1rem",
          pointerEvents: "none",
        }}
      >
        <header
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "56rem",
            height: "3.5rem",
            padding: "0 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pointerEvents: "auto",
            transition: "all 0.3s",
            backdropFilter: "blur(40px) saturate(150%)",
            WebkitBackdropFilter: "blur(40px) saturate(150%)",
            backgroundColor: "rgba(30, 58, 138, 0.25)",
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.2), inset 0 0 0 1px rgba(59, 130, 246, 0.3)",
            borderRadius: "32px",

          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "-0.025em",
              textDecoration: "none",
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Doomsheek
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.25rem",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="md-nav"
          >
            <NavLink href="/" icon={<Home size={14} />} label="Главная" />
            <NavLink href="#pricing" icon={<Gem size={14} />} label="Подписка" />
            <NavLink href="#rules" icon={<FileText size={14} />} label="Правила" />
          </nav>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Discord */}
            <a
              href="https://discord.com/invite/82THrNBMM"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              title="Discord"
            >
              <DiscordIcon />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Doomshk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              title="Telegram"
            >
              <TelegramIcon />
            </a>

            {/* Login button */}
            <button
              onClick={() => setShowLogin(true)}
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.875rem",
                padding: "0.375rem 1rem",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Войти
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
              }}
              className="mobile-menu-btn"
            >
              <Menu size={16} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(8, 8, 8, 0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>

          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{
              color: "#ffffff",
              fontSize: "1.5rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Главная
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            style={{
              color: "#d1d5db",
              fontSize: "1.5rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Подписка
          </a>
          <a
            href="#rules"
            onClick={() => setMobileOpen(false)}
            style={{
              color: "#d1d5db",
              fontSize: "1.5rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Правила
          </a>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a
            href="https://discord.com/invite/82THrNBMM"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            <DiscordIcon /> Discord
          </a>
          <a
            href="https://t.me/Doomshk"
            target="_blank"
            rel="noopener noreferrer"
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              <TelegramIcon /> Telegram
            </a>
          </div>
        </div>
      )}

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <style>{`
        @media (min-width: 768px) {
          .md-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

function NavLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: 500,
        color: "#d1d5db",
        textDecoration: "none",
        transition: "all 0.3s",
        overflow: "hidden",
        border: "1px solid rgba(59, 130, 246, 0.5)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
        e.currentTarget.style.boxShadow = "inset 0 0 12px rgba(59,130,246,0.4), 0 0 12px rgba(59,130,246,0.3)";
        e.currentTarget.style.borderColor = "rgba(59, 130, 246, 1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#d1d5db";
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
      }}
    >
      {icon}
      {label}
    </a>
  );
}
