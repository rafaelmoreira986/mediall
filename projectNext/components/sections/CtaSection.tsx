"use client";

const processes = [
  {
    number: "01.",
    icon: "flaticon-009-pulse",
    title: "Missão",
    desc: "Prestar serviços nas diversas áreas da medicina visando atender às necessidades e valorizando os profissionais de saúde, pacientes e hospitais de todo o Brasil, com qualidade, competência e confiabilidade.",
  },
  {
    number: "02.",
    icon: "flaticon-010-ophtalmology",
    title: "Visão",
    desc: "Ser a empresa líder em atendimento de saúde hospitalar no Brasil, reconhecidamente séria e confiável, destacando-se pela equipe capacitada e comprometida com a qualidade de atendimento, valorizando e solucionando as necessidades dos pacientes.",
  },
  {
    number: "03.",
    icon: "flaticon-044-caduceus",
    title: "Valores",
    desc: "Ética, transparência, credibilidade, competência, comprometimento, profissionalismo e atenção ao bem-estar de pacientes e colaboradores.",
  },
  {
    number: "04.",
    icon: ".flaticon-021-medical-1",
    title: "Mediall Brasil",
    desc: "Na busca constante pela excelência, nossa empresa de gestão em saúde fundamenta-se na integridade, garantindo uma administração ética e transparente.",
  },
];

export default function CtaSection() {
  return (
    <section className="cta cta-3" id="cta-3">
      <div className="container">
        <div className="heading heading-6">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="heading-subtitle">moldando futuros saudáveis e sustentáveis.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">Desde 2018 em Gestão de Negócios em Saúde</h2>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="prief-set">
                <p>Alcançamos excelência em gestão em saúde, moldando futuros saudáveis e sustentáveis, através da análise criteriosa de índices, orientando nossas práticas para garantir resultados superiores em bem-estar e eficiência.</p>
                <ul className="list-unstyled advantages-list">
                  <li><i className="fas fa-check"></i> Ética</li>
                  <li><i className="fas fa-check"></i> Transparência</li>
                  <li><i className="fas fa-check"></i> Integridade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="processes">
        <div className="row g-0">
          {processes.map((proc, i) => (
            <div key={i} className="col-12 col-md-6 col-xl-3">
              <div className="process-panel" data-hover="">
                <p className="process-number">{proc.number}</p>
                <div className="process-body">
                  <div className="process-icon"><i className={proc.icon}></i></div>
                  <div className="process-content">
                    <h5>{proc.title}</h5>
                    <p>{proc.desc}</p>
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
