/**
 * DOOMSHEEK Rules Page
 * Modal overlay with terms (shared copy with RulesSection)
 */

import { X } from "lucide-react";
import RulesContent from "@/components/RulesContent";

export default function Rules({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(30, 58, 138, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "48rem",
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "2rem",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
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
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(59, 130, 246, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
        >
          <X size={20} />
        </button>

        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem", paddingRight: "2.5rem" }}>
          Правила использования Doomsheek
        </h1>

        <RulesContent />
      </div>
    </div>
  );
}
