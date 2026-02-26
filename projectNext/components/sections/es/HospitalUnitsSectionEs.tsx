"use client";

import { useState } from "react";

type Hospital = {
  name: string;
  acronym: string;
  city: string;
  active?: boolean;
};

type StateData = {
  state: string;
  abbr: string;
  region: string;
  hospitals: Hospital[];
};

const statesData: StateData[] = [
  {
    state: "Acre",
    abbr: "AC",
    region: "Norte",
    hospitals: [
      { name: "Instituto Nacional de Traumatología y Ortopedia", acronym: "INTO - ACRE (HCAMP-RIO BRANCO)", city: "Rio Branco" },
      { name: "Fundación Hospital Estadual del Acre", acronym: "FUNDAHCRE", city: "Rio Branco" },
    ],
  },
  {
    state: "Amapá",
    abbr: "AP",
    region: "Norte",
    hospitals: [
      { name: "Unidad Hospitalaria de Porto Grande", acronym: "UHPG", city: "Porto Grande", active: true },
      { name: "Unidad de Atención de Urgencias Zona Sur", acronym: "UPA - MACAPÁ", city: "Macapá", active: true },
      { name: "Unidad Estadual de Internación", acronym: "UEI", city: "Macapá", active: true },
      { name: "Hospital de Campaña de Macapá", acronym: "HCAMP - MACAPÁ", city: "Macapá" },
    ],
  },
  {
    state: "Amazonas",
    abbr: "AM",
    region: "Norte",
    hospitals: [
      { name: "Unidad Hospitalaria de Tabatinga", acronym: "HOSPITAL DE TABATINGA", city: "Tabatinga", active: true },
      { name: "Hospital Regional de Tefé", acronym: "HOSPITAL DE TEFÉ", city: "Tefé", active: true },
      { name: "Unidad Hospitalaria de Humaitá", acronym: "HOSPITAL DE HUMAITÁ", city: "Humaitá", active: true },
      { name: "Hospital Universitario Getulio Vargas", acronym: "HUVG", city: "Manaus" },
    ],
  },
  {
    state: "Distrito Federal",
    abbr: "DF",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Militar de Área de Brasília", acronym: "HMAB", city: "Brasília", active: true },
      { name: "Hospital de las Fuerzas Armadas", acronym: "HFA", city: "Brasília" },
      { name: "Hospital de Campaña de la Región Sur - Gama", acronym: "HCAMP - GAMA", city: "Brasília" },
      { name: "Hospital de Campaña de la Región Oeste - Ceilândia", acronym: "HCAMP - CEILÂNDIA", city: "Brasília" },
      { name: "Hospital de Campaña de la Región Central - Autódromo", acronym: "HCAMP - AUTÓDROMO", city: "Brasília" },
      { name: "Departamento Penitenciario Nacional", acronym: "DEPEN", city: "Brasília" },
    ],
  },
  {
    state: "Goiás",
    abbr: "GO",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Estadual de Aparecida de Goiânia", acronym: "HEAPA", city: "Aparecida de Goiânia", active: true },
      { name: "Hospital Estadual Sandino de Amorim", acronym: "HEJA", city: "Jaraguá" },
      { name: "Hospital y Maternidad Nuestra Señora de Lourdes", acronym: "HMNSL", city: "Goiânia" },
      { name: "Hospital Estadual Ernestina Lopes Jaime", acronym: "HEELJ", city: "Pirenópolis" },
      { name: "Hospital Estadual de la Región Suroeste Drº Albanir Faleiros", acronym: "HURSO", city: "Santa Helena" },
      { name: "Hospital Municipal de Aparecida de Goiânia", acronym: "HMAP", city: "Aparecida de Goiânia" },
      { name: "Hospital de Enfermedades Tropicales", acronym: "HDT", city: "Goiânia" },
      { name: "Hospital Estadual de Urgencias de la Región Noroeste de Goiânia Drº Otávio Lage de Siqueira", acronym: "HUGOL", city: "Goiânia" },
      { name: "Santa Casa de Misericordia de Anápolis", acronym: "SANTA CASA DE ANÁPOLIS", city: "Anápolis" },
      { name: "Hospital de Campaña de Enfrentamiento al Coronavirus", acronym: "HCAMP - GOIÂNIA", city: "Goiânia" },
      { name: "Hospital de Campaña de Itumbiara (São Marcos)", acronym: "HCAMP - ITUMBIARA", city: "Itumbiara" },
      { name: "Hospital Estadual de Urgencias de Goiânia Drº Valdemir Cruz", acronym: "HUGO", city: "Goiânia" },
      { name: "Hospital para Enfrentamiento del Covid-19 - CentroNorte Goiano", acronym: "HCN", city: "Uruaçú" },
      { name: "Hospital Estadual de la Mujer", acronym: "HEMU", city: "Goiânia" },
      { name: "Maternidad - Nacer Ciudadano", acronym: "MNC", city: "Goiânia" },
      { name: "Hospital Estadual del Niño y del Adolescente", acronym: "HECAD", city: "Goiânia" },
      { name: "Centro de Atención Médica Drº Antônio Abasio da Silva", acronym: "CAM", city: "Catalão" },
    ],
  },
  {
    state: "Mato Grosso",
    abbr: "MT",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Estadual Santa Casa", acronym: "SANTA CASA - CUIABÁ", city: "Cuiabá" },
      { name: "Hospital Metropolitano de Várzea Grande", acronym: "HMVG", city: "Várzea Grande" },
      { name: "Hospital Municipal de Tangará da Serra", acronym: "HMTS", city: "Tangará da Serra" },
      { name: "Hospital Regional de Alta Floresta - Albert Sabin", acronym: "HRAF", city: "Alta Floresta" },
      { name: "Hospital Regional de Colíder - Drº Masanitsu Takano", acronym: "HRCO", city: "Colíder" },
    ],
  },
  {
    state: "Mato Grosso do Sul",
    abbr: "MS",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital da Vida", acronym: "HV", city: "Dourados" },
    ],
  },
  {
    state: "Minas Gerais",
    abbr: "MG",
    region: "Sudeste",
    hospitals: [
      { name: "Hospital Municipal São Judas Tadeu", acronym: "HMSJT", city: "Ribeirão das Neves" },
      { name: "Hospital Municipal de Paracatú", acronym: "HMP", city: "Paracatú" },
    ],
  },
  {
    state: "Pará",
    abbr: "PA",
    region: "Norte",
    hospitals: [
      { name: "Hospital Regional Público del Marajó", acronym: "HOSPITAL DO MARAJÓ", city: "Breves" },
      { name: "Maternidad y Unidades Básicas de Salud de Tomé - Açú", acronym: "—", city: "Tomé - Açú" },
      { name: "Unidad de Atención de Urgencias - Capanema", acronym: "UPA - CAPANEMA", city: "Capanema" },
    ],
  },
  {
    state: "Paraná",
    abbr: "PR",
    region: "Sur",
    hospitals: [
      { name: "Departamento Penitenciario Nacional - Catanduvas", acronym: "DEPEN", city: "Catanduvas" },
    ],
  },
  {
    state: "Rio Grande do Norte",
    abbr: "RN",
    region: "Nordeste",
    hospitals: [
      { name: "Departamento Penitenciario Nacional - Mossoró", acronym: "DEPEN", city: "Mossoró" },
    ],
  },
  {
    state: "Rondônia",
    abbr: "RO",
    region: "Norte",
    hospitals: [
      { name: "Hospital Regional de Guajará-Mirim", acronym: "HGM", city: "Guajará-Mirim", active: true },
      { name: "Hospital Municipal de Machadinho D'Oeste", acronym: "HMMD", city: "Machadinho D'Oeste", active: true },
      { name: "Hospital Municipal Antônio Luiz Macedo", acronym: "HMALM", city: "Nova Mamoré", active: true },
      { name: "Unidad de Atención de Urgencias de Porto Velho", acronym: "UPA - PORTO VELHO", city: "Porto Velho", active: true },
      { name: "Unidades Básicas de Salud de Porto Velho", acronym: "UBS - PORTO VELHO", city: "Porto Velho", active: true },
      { name: "Unidades Básicas de Salud de Nova Mamoré", acronym: "UBS - NOVA MAMORÉ", city: "Nova Mamoré", active: true },
      { name: "Hospital Municipal Drº Claudionor Couto Roriz", acronym: "—", city: "Ji - Paraná" },
    ],
  },
  {
    state: "São Paulo",
    abbr: "SP",
    region: "Sudeste",
    hospitals: [
      { name: "Hospital de Campaña de Bertioga", acronym: "HCAMP - BERTIOGA", city: "Bertioga" },
      { name: "Santa Casa de Presidente Venceslau", acronym: "—", city: "Presidente Venceslau" },
    ],
  },
  {
    state: "Tocantins",
    abbr: "TO",
    region: "Norte",
    hospitals: [
      { name: "Unidad de Atención de Urgencias - Araguaína", acronym: "UPA - ARAGUAÍNA", city: "Araguaína" },
    ],
  },
];

