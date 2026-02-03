"use client";
import Link from "next/link";

const processes = [
  {
    number: "01.",
    icon: "flaticon-023-medical-history",
    title: "fill our medical application",
    desc: "Medisch offers free or low-cost health coverage for adults.",
    linkText: "doctors timetable",
    linkHref: "/doctors-timetable",
  },
  {
    number: "02.",
    icon: "flaticon-043-cardiogram",
    title: "Review Your Family History",
    desc: "Health exams help find problems with early chances which helps.",
    linkText: "Start A Check Up",
    linkHref: "#",
  },
  {
    number: "03.",
    icon: "flaticon-027-medical-report",
    title: "Choose Between Our Programs",
    desc: "We have protocols to protect our patients to provide necessary care.",
    linkText: "explore programs",
    linkHref: "#",
  },
  {
    number: "04.",
    icon: ".flaticon-021-medical-1",
    title: "Introduce To Qualified Doctors",
    desc: "Our administration and support staff all have exceptional people skills",
    linkText: "meet our doctors",
    linkHref: "/page-appointments",
  },
];

export default function CtaSection() {
  return (
    <section className="cta cta-3" id="cta-3">
      <div className="container">
        <div className="heading heading-6">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="heading-subtitle">Caring For The Health Of You And Your Family.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">We Provide All Aspects Of Medical Practice For Your Whole Family!</h2>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="prief-set">
                <p>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnal and processing software, combined with decades of experience! Through integrated supply chain solutions, Equita drives sustainable competitive advantages to some of Australia&apos;s largest companies.</p>
                <ul className="list-unstyled advantages-list">
                  <li><i className="fas fa-check"></i> Quality Control System</li>
                  <li><i className="fas fa-check"></i> Unrivalled workmanship</li>
                  <li><i className="fas fa-check"></i> 100% Satisfaction Guarantee</li>
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
                    <Link className="btn-line btn-line-before btn-line-inversed" href={proc.linkHref}>
                      <span className="line"><span></span></span>
                      <span>{proc.linkText}</span>
                    </Link>
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
