import type { Hospital } from "@/lib/types/hospitals";

export default function HospitalCard({ h }: { h: Hospital }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "16px 22px",
        background: "#0a2340",
        transition: "background 0.2s",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#0d3560";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#0a2340";
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "rgba(43,123,176,0.35)",
          border: "1px solid rgba(43,123,176,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-hospital" style={{ fontSize: "1.1rem", color: "#7ecbe6", lineHeight: 1 }} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.85rem", margin: 0, lineHeight: 1.3 }}>
            {h.name}
          </p>
          {h.active && (
            <span style={{ flexShrink: 0, fontSize: "10px", fontWeight: 700, backgroundColor: "#14532d", color: "#4ade80", borderRadius: "20px", padding: "2px 8px", whiteSpace: "nowrap" }}>
              Ativo
            </span>
          )}
        </div>
        <p style={{ color: "#7ecbe6", fontSize: "0.75rem", margin: "3px 0 0 0", lineHeight: 1.3 }}>
          {h.acronym !== "—" ? h.acronym : ""}
          {h.acronym !== "—" && " · "}
          <span style={{ color: "#8ab0cc" }}>{h.city}</span>
        </p>
      </div>
    </div>
  );
}
