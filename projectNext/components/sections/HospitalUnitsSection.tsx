"use client";

import { useState } from "react";
import { statesData } from "@/lib/data/hospitals";
import StateSelector from "./hospitals/StateSelector";
import HospitalList from "./hospitals/HospitalList";

export default function HospitalUnitsSection() {
  const [activeState, setActiveState] = useState<string | null>(null);

  const selected = statesData.find((s) => s.state === activeState) ?? null;

  function handleSelect(state: string) {
    setActiveState((prev) => (prev === state ? null : state));
  }

  return (
    <section
      className="hospital-units"
      id="hospital-units"
      style={{
        padding: "80px 0",
        position: "relative",
        backgroundImage: "url('/assets/images/mediall/blue-hospital.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "48px" }}>
            <p style={{ color: "#7ecbe6", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
              Presente nos seguintes estados:
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              Unidades Hospitalares
            </h2>
            <p style={{ color: "#aaaaaa", fontSize: "15px", margin: 0 }}>
              Selecione um estado para ver as unidades
            </p>
          </div>
        </div>

        <StateSelector
          states={statesData}
          activeState={activeState}
          onSelect={handleSelect}
        />

        {selected && (
          <HospitalList
            selected={selected}
            onClose={() => setActiveState(null)}
          />
        )}

        {/* Footer stats */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <p style={{ color: "#e0e0e0", fontSize: "15px" }}>
              + de{" "}
              <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>
                52 projetos
              </strong>{" "}
              em{" "}
              <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>
                13 estados
              </strong>{" "}
              brasileiros
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .states-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .states-grid {
            grid-template-columns: 1fr;
          }
        }

        .hospitals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid #1a4a72;
          border-radius: 8px;
          overflow: hidden;
        }
        .hospitals-grid > * {
          border-right: 1px solid #1a4a72;
          border-bottom: 1px solid #1a4a72;
        }
        .hospitals-grid > *:nth-child(even) {
          border-right: none;
        }
        .hospitals-grid > *:nth-last-child(1),
        .hospitals-grid > *:nth-last-child(2):nth-child(odd) {
          border-bottom: none;
        }
        @media (max-width: 767px) {
          .hospitals-grid {
            grid-template-columns: 1fr;
          }
          .hospitals-grid > * {
            border-right: none;
          }
          .hospitals-grid > *:last-child {
            border-bottom: none;
          }
          .hospitals-grid > *:nth-last-child(2):nth-child(odd) {
            border-bottom: 1px solid #1a4a72;
          }
        }
      `}</style>
    </section>
  );
}
