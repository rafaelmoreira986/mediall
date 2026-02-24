import Link from "next/link";

const timeline = [
  {
    year: "2018",
    title: "Fundação",
    desc: "A Mediall Brasil nasce, fundada por médicos, com a missão de assegurar o bem-estar e proporcionar melhor qualidade de vida aos pacientes.",
  },
  {
    year: "2020",
    title: "Expansão na Pandemia",
    desc: "Diante da pandemia da Covid-19, ampliamos nossa atuação em diversos estados, priorizando a Gestão em Saúde e Hospitalar Plena.",
  },
  {
    year: "2022",
    title: "Governança Corporativa",
    desc: "Implementação da governança corporativa, criação do conselho diretor e novas contratações estratégicas.",
  },
  {
    year: "2026",
    title: "9 Anos de Excelência",
    desc: "Presença significativa em centros hospitalares públicos e expansão para unidades privadas em todo o Brasil.",
  },
];

const services = [
  {
    icon: "flaticon-030-hospital",
    title: "Gerenciamento de Unidades de Saúde",
    desc: "Administração abrangente e eficiente de unidades de saúde públicas e privadas.",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Gestão Médica e Multiassistencial",
    desc: "Coordenação integrada de equipes médicas e multidisciplinares com foco na qualidade.",
  },
  {
    icon: "flaticon-009-pulse",
    title: "Monitoramento de Plantão Médico",
    desc: "Acompanhamento e controle eficaz dos plantões médicos em tempo real.",
  },
  {
    icon: "flaticon-026-education",
    title: "Consultoria Especializada",
    desc: "Orientação estratégica para gestores da área de saúde com soluções personalizadas.",
  },
];

const values = [
  { icon: "fas fa-balance-scale", label: "Ética" },
  { icon: "fas fa-eye", label: "Transparência" },
  { icon: "fas fa-award", label: "Credibilidade" },
  { icon: "fas fa-cogs", label: "Competência" },
  { icon: "fas fa-handshake", label: "Comprometimento" },
  { icon: "fas fa-user-tie", label: "Profissionalismo" },
];

