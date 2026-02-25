"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Department } from "@/components/sections/departments/types";

interface DepartmentModalEsProps {
  department: Department;
  onClose: () => void;
}

export default function DepartmentModalEs({ department, onClose }: DepartmentModalEsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(8, 18, 30, 0.78)",
        backdropFilter: "blur(6px)",
        animation: "department-backdrop-in 0.25s ease forwards",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          backgroundColor: "#1a2e44",
          width: "min(1100px, 96vw)",
          maxHeight: "90vh",
          overflowY: "auto",
          overscrollBehavior: "contain",
          borderRadius: "16px",
          boxShadow: "0 0 100px rgba(0,0,0,0.7)",
          color: "#cdd8e3",
          display: "flex",
          flexDirection: "column",
          animation: "department-modal-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          transformOrigin: "center center",
        }}
      >
        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", height: "260px", flexShrink: 0, borderRadius: "16px 16px 0 0", overflow: "hidden" }}>
          <img
            src={department.img}
            alt={department.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(26,46,68,0.15) 30%, #1a2e44 100%)",
            }}
          />
        </div>

        {/* Close button */}
        <div
          style={{
            position: "absolute",
            top: "calc(260px - 22px)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#1a2e44",
              border: "2px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s, transform 0.2s",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2e4a68";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a2e44";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ padding: "36px 48px 56px", flex: 1 }}>
          <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3 }}>
            {department.title}
          </h2>

          {department.modalContent && (
            <>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#7fb3d3", marginBottom: "20px", lineHeight: 1.5 }}>
                {department.modalContent.subtitle}
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }} />

              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#b8cad8", marginBottom: "36px" }}>
                {department.modalContent.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {department.modalContent.sections.map((section, i) => (
                  <div key={i}>
                    <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>
                      {section.title}
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {section.body.split("\n\n").map((paragraph, j) => (
                        <p key={j} style={{ fontSize: "14px", lineHeight: 1.75, color: "#b8cad8", margin: 0 }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
