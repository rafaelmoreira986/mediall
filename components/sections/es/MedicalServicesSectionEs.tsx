import Link from "next/link";

const services = [
  {
    icon: "flaticon-046-blood-pressure",
    title: "Negocios en Salud",
    description:
      `Desde 2018, Mediall Brasil presenta soluciones innovadoras a sus clientes, abarcando Gerenciamiento de Unidades de Salud, Gestión Médica y Multiasistencial, Monitoreo de Guardia Médica y Consultoría Especializada. Con perspicacia emprendedora, nos adaptamos a las demandas del mercado y creamos productos a medida para cada necesidad.`,
    link: "/services",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Seguridad",
    description:
      `A través de una gestión profesional humanizada, brindamos a todos un ambiente seguro y confiable. Nuestros ojos están atentos tanto a los profesionales de salud, que dan lo mejor de sí, como a los pacientes, que merecen gratitud y cuidado. La seguridad y la confianza son los pilares que sostienen cada decisión que tomamos.`,
    link: "/services",
  },
  {
    icon: "flaticon-018-medical-2",
    title: "Excelencia",
    description:
      `Durante la pandemia de Covid-19, Mediall Brasil se destacó como especialista en la estructuración y gestión de Centros de Atención y hospitales de campaña, asumiendo la organización de camas, equipos multiprofesionales, flujos asistenciales y protocolos clínicos en escenarios de alta complejidad.`,
    link: "/services",
  },
];

export default function MedicalServicesSectionEs() {
  return (
    <section
      className="services services-2"
      id="services-2"
      style={{
        position: "relative",
        backgroundImage: "url('/assets/images/mediall/hospital.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 6, 14, 0.7)",
          zIndex: 0,
        }}
      />
      <div className="bg-section" style={{ display: "none" }}>
        <img src="/assets/images/background/pattern.png" alt="background" />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading heading-7 text--center">
              <p className="heading-subtitle" style={{ color: "#7ecbe6", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.9rem" }}>
                Más de 9 años en Gestión de Negocios en Salud
              </p>
              <h2 className="heading-title" style={{ color: "#ffffff", fontWeight: 700 }}>
                Una historia de Compromiso, Cuidado y Desarrollo en la Salud
              </h2>
            </div>
          </div>
        </div>

        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4" style={{ display: "flex" }}>
              <div className="service-panel service-panel-2" data-hover="" style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div className="service-panel-holder" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <div className="service-content" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="service-title" style={{ textAlign: "center" }}>
                      <h4>
                        <Link href={service.link}>{service.title}</Link>
                      </h4>
                    </div>
                    <div className="service-desc text--just" style={{ flex: 1 }}>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-more">
                      <Link
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href={service.link}
                      >
                        <span className="line">
                          <span></span>
                        </span>
                        <span>Saber más</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
