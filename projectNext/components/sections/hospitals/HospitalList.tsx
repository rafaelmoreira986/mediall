import type { StateData } from "@/lib/types/hospitals";
import { regionColors } from "@/lib/data/hospitals";
import HospitalCard from "./HospitalCard";

interface HospitalListProps {
  selected: StateData;
  onClose: () => void;
}

export default function HospitalList({ selected, onClose }: HospitalListProps) {
  return (
    <div
      style={{
        backgroundColor: "#0d2d4e",
        border: "1px solid #1a4a72",
        borderRadius: "16px",
        padding: "32px",
        marginBottom: "40px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      {/* Panel header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              backgroundColor: regionColors[selected.region] ?? "var(--global--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 800,
              color: "#ffffff",
              flexShrink: 0,
            }}
          >
            {selected.abbr}
          </div>
          <div>
            <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: 0 }}>
              {selected.state}
            </h3>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#7ecbe6",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Região {selected.region}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              backgroundColor: "var(--global--color-primary)",
              color: "#fff",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {selected.hospitals.length} {selected.hospitals.length === 1 ? "unidade" : "unidades"}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar painel"
            style={{
              background: "#0a2340",
              border: "1px solid #1a4a72",
              borderRadius: "8px",
              color: "#7ecbe6",
              cursor: "pointer",
              fontSize: "18px",
              lineHeight: 1,
              padding: "4px 10px",
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Hospital grid */}
      <div className="hospitals-grid">
        {selected.hospitals.map((h, i) => (
          <HospitalCard key={i} h={h} />
        ))}
      </div>
    </div>
  );
}
