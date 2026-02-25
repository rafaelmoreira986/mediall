import Link from "next/link";

const timeline = [
  {
    year: "2018",
    title: "Fundación",
    desc: "Mediall Brasil nace, fundada por médicos, con la misión de asegurar el bienestar y proporcionar mejor calidad de vida a los pacientes.",
  },
  {
    year: "2020",
    title: "Expansión en la Pandemia",
    desc: "Ante la pandemia de Covid-19, ampliamos nuestra actuación en diversos estados, priorizando la Gestión en Salud y Hospitalaria Plena.",
  },
  {
    year: "2022",
    title: "Gobernanza Corporativa",
    desc: "Implementación de la gobernanza corporativa, creación del consejo directivo y nuevas contrataciones estratégicas.",
  },
  {
    year: "2026",
    title: "9 Años de Excelencia",
    desc: "Presencia significativa en centros hospitalarios públicos y expansión hacia unidades privadas en todo Brasil.",
  },
];

const services = [
  {
    icon: "flaticon-030-hospital",
    title: "Gestión de Unidades de Salud",
    desc: "Administración integral y eficiente de unidades de salud públicas y privadas.",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Gestión Médica y Multiasistencial",
    desc: "Coordinación integrada de equipos médicos y multidisciplinarios con foco en la calidad.",
  },
  {
    icon: "flaticon-009-pulse",
    title: "Monitoreo de Guardias Médicas",
    desc: "Seguimiento y control eficaz de las guardias médicas en tiempo real.",
  },
  {
    icon: "flaticon-026-education",
    title: "Consultoría Especializada",
    desc: "Orientación estratégica para gestores del área de salud con soluciones personalizadas.",
  },
];