export default function QuemSomosPage() {
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
                  9 Anos de Compromisso, Cuidados e Desenvolvimento na Saúde
                </h2>
              </div>
  
            </div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="about about-2" id="quem-somos-intro" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6" style={{ marginBottom: "30px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <img
                  className="img-fluid"
                  src="/assets/images/mediall/Imagens Books Mediall (10).jpg.jpeg"
                  alt="Equipe Mediall Brasil"
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
                  +9 Anos de Experiência
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="heading heading-16" style={{ marginBottom: "20px" }}>
                <p className="heading-subtitle">Quem Somos</p>
                <h2 className="heading-title" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
                  Mediall Brasil - Gestão em Saúde
                </h2>
              </div>
              <p style={{ lineHeight: 1.8, color: "#777", textAlign: "justify", marginBottom: "15px" }}>
                A Mediall Brasil é reconhecida como líder e referência em gestão de saúde. Fundada por médicos e especializada no atendimento a unidades de saúde, a empresa concentra-se na gestão multiassistencial e valoriza a interdisciplinaridade, contando com profissionais de diversas especialidades em sua equipe.
              </p>
              <p style={{ lineHeight: 1.8, color: "#777", textAlign: "justify", marginBottom: "25px" }}>
                Comprometida com o bem-estar da sociedade, a Mediall está constantemente em busca de soluções que aprimorem as decisões dos gestores da área.
              </p>
              <ul className="advantages-list" style={{ marginBottom: "20px" }}>
                <li><i className="fas fa-check" style={{ color: "#f0f0f0" }}></i> Gestão Multiassistencial e Interdisciplinar</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Equipe de Diversas Especialidades</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Soluções Inovadoras em Saúde</li>
                <li><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Hospitais Públicos e Privados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History / Story Section */}
      {/* <section
        className="cta cta-3"
        style={{
          padding: "80px 0",
          background: "#0e2a4a",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="heading heading-6">
            <div className="row">
              <div className="col-12 col-lg-5">
                <p className="heading-subtitle" style={{ color: "#13c5dd" }}>Nossa História</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="heading-title" style={{ color: "#fff" }}>
                  Uma trajetória de dedicação e transformação
                </h2>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <div className="prief-set">
                  <p style={{ textAlign: "justify", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                    Desde 2018, a Mediall Brasil tem se dedicado a assegurar o bem-estar e proporcionar uma melhor qualidade de vida aos pacientes. Durante esse período, ouvimos inúmeras histórias repletas de emoções, permeadas por superação e uma forte vontade de viver. Em cada uma dessas narrativas, absorvemos valiosas lições.
                  </p>
                  <p style={{ textAlign: "justify", lineHeight: 1.8, marginTop: "15px", color: "rgba(255,255,255,0.8)" }}>
                    Ao longo de 9 anos, adquirimos um vasto aprendizado, compreendendo que estender a mão, oferecer um ombro amigo e um simples abraço podem contribuir significativamente na recuperação daqueles que necessitam de nossos cuidados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      <section style={{ padding: "80px 0", background: "#0a1e3d", color: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "50px" }}>
              <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                Nossa Trajetória
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fff" }}>
                Marcos da Nossa História
              </h2>
            </div>
          </div>
          <div className="row">
            {timeline.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3" style={{ marginBottom: "30px" }}>
                <div
                  className="quem-somos-timeline-card"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "30px 25px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    height: "100%",
                    borderTop: "4px solid #13c5dd",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
      <section
        style={{
          position: "relative",
          padding: "100px 0",
        }}
      >
        <div className="bg-section">
          <img
            src="/assets/images/mediall/banner.jpg"
            alt="background"
          />
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
                <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>A Essência da Mediall</p>
                <h2 style={{ color: "#0a1e3d", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 700 }}>
                  Por meio de uma gestão profissional humanizada
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                    Nossos olhos estão atentos tanto aos profissionais de saúde, que dedicam o melhor de si, quanto aos pacientes, que demandam gratidão e amor. Proporcionamos a todos um ambiente seguro e confiável para atender às necessidades individuais daqueles que atravessam nosso caminho.
                  </p>
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify" }}>
                    Os esforços da Mediall Brasil e o reconhecimento como uma empresa séria e confiável fundamentam-se nos valores, ética e comprometimento com o bem mais valioso que possuímos: a <strong style={{ color: "#0a1e3d" }}>SAÚDE</strong>.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                    Com a expertise acumulada junto à nossa equipe impecável, a Mediall almeja criar algo duradouro e transformador para a realidade da prestação de serviços de saúde no Brasil.
                  </p>
                  <p style={{ color: "#777", lineHeight: 1.9, textAlign: "justify" }}>
                    A empresa está convicta de que é possível transformar qualquer hospital, seja ele público ou privado, em uma instituição de ponta, esteja onde estiver.
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
                O que nos guia
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fff" }}>
                Nossos Valores
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {values.map((val, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2" style={{ marginBottom: "30px", textAlign: "center" }}>
                <div
                  className="quem-somos-value-card"
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
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
      <section
        className="services services-2"
        style={{ padding: "80px 0", background: "#ffffff" }}
      >
        <div className="bg-section">
          <img src="/assets/images/background/pattern.png" alt="background" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center" style={{ marginBottom: "40px" }}>
              <p className="heading-subtitle" style={{ color: "#13c5dd", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                Soluções Inovadoras
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#0a1e3d" }}>
                Nossas Áreas de Atuação
              </h2>
              <p style={{ color: "#777", lineHeight: 1.8, marginTop: "15px" }}>
                Nos últimos anos, a Mediall apresentou soluções inovadoras aos seus clientes, sempre priorizando a excelência na gestão em saúde.
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
                  <div
                    className="service-panel-holder"
                    style={{ display: "flex", flexDirection: "column", flex: 1 }}
                  >
                    <div
                      className="service-content"
                      style={{ display: "flex", flexDirection: "column", flex: 1 }}
                    >
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

      {/* Gestão Plena Section */}
      <section style={{ padding: "80px 0", background: "#091a33", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6" style={{ marginBottom: "30px" }}>
              <div className="heading heading-16">
                <p className="heading-subtitle" style={{ color: "#13c5dd" }}>Gestão Plena</p>
                <h2 className="heading-title" style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#fff" }}>
                  Transformando a realidade da saúde no Brasil
                </h2>
              </div>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify", marginBottom: "15px" }}>
                Desde o início, a Mediall buscou fornecer soluções e serviços médicos, abrangendo a organização de plantões e a gestão de equipes com excelência. Conforme atuava nesse mercado e diante do aumento das demandas, os fundadores identificaram lacunas em atividades específicas.
              </p>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify", marginBottom: "15px" }}>
                Com perspicácia empreendedora, adaptaram-se gradualmente e criaram novos produtos de acordo com as necessidades dos clientes. Dessa forma, a Mediall manteve sua competitividade no cenário hospitalar, permanecendo fiel à essência de oferecer serviços de saúde com qualidade.
              </p>
              <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.8)", textAlign: "justify" }}>
                A partir dessa iniciativa, surgiu o conceito de gestão plena, levando a Mediall a um novo patamar de atuação. A governança corporativa foi implementada, resultando na criação do conselho diretor e na realização de novas contratações.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <img
                  className="img-fluid"
                  src="/assets/images/mediall/Imagens Books Mediall (8).jpg.jpeg"
                  alt="Gestão Plena Mediall"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Processes */}
      <section className="cta cta-3" id="quem-somos-mvv" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="heading heading-6">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <p className="heading-subtitle">Nosso Propósito</p>
                <h2 className="heading-title">
                  Missão, Visão e Valores
                </h2>
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
                    <h5>Missão</h5>
                    <p>
                      Prestar serviços nas diversas áreas da medicina visando atender às necessidades e valorizando os profissionais de saúde, pacientes e hospitais de todo o Brasil, com qualidade, competência e confiabilidade.
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
                    <h5>Visão</h5>
                    <p>
                      Ser a empresa líder em atendimento de saúde hospitalar no Brasil, reconhecidamente séria e confiável, destacando-se pela equipe capacitada e comprometida com a qualidade de atendimento.
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
                      Ética, transparência, credibilidade, competência, comprometimento, profissionalismo e atenção ao bem-estar de pacientes e colaboradores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
       

      {/* CTA Final */}
      <section
        style={{
          position: "relative",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="bg-section">
          <img
            src="/assets/images/mediall/mediall-brasil-acre-2-1.jpeg"
            alt="Venha ser Mediall"
          />
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
                Venha ser Mediall Brasil!
              </h2>
              <p
                style={{
                  color: "#777",
                  fontSize: "18px",
                  lineHeight: 1.8,
                  marginBottom: "35px",
                }}
              >
                Estamos convictos de que é possível transformar qualquer hospital em uma instituição de ponta. Junte-se a nós nessa missão.
              </p>
              <Link
                className="btn btn--primary btn-line btn-line-after"
                href="/contact"
                style={{ marginRight: "15px" , justifyContent: "flex", alignItems: "center", marginLeft:"350px" }}
              >
                <span>Entre em Contato</span>
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
