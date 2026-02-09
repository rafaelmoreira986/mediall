"use client";
import Link from "next/link";

const departments = [
  {
    img: "/assets/images/departments/1.jpg",
    title: "Neurology Clinic",
    desc: "Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.",
    items: ["neurocritical care", "neuro oncolgy", "geriatric neurology"],
  },
  {
    img: "/assets/images/departments/2.jpg",
    title: "Cardiology Clinic",
    desc: "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...",
    items: ["neurocritical care", "neuro oncolgy", "geriatric neurology"],
  },
  {
    img: "/assets/images/departments/3.jpg",
    title: "Pathology Clinic",
    desc: "Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...",
    items: ["neurocritical care", "neuro oncolgy", "geriatric neurology"],
  },
];

export default function DepartmentsSection() {
  return (
    <section className="departments departments-2" id="departments-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-12 heading-13 text-center">
              <p className="heading-subtitle">Nossos Pilares Fundamentais da Gestão em Saúde!</p>
              <h2 className="heading-title">providing medical care for stickest in our community.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {departments.map((dept, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/page-departments"></Link>
                    <img src={dept.img} alt="department img" />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4><Link href="/page-departments">{dept.title}</Link></h4>
                    </div>
                    <div className="department-desc text--just">
                      <p>{dept.desc}</p>
                    </div>
                    <ul className="department-list list-unstyled">
                      {dept.items.map((item, j) => (
                        <li key={j}><i className="fas fa-check"></i> <span>{item}</span></li>
                      ))}
                    </ul>
                    <div className="department-more">
                      <Link className="btn btn--white btn-line btn-line-before btn-line-inversed" href="/page-departments">
                        <span className="line"><span></span></span><span>read more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="departments-action">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8" style={{ textAlign: "center" }}>
              <p className="text--just">Today hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all.</p>
              <div className="doctor-action" style={{ justifyContent: "center" }}>
                <Link className="btn btn--secondary btn-line btn-line-after" href="/page-appointments">
                  <span>make appointment</span><span className="line"><span></span></span>
                </Link>
                <div className="doctor-info">
                  <div className="doctor-img">
                    <img src="/assets/images/testimonial/5.jpg" alt="image" />
                  </div>
                  <div className="doctor-body">
                    <a href="tel:0106123214">01061245741</a>
                    <p>Call 24HR / 7Days</p>
                  </div>
                  <i className="fas fa-phone-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
