"use client";
import Link from "next/link";

const features = [
  {
    icon: "flaticon-042-clinic",
    title: "Ambiente Seguro",
    desc: "Garantimos a segurança total das informações fornecidas através de nosso canal.",
  },
  {
    icon: "flaticon-027-medical-report",
    title: "Sigilo",
    desc: "Sua identidade será preservada. A denúncia é 100% anônima e tratada com total sigilo.",
  },
  {
    icon: "flaticon-022-medical",
    title: "Confiabilidade",
    desc: "Tratamos cada relato com seriedade, transparência e compromisso com a verdade.",
  },
];

export default function ComplianceLandingPage() {
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
                        Na Mediall, valorizamos um ambiente seguro e ético.
                      </h2>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          margin: 0,
                        }}
                      >
                        Nosso Canal de Denúncias está disponível para que você possa relatar, com
                        segurança e confidencialidade, qualquer conduta que vá contra nossos
                        valores, políticas ou a legislação. Sua voz é essencial para mantermos um
                        ambiente íntegro e respeitoso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Ambiente Seguro, Sigilo, Confiabilidade */}
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

      {/* Termo de Confidencialidade */}
      <section className="about about-2" style={{ padding: "0px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="about-img">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="Assinatura de documento de compliance"
                  style={{ borderRadius: "4px", marginTop: "95px"}}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="heading heading-16">
                <h2
                  className="heading-title"
                  style={{ fontSize: "24px", marginBottom: "20px" }}
                >
                  Termo de Confidencialidade e Concordância
                </h2>
                <p
                  className="heading-desc"
                  style={{ textAlign: "justify", lineHeight: "1.8" }}
                >
                  As informações fornecidas são de responsabilidade do relator e serão
                  verificadas pela Mediall Goiânia. Todos os dados serão tratados de forma
                  confidencial pela organização, com o objetivo de apurar possíveis condutas
                  antiéticas ou ilegais conforme a Lei Anticorrupção n° 12.846/2013. Ao clicar
                  em &quot;Concordo&quot;, o usuário declara ter lido e compreendido as informações e
                  autoriza o uso dos dados exclusivamente para essa finalidade.
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
                    <span>Reportar Ocorrido</span>
                    <span className="line"><span></span></span>
                  </button>
                  <Link
                    className="btn btn--secondary"
                    href="/compliance/consultar-protocolo"
                    style={{ fontSize: "16px", padding: "14px 36px", color: "white" }}
                  >
                    Visualizar Protocolo
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
                  Canal de denúncias <strong>Em manutenção</strong>. Em breve estará disponível.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
