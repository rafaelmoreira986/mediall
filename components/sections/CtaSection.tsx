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
];

export default function CtaSection() {
  return (
    <section className="cta cta-3" id="cta-3">
      <div className="container">
        <div className="heading heading-6">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <p className="heading-subtitle">Nosso propósito vai além da gestão</p>
              <h2 className="heading-title">Valores</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="processes">
        <div className="row g-0">
          {processes.map((proc, i) => (
            <div key={i} className="col-12 col-md-6 col-xl-4">
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
