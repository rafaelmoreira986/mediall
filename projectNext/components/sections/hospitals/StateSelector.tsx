import type { StateData } from "@/lib/types/hospitals";

interface StateSelectorProps {
  states: StateData[];
  activeState: string | null;
  onSelect: (state: string) => void;
}

export default function StateSelector({ states, activeState, onSelect }: StateSelectorProps) {
  return (
    <div className="states-grid" style={{ marginBottom: "48px" }}>
      {states.map((s) => {
        const isActive = activeState === s.state;
        return (
          <button
            key={s.state}
            onClick={() => onSelect(s.state)}
            aria-pressed={isActive}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              padding: "18px 22px",
              width: "100%",
              background: isActive ? "rgba(14,127,192,0.35)" : "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.2s",
              textAlign: "left",
            }}
            onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)"; }}
            onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: isActive ? "rgba(14,127,192,0.6)" : "rgba(43,123,176,0.35)",
                border: `1px solid ${isActive ? "rgba(126,203,230,0.8)" : "rgba(43,123,176,0.5)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fas fa-map-marker-alt" style={{ fontSize: "1.1rem", color: "#7ecbe6", lineHeight: 1 }} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.95rem", margin: 0, lineHeight: 1.3 }}>
                {s.state}
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", margin: "3px 0 0 0", lineHeight: 1.3 }}>
                {s.abbr} · {s.hospitals.length} {s.hospitals.length === 1 ? "unidade" : "unidades"}
              </p>
            </div>
            {isActive && (
              <i className="fas fa-chevron-right" style={{ marginLeft: "auto", color: "#7ecbe6", fontSize: "0.75rem", flexShrink: 0 }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
