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
    <section className="features features-2 bg-parallax bg-section" id="features-2">
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.81)", zIndex: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1600px" }}>
        <div className="heading heading-14 heading-light">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <p className="heading-subtitle" style={{ textAlign: "center" }}>Moldando futuros saudáveis e sustentáveis</p>
              <h2 style={{ color: 'white', fontSize: '70px', fontWeight: 'bold', textAlign: 'center' }}>Nossos serviços</h2>
              <p className="paragraph text--just">Ao longo de nossa trajetória, ouvimos histórias repletas de superação e aprendemos que estender a mão faz toda a diferença na recuperação de quem precisa. Cada solução que desenvolvemos nasce dessa vivência, unindo conhecimento técnico à sensibilidade humana para transformar a realidade da saúde no Brasil.</p>
               <div className="signature-block" style={{ textAlign: "center" }}>
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
                    <p style={{ textAlign: "justify", textAlignLast: "center", wordBreak: "break-word", hyphens: "auto", fontSize: "13px" }}>{panel.desc}</p>
                  </div>
                  <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
         
         
      </div>
    </section>
  );
}


// Gestão Hospitalar plena - Gestão de Ambulatórios e Pronto-Socorro - Desenvolvimento de Novos Projetos em Saúde - Recursos Humanos na Saúde
// Desenvolvimento de Novos Projetos em Saúde Orientação especializada no planejamento e implementação de novos projetos voltados para o setor da saúde, abrangendo desde a concepção até a execução.