const values = [
  { icon: "fas fa-balance-scale", label: "Ética" },
  { icon: "fas fa-eye", label: "Transparencia" },
  { icon: "fas fa-award", label: "Credibilidad" },
  { icon: "fas fa-cogs", label: "Competencia" },
  { icon: "fas fa-handshake", label: "Compromiso" },
  { icon: "fas fa-user-tie", label: "Profesionalismo" },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero hero-6 bg-overlay bg-overlay-dark"
        style={{ minHeight: "500px" }}
      >
        <div className="bg-section">
          <img
            src="/assets/images/mediall/hospital-hall.jpeg"
            alt="Mediall Brasil"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h2
                  className="hero-title"
                  style={{
                    color: "#fff",
                    fontSize: "clamp(28px, 4vw, 52px)",
                    lineHeight: 1.2,
                    textShadow:
                      "1px 1px 0px rgba(7,7,7,0.8), 2px 2px 0px rgba(255,255,255,0.15), 4px 4px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  9 Años de Compromiso, Cuidado y Desarrollo en Salud
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="about about-2" id="quienes-somos-intro" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6" style={{ marginBottom: "30px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <img
                  className="img-fluid"
                  src="/assets/images/mediall/Imagens Books Mediall (10).jpg.jpeg"
                  alt="Equipo Mediall Brasil"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    background: "var(--global--color-secondary, #13c5dd)",
                    color: "#fff",
                    padding: "15px 25px",
                    borderRadius: "6px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  +9 Años de Experiencia
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="heading heading-16" style={{ marginBottom: "20px" }}>
                <p className="heading-subtitle">Quiénes Somos</p>
                <h2 className="heading-title" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
                  Mediall Brasil - Gestión en Salud
                </h2>
              </div>
              <p style={{ lineHeight: 1.8, color: "#777", textAlign: "justify", marginBottom: "15px" }}>
                Mediall Brasil es reconocida como líder y referencia en gestión de salud. Fundada por médicos y especializada en la atención a unidades de salud, la empresa se centra en la gestión multiasistencial y valora la interdisciplinariedad, contando con profesionales de diversas especialidades en su equipo.
              </p>
              <p style={{ lineHeight: 1.8, color: "#777", textAlign: "justify", marginBottom: "25px" }}>
                Comprometida con el bienestar de la sociedad, Mediall está constantemente en busca de soluciones que mejoren las decisiones de los gestores del área.
              </p>
              <ul className="advantages-list" style={{ marginBottom: "20px" }}>
                <li><i className="fas fa-check" style={{ color: "#f0f0f0" }}></i> Gestión Multiasistencial e Interdisciplinaria</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Equipo de Diversas Especialidades</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Soluciones Innovadoras en Salud</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Hospitales Públicos y Privados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: "80px 0", background: "#0a1e3d", color: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "50px" }}>
              <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                Nuestra Trayectoria
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fff" }}>
                Hitos de Nuestra Historia
              </h2>
            </div>
          </div>
          <div className="row">
            {timeline.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3" style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "30px 25px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    height: "100%",
                    borderTop: "4px solid #13c5dd",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      background: "#13c5dd",
                      color: "#fff",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: 700,
                      marginBottom: "15px",
                    }}
                  >
                    {item.year}
                  </span>
                  <h5 style={{ fontWeight: 700, marginBottom: "10px", color: "#fff" }}>{item.title}</h5>
                  <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: "15px" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story Section with BG Image */}
      <section style={{ position: "relative", padding: "100px 0" }}>
        <div className="bg-section">
          <img src="/assets/images/mediall/banner.jpg" alt="background" />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="heading heading-14" style={{ textAlign: "center", marginBottom: "40px" }}>
                <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>La Esencia de Mediall</p>
                <h2 style={{ color: "#0a1e3d", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 700 }}>
                  A través de una gestión profesional y humanizada
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                    Nuestros ojos están atentos tanto a los profesionales de salud, que dan lo mejor de sí, como a los pacientes, que merecen gratitud y amor. Proporcionamos a todos un ambiente seguro y confiable para atender las necesidades individuales de quienes cruzan nuestro camino.
                  </p>
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify" }}>
                    Los esfuerzos de Mediall Brasil y el reconocimiento como empresa seria y confiable se fundamentan en los valores, la ética y el compromiso con el bien más valioso que poseemos: la <strong style={{ color: "#0a1e3d" }}>SALUD</strong>.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                    Con la experiencia acumulada junto a nuestro impecable equipo, Mediall aspira a crear algo duradero y transformador para la realidad de la prestación de servicios de salud en Brasil.
                  </p>
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify" }}>
                    La empresa está convencida de que es posible transformar cualquier hospital, público o privado, en una institución de vanguardia, esté donde esté.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: "80px 0", background: "#0c2340", color: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "50px" }}>
              <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                Lo que nos guía
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fff" }}>
                Nuestros Valores
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {values.map((val, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2" style={{ marginBottom: "30px", textAlign: "center" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(19,197,221,0.3)",
                    borderRadius: "50%",
                    width: "110px",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <i className={val.icon} style={{ fontSize: "32px", color: "#13c5dd" }}></i>
                </div>
                <h6 style={{ fontWeight: 600, fontSize: "14px", color: "#fff" }}>{val.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Solutions Section */}
      <section className="services services-2" style={{ padding: "80px 0", background: "#ffffff" }}>
        <div className="bg-section">
          <img src="/assets/images/background/pattern.png" alt="background" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "40px" }}>
              <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                Soluciones Innovadoras
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#0a1e3d" }}>
                Nuestras Áreas de Actuación
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginTop: "15px" }}>
                En los últimos años, Mediall ha presentado soluciones innovadoras a sus clientes, priorizando siempre la excelencia en la gestión en salud.
              </p>
            </div>
          </div>
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {services.map((service, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3" style={{ display: "flex", marginBottom: "30px" }}>
                <div
                  className="service-panel service-panel-2"
                  data-hover=""
                  style={{ display: "flex", flexDirection: "column", width: "100%" }}
                >
                  <div className="service-panel-holder" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div className="service-content" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <div className="service-title" style={{ textAlign: "center" }}>
                        <h4>{service.title}</h4>
                      </div>
                      <div className="service-desc text--just" style={{ flex: 1 }}>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestión Plena Section */}
      <section style={{ padding: "80px 0", background: "#091a33", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6" style={{ marginBottom: "30px" }}>
              <div className="heading heading-16">
                <p className="heading-subtitle" style={{ color: "#13c5dd" }}>Gestión Plena</p>
                <h2 className="heading-title" style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#fff" }}>
                  Transformando la realidad de la salud en Brasil
                </h2>
              </div>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify", marginBottom: "15px" }}>
                Desde el inicio, Mediall buscó proveer soluciones y servicios médicos, abarcando la organización de guardias y la gestión de equipos con excelencia. A medida que actuaba en ese mercado y ante el aumento de las demandas, los fundadores identificaron vacíos en actividades específicas.
              </p>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify", marginBottom: "15px" }}>
                Con perspicacia emprendedora, se adaptaron gradualmente y crearon nuevos productos de acuerdo con las necesidades de los clientes. De esta forma, Mediall mantuvo su competitividad en el escenario hospitalario, manteniéndose fiel a la esencia de ofrecer servicios de salud con calidad.
              </p>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify" }}>
                A partir de esta iniciativa, surgió el concepto de gestión plena, llevando a Mediall a un nuevo nivel de actuación. Se implementó la gobernanza corporativa, resultando en la creación del consejo directivo y en nuevas contrataciones.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <img
                  className="img-fluid"
                  src="/assets/images/mediall/Imagens Books Mediall (8).jpg.jpeg"
                  alt="Gestión Plena Mediall"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="cta cta-3" id="quienes-somos-mvv" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="heading heading-6">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <p className="heading-subtitle">Nuestro Propósito</p>
                <h2 className="heading-title">Misión, Visión y Valores</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="processes">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <div className="process-panel" data-hover="">
                <p className="process-number">01.</p>
                <div className="process-body">
                  <div className="process-icon">
                    <i className="flaticon-009-pulse"></i>
                  </div>
                  <div className="process-content">
                    <h5>Misión</h5>
                    <p>
                      Prestar servicios en las diversas áreas de la medicina para atender las necesidades y valorar a los profesionales de salud, pacientes y hospitales de todo Brasil, con calidad, competencia y confiabilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="process-panel" data-hover="">
                <p className="process-number">02.</p>
                <div className="process-body">
                  <div className="process-icon">
                    <i className="flaticon-010-ophtalmology"></i>
                  </div>
                  <div className="process-content">
                    <h5>Visión</h5>
                    <p>
                      Ser la empresa líder en atención de salud hospitalaria en Brasil, reconocidamente seria y confiable, destacándose por un equipo capacitado y comprometido con la calidad de atención.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="process-panel" data-hover="">
                <p className="process-number">03.</p>
                <div className="process-body">
                  <div className="process-icon">
                    <i className="flaticon-044-caduceus"></i>
                  </div>
                  <div className="process-content">
                    <h5>Valores</h5>
                    <p>
                      Ética, transparencia, credibilidad, competencia, compromiso, profesionalismo y atención al bienestar de pacientes y colaboradores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ position: "relative", padding: "80px 0", textAlign: "center" }}>
        <div className="bg-section">
          <img src="/assets/images/mediall/mediall-brasil-acre-2-1.jpeg" alt="Únete a Mediall" />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2
                style={{
                  color: "#0a1e3d",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                ¡Únete a Mediall Brasil!
              </h2>
              <p
                style={{
                  color: "#777",
                  fontSize: "18px",
                  lineHeight: 1.8,
                  marginBottom: "35px",
                }}
              >
                Estamos convencidos de que es posible transformar cualquier hospital en una institución de vanguardia. Únete a nosotros en esta misión.
              </p>
              <Link
                className="btn btn--primary btn-line btn-line-after"
                href="/contact"
                style={{ marginRight: "15px", justifyContent: "flex", alignItems: "center", marginLeft: "350px" }}
              >
                <span>Contáctanos</span>
                <span className="line">
                  <span></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
