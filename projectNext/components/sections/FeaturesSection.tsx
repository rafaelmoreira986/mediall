"use client";
import Link from "next/link";

const featurePanels = [
  { icon: "flaticon-030-hospital", title: "Gestão Hospitalar plena", desc: `Administração abrangente de hospitais, envolvendo todos os elementos do processo,
          desde a gestão financeira até a qualidade do atendimento.` },
  { icon: "flaticon-036-aid", title: "Desenvolvimento de Novos Projetos em Saúde", desc: "Orientação especializada no planejamento e implementação de novos projetos voltados para o setor da saúde." },
  { icon: "flaticon-029-cardiogram-1", title: "Gestão de Ambulatórios e Pronto-Socorro", desc: "Coordenação eficiente e operacional de ambulatórios e pronto-socorro, garantindo eficácia nos serviços e resposta ágil." },
  { icon: "flaticon-026-education", title: "Recursos Humanos na Saúde", desc: "Administração estratégica dos recursos humanos, com foco na contratação, treinamento e gestão de profissionais médicos e multidisciplinares." },
  { icon: "flaticon-050-ambulance", title: "Ambulâncias e UTI Móvel", desc: "Disponibilização de ambulâncias e unidades de terapia intensiva móveis para atender necessidades específicas de transporte e atendimento emergencial. " },
];

export default function FeaturesSection() {
  return (
    <section className="features features-2 bg-parallax bg-section" id="features-2" style={{ backgroundImage: "url(/assets/images/mediall/banner.jpg)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="heading heading-14 heading-light">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="heading-subtitle">Mais de 9 anos em Gestão de Negócios em Saúde</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 style={{ color: 'white', fontSize: '70px', fontWeight: 'bold' }}>Nossos serviços</h2>

            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <p className="paragraph">A Mediall Brasil é reconhecida como líder e referência em gestão de saúde. Fundada por médicos e especializada no atendimento a unidades de saúde, a empresa concentra-se na gestão multiassistencial e valoriza a interdisciplinaridade.</p>
              <p className="heading-desc">Comprometemo-nos com padrões excepcionais, garantindo que cada intervenção e serviço contribua para o bem-estar dos pacientes.</p>
              <div className="signature-block">
                <a className="btn btn--primary btn--inversed btn-line btn-line-after" href="#">
                  <span>Todos serviços</span><span className="line"><span></span></span>
                </a>
                 
              </div>
            </div>
          </div>
        </div>
        <div className="features-holder" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "25px", alignItems: "start" }}>
          {featurePanels.map((panel, i) => (
            <div key={i} style={{ width: "100%" }}>
              <div className="feature-panel-holder" data-hover="">
                <div className="feature-panel feature-panel-dark" style={{ textAlign: "center" }}>
                  <div className="feature-icon"><i className={panel.icon}></i></div>
                  <div className="feature-content" style={{ textAlign: "center", alignItems: "center" }}>
                    <h4 style={{ textAlign: "center" }}>{panel.title}</h4>
                    <p style={{ textAlign: "center" }}>{panel.desc}</p>
                  </div>
                  <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-features more-features-2">
        </div>
        <div className="features-card">
          <div className="card-panel reversed">
            <div className="panel-icon"><i className="flaticon-004-transplant-box"></i></div>
            <div className="panel-body">
              <h4>Healthcare Programs</h4>
              <p>We have put protocols to protect our patients to provide medically necessary care.</p>
              <a className="btn btn-line btn-line-after" href="#">
                <span>explore programs</span><span className="line"><span></span></span>
              </a>
            </div>
          </div>
          <div className="card-panel">
            <div className="panel-icon"><i className="flaticon-042-clinic"></i></div>
            <div className="panel-body">
              <h4>Localização &amp; Directions</h4>
              <p>Feel welcome to contact our friendly reception staff, our doctors will receive your urgent calls.</p>
              <a className="btn btn-line btn-line-before" href="#">
                <span className="line"><span></span></span><span>get directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Gestão Hospitalar plena - Gestão de Ambulatórios e Pronto-Socorro - Desenvolvimento de Novos Projetos em Saúde - Recursos Humanos na Saúde
// Desenvolvimento de Novos Projetos em Saúde Orientação especializada no planejamento e implementação de novos projetos voltados para o setor da saúde, abrangendo desde a concepção até a execução.

