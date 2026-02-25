"use client";
import Link from "next/link";

const features = [
  {
    icon: "flaticon-042-clinic",
    title: "Ambiente Seguro",
    desc: "Garantizamos la total seguridad de la información proporcionada a través de nuestro canal.",
  },
  {
    icon: "flaticon-027-medical-report",
    title: "Confidencialidad",
    desc: "Su identidad será preservada. La denuncia es 100% anónima y tratada con total reserva.",
  },
  {
    icon: "flaticon-022-medical",
    title: "Confiabilidad",
    desc: "Tratamos cada relato con seriedad, transparencia y compromiso con la verdad.",
  },
];

export default function ComplianceLandingEsClient() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="slider slider-2"
        id="compliance-hero"
      >
        <div className="container-fluid pr-0 pl-0">
          <div
            className="slide bg-overlay bg-overlay-dark-slider bg-section"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <div
                      style={{
                        background: "rgba(38, 59, 106, 0.88)",
                        padding: "40px 40px 36px",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        src="/assets/images/mediall/logoMediall.png"
                        alt="Mediall Brasil"
                        style={{ maxHeight: "60px", width: "auto", marginBottom: "24px" }}
                      />
                      <h2
                        style={{
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: 700,
                          marginBottom: "16px",
                          fontFamily: "Rubik, sans-serif",
                        }}
                      >
                        En Mediall, valoramos un ambiente seguro y ético.
                      </h2>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          margin: 0,
                        }}
                      >
                        Nuestro Canal de Denuncias está disponible para que pueda reportar, con
                        seguridad y confidencialidad, cualquier conducta que vaya en contra de nuestros
                        valores, políticas o la legislación vigente. Su voz es esencial para mantener un
                        ambiente íntegro y respetuoso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features-bar bg-section"
        style={{ backgroundImage: "url(/assets/images/background/pattern-2.jpg)" }}
      >
        <div className="container">
          <div className="row g-0 features-holder" style={{ display: "flex", flexWrap: "wrap" }}>
            {features.map((feat, i) => (
              <div key={i} className="col-12 col-lg-4" style={{ display: "flex" }}>
                <div className="feature-panel feature-reservation" style={{ width: "100%" }}>
                  <div className="feature-content">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <i className={feat.icon}></i>
                      <h5 style={{ textAlign: "center" }}>{feat.title}</h5>
                    </div>
                    <p style={{ textAlign: "center" }}>{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Término de Confidencialidad */}
      <section className="about about-2" style={{ padding: "0px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="about-img">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="Firma de documento de compliance"
                  style={{ borderRadius: "4px", marginTop: "95px" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="heading heading-16">
                <h2
                  className="heading-title"
                  style={{ fontSize: "24px", marginBottom: "20px" }}
                >
                  Término de Confidencialidad y Conformidad
                </h2>
                <p
                  className="heading-desc"
                  style={{ textAlign: "justify", lineHeight: "1.8" }}
                >
                  La información proporcionada es responsabilidad del denunciante y será
                  verificada por Mediall. Todos los datos serán tratados de manera
                  confidencial por la organización, con el objetivo de investigar posibles conductas
                  antiéticas o ilegales conforme a la legislación vigente. Al hacer clic
                  en &quot;Acepto&quot;, el usuario declara haber leído y comprendido la información y
                  autoriza el uso de los datos exclusivamente para ese fin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section
        style={{
          padding: "20px 0 80px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div
                className="actions-holder"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                  <button
                    className="btn btn--primary btn-line btn-line-after"
                    disabled
                    style={{ fontSize: "16px", padding: "14px 36px", color: "white", opacity: 0.5, cursor: "not-allowed" }}
                  >
                    <span>Reportar Incidente</span>
                    <span className="line"><span></span></span>
                  </button>
                  <Link
                    className="btn btn--secondary"
                    href="/compliance/consultar-protocolo"
                    style={{ fontSize: "16px", padding: "14px 36px", color: "white" }}
                  >
                    Consultar Protocolo
                  </Link>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#fff3cd",
                    border: "1px solid #ffc107",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    fontSize: "14px",
                    color: "#856404",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Canal de denuncias <strong>en mantenimiento</strong>. Pronto estará disponible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
