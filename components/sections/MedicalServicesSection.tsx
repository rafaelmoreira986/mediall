import Link from "next/link";

const services = [
  {
    icon: "flaticon-046-blood-pressure",
    title: "Negócios em Saúde a Nível Nacional",
    description:
      `Como empresa líder em gestão em saúde a nível nacional, estamos comprometidos em impulsionar a excelência e eficiência nos serviços de saúde em todo o país.  
      Trabalhamos incansavelmente para desenvolver soluções personalizadas que atendam às necessidades únicas de nossos clientes, contribuindo assim para o avanço do setor de Negócios em Saúde em escala nacional.`,
    link: "/services",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Segurança",
    description:
      `Comprometemo-nos a fornecer soluções que garantam a proteção e o bem-estar dos pacientes, profissionais de saúde e comunidades em geral. A segurança é a base de nossos serviços, desde a gestão eficiente de 
      informações confidenciais até a implementação de práticas inovadoras para garantir a integridade dos processos de saúde.`,
    link: "/services",
  },
  {
    icon: "flaticon-018-medical-2",
    title: "Responsabilidade",
    description:
      `Nossa responsabilidade estende-se a garantir a eficiência operacional, a qualidade dos serviços prestados e o respeito pelos padrões éticos mais elevados. Estamos conscientes do impacto que nossas decisões 
      têm na vida das pessoas e, por isso, estamos empenhados em promover práticas responsáveis que contribuam para um sistema de saúde mais equitativo, acessível e sustentável.`,
    link: "/services",
  },
];

export default function MedicalServicesSection() {
  return (
    <section className="services services-2" id="services-2">
      <div className="bg-section">
        <img src="/assets/images/background/pattern.png" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading heading-7 text--center">
              <p className="heading-subtitle">
                The Best Medical And General Practice Care!
              </p>
              <h2 className="heading-title">
                Providing Medical Care For The Sickest In Community.
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
                    <div className="service-title">
                      <h4>
                        <Link href={service.link}>{service.title}</Link>
                      </h4>
                    </div>
                    <div className="service-desc" style={{ flex: 1 }}>
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
                        <span>read more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="more-services">
              <p>
                Delivering tomorrow&apos;s health care for your family.{" "}
                <Link href="/doctors-timetable">view doctors&apos; timetable</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
