"use client";

const processes = [
  {
    number: "01.",
    icon: "flaticon-009-pulse",
    title: "Misión",
    desc: "Prestar servicios en las diversas áreas de la medicina, buscando atender las necesidades y valorando a los profesionales de salud, pacientes y hospitales de todo Brasil, con calidad, competencia y confiabilidad.",
  },
  {
    number: "02.",
    icon: "flaticon-010-ophtalmology",
    title: "Visión",
    desc: "Ser la empresa líder en atención de salud hospitalaria en Brasil, reconocidamente seria y confiable, destacándose por su equipo capacitado y comprometido con la calidad de atención, valorando y solucionando las necesidades de los pacientes.",
  },
  {
    number: "03.",
    icon: "flaticon-044-caduceus",
    title: "Valores",
    desc: "Ética, transparencia, credibilidad, competencia, compromiso, profesionalismo y atención al bienestar de pacientes y colaboradores.",
  },
];

export default function CtaSectionEs() {
  return (
    <section className="cta cta-3" id="cta-3">
      <div className="container">
        <div className="heading heading-6">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <p className="heading-subtitle">Nuestro propósito va más allá de la gestión</p>
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
