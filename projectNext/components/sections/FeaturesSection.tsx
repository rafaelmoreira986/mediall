"use client";
import Link from "next/link";

const featurePanels = [
  { icon: "flaticon-007-stethoscope", title: "Medical Advices & Check Ups", desc: "Consult our doctors any time." },
  { icon: "flaticon-026-education", title: "Trusted Medical Treatment", desc: "Free coverage adults with limited income." },
  { icon: "flaticon-036-aid", title: "Emergency Help Available", desc: "Contact our reception staff any time." },
  { icon: "flaticon-032-medicine", title: "Medical Research", desc: "Provide all medical aspects practice" },
  { icon: "flaticon-046-blood-pressure", title: "Only Qualified Doctors", desc: "Qualified doctors available 24/7" },
];

export default function FeaturesSection() {
  return (
    <section className="features features-2 bg-overlay bg-overlay-theme3 bg-parallax bg-section" id="features-2" style={{ backgroundImage: "url(/assets/images/background/1.jpg)" }}>
      <div className="container">
        <div className="heading heading-14 heading-light">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="heading-subtitle">Sets The Standard For High Quality Care Since</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">1987</h2>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <p className="paragraph">Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills. Our administration and support staff all have exceptional people skills.</p>
              <p className="heading-desc">Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</p>
              <div className="signature-block">
                <a className="btn btn--primary btn--inversed btn-line btn-line-after" href="#">
                  <span>our core values</span><span className="line"><span></span></span>
                </a>
                <div className="signature-body">
                  <h6>john winston</h6>
                  <p>pediatrician</p>
                  <img className="signature-img" src="/assets/images/signature/2.png" alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-holder">
          {featurePanels.map((panel, i) => (
            <div key={i}>
              <div className="feature-panel-holder" data-hover="">
                <div className="feature-panel feature-panel-dark">
                  <div className="feature-icon"><i className={panel.icon}></i></div>
                  <div className="feature-content">
                    <h4>{panel.title}</h4>
                    <p>{panel.desc}</p>
                  </div>
                  <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-features more-features-2">
          <p>Delivering tomorrow&apos;s health care for your family. <Link href="/doctors-timetable">view doctors&apos; timetable</Link></p>
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