const regionColors: Record<string, string> = {
  Norte: "#0e7fc0",
  "Centro-Oeste": "#0a6b9e",
  Sudeste: "#0e7fc0",
  Sur: "#0a6b9e",
  Nordeste: "#0e7fc0",
};

export default function HospitalUnitsSectionEs() {
  const [activeState, setActiveState] = useState<string | null>(null);

  const selected = statesData.find((s) => s.state === activeState) ?? null;

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
              Presente en los siguientes estados:
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              Unidades Hospitalarias
            </h2>
            <p style={{ color: "#aaaaaa", fontSize: "15px", margin: 0 }}>
              Seleccione un estado para ver las unidades
            </p>
          </div>
        </div>

        {/* State selector — responsive grid: 2 cols desktop, 1 col mobile */}
        <div className="states-grid" style={{ marginBottom: "48px" }}>
          {statesData.map((s) => {
            const isActive = activeState === s.state;
            return (
              <button
                key={s.state}
                onClick={() => setActiveState(isActive ? null : s.state)}
                className="states-grid-btn"
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
                <div className="icon-circle" style={{ flexShrink: 0, width: 48, height: 48, borderRadius: "50%", background: isActive ? "rgba(14,127,192,0.6)" : "rgba(43,123,176,0.35)", border: `1px solid ${isActive ? "rgba(126,203,230,0.8)" : "rgba(43,123,176,0.5)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: "1.1rem", color: "#7ecbe6", lineHeight: 1 }} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.95rem", margin: 0, lineHeight: 1.3 }}>
                    {s.state}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", margin: "3px 0 0 0", lineHeight: 1.3 }}>
                    {s.abbr} · {s.hospitals.length} {s.hospitals.length === 1 ? "unidad" : "unidades"}
                  </p>
                </div>
                {isActive && (
                  <i className="fas fa-chevron-right" style={{ marginLeft: "auto", color: "#7ecbe6", fontSize: "0.75rem", flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Hospital panel */}
        {selected && (
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
                    Región {selected.region}
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
                  {selected.hospitals.length} {selected.hospitals.length === 1 ? "unidad" : "unidades"}
                </span>
                <button
                  onClick={() => setActiveState(null)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    color: "rgba(255,255,255,0.6)",
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

            {/* Hospital list — responsive grid: 2 cols desktop, 1 col mobile */}
            <div className="hospitals-grid">
              {selected.hospitals.map((h, i) => (
                <HospitalRowEs key={i} h={h} isLast={false} activeLabel="Activo" />
              ))}
            </div>
          </div>
        )}

        {/* Footer stats */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <p style={{ color: "#e0e0e0", fontSize: "15px" }}>
              + de{" "}
              <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>
                52 proyectos
              </strong>{" "}
              en{" "}
              <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>
                13 estados
              </strong>{" "}
              brasileños
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* State selector grid */
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

        /* Hospital list grid */
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

function HospitalRowEs({
  h,
  isLast: _isLast,
  activeLabel,
}: {
  h: { name: string; acronym: string; city: string; active?: boolean };
  isLast: boolean;
  activeLabel: string;
}) {
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
        className="icon-circle"
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
              {activeLabel}
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
