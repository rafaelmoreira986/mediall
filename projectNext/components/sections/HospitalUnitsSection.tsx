"use client";

const hospitalUnits = [
  { state: "Acre", city: "Rio Branco" },
  { state: "Amapá", city: "Porto Grande" },
  { state: "Amazonas", city: "Humaitá" },
  { state: "Amazonas", city: "Tefé" },
  { state: "Amazonas", city: "Tabatinga" },
  { state: "Distrito Federal", city: "Brasília" },
  { state: "Goiás", city: "Aparecida de Goiânia" },
  { state: "Goiás", city: "Goiânia" },
  { state: "Mato Grosso", city: "Cuiabá" },
  { state: "Mato Grosso", city: "Várzea Grande" },
  { state: "Mato Grosso do Sul", city: "Campo Grande" },
  { state: "Minas Gerais", city: "Ribeirão das Neves" },
  { state: "Pará", city: "Breves" },
  { state: "Paraná", city: "Catanduva" },
  { state: "Rondônia", city: "Guajará-Mirim" },
  { state: "Rondônia", city: "Ji-Paraná" },
  { state: "Rondônia", city: "Machadinho D'Oeste" },
  { state: "Rondônia", city: "Nova Mamoré" },
  { state: "Rondônia", city: "Porto Velho" },
  { state: "Rio Grande do Norte", city: "Mossoró" },
];

export default function HospitalUnitsSection() {
  const midpoint = Math.ceil(hospitalUnits.length / 2);
  const leftColumn = hospitalUnits.slice(0, midpoint);
  const rightColumn = hospitalUnits.slice(midpoint);

  return (
    <section
      className="hospital-units"
      id="hospital-units"
      style={{
        padding: "80px 0",
        position: "relative",
        backgroundImage: "url('/assets/images/mediall/hospital-modern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className="heading heading-12 heading-13" style={{ marginBottom: "10px" }}>
              <p className="heading-subtitle" style={{ color: "#7ecbe6" }}>
                Presente nas seguintes cidades:
              </p>
              <h2
                className="heading-title"
                style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "15px",
                }}
              >
                Unidades Hospitalares
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row">
              <div className="col-12 col-md-6">
                <ul
                  className="list-unstyled"
                  style={{ margin: 0, padding: 0 }}
                >
                  {leftColumn.map((unit, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                        fontSize: "16px",
                        color: "#e0e0e0",
                      }}
                    >
                      <i
                        className="fas fa-check-double"
                        style={{
                          color: "var(--global--color-primary)",
                          marginRight: "12px",
                          fontSize: "14px",
                        }}
                      />
                      <span>
                        <strong style={{ color: "#ffffff" }}>{unit.state}</strong> - {unit.city}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul
                  className="list-unstyled"
                  style={{ margin: 0, padding: 0 }}
                >
                  {rightColumn.map((unit, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                        fontSize: "16px",
                        color: "#e0e0e0",
                      }}
                    >
                      <i
                        className="fas fa-check-double"
                        style={{
                          color: "var(--global--color-primary)",
                          marginRight: "12px",
                          fontSize: "14px",
                        }}
                      />
                      <span>
                        <strong style={{ color: "#ffffff" }}>{unit.state}</strong> - {unit.city}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: "40px" }}>
          <div className="col-12 col-lg-8 text-center">
            <p style={{ color: "#e0e0e0", fontSize: "15px" }}>
              + de <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>46 projetos</strong> em{" "}
              <strong style={{ color: "var(--global--color-primary)", fontSize: "18px" }}>12 estados</strong> brasileiros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
