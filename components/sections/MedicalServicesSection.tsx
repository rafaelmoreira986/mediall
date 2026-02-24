import Link from "next/link";

const services = [
  {
    icon: "flaticon-046-blood-pressure",
    title: "Negócios em Saúde",
    description:
      `Desde 2018, a Mediall Brasil apresenta soluções inovadoras aos seus clientes, abrangendo Gerenciamento de Unidades de Saúde, Gestão Médica e Multiassistencial, Monitoramento de Plantão Médico e Consultoria Especializada. Com perspicácia empreendedora, adaptamo-nos às demandas do mercado e criamos produtos sob medida para cada necessidade.`,
    link: "/services",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Segurança",
    description:
      `Por meio de uma gestão profissional humanizada, proporcionamos a todos um ambiente seguro e confiável. Nossos olhos estão atentos tanto aos profissionais de saúde, que dedicam o melhor de si, quanto aos pacientes, que demandam gratidão e cuidado. A segurança e a confiança são os pilares que sustentam cada decisão que tomamos.`,
    link: "/services",
  },
  {
    icon: "flaticon-018-medical-2",
    title: "Responsabilidade",
    description:
      `Os esforços da Mediall Brasil e o reconhecimento como empresa séria e confiável fundamentam-se nos valores, ética e comprometimento com o bem mais valioso que possuímos: a SAÚDE. Estamos convictos de que é possível transformar qualquer hospital, público ou privado, em uma instituição de ponta, esteja onde estiver.`,
    link: "/services",
  },
];

export default function MedicalServicesSection() {
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
                Mais de 9 anos em Gestão de Negócios em Saúde
              </p>
              <h2 className="heading-title" style={{ color: "#ffffff", fontWeight: 700 }}>
                Uma historia de Compromisso, Cuidados e Desenvolvimento na Saúde
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
                        <span>Saiba mais</span>
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
