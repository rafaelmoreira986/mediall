"use client";
import { useState } from "react";
import Link from "next/link";

const pointers = [
  { spotX: "15%", spotY: "29%", infoX: "18px", infoY: "-97px", side: "right" },
  { spotX: "48%", spotY: "48%", infoX: "-160px", infoY: "-97px", side: "left" },
  { spotX: "68%", spotY: "23%", infoX: "-160px", infoY: "-97px", side: "left" },
];

export default function DonationsSection() {
  const [formData, setFormData] = useState({
    department: "default",
    doctor: "default",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section className="donations donations-3 bg-overlay bg-parallax bg-overlay-theme bg-section" id="donations-3" style={{ backgroundImage: "url(/assets/images/background/3.jpg)" }}>
      <div className="container">
        <div className="contact-panel contact-panel-3">
          <div className="heading heading-light heading-11">
            <h2 className="heading-title">Helping Patients From Around the Globe!!</h2>
            <p className="heading-desc">Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today</p>
            <div className="donations-action">
              <Link className="btn btn--white" href="/contact">make a gift <i className="fas fa-heart"></i></Link>
              <Link className="btn btn--transparent btn--inversed" href="/page-faqs">help &amp; faqs</Link>
            </div>
            <div className="img-hotspot">
              <div className="img-hotspot-wrap">
                <div className="img-hotspot-bg">
                  <img src="/assets/images/background/world-map.png" alt="image" />
                </div>
                <div className="img-hotspot-pointers">
                  {pointers.map((p, i) => (
                    <div
                      key={i}
                      className="img-hotspot-pointer"
                      style={{ left: p.spotX, top: p.spotY, position: "absolute" }}
                    >
                      <img src="/assets/images/background/map-pointer.png" alt="pointer" />
                      <div
                        className={`info ${p.side}`}
                        style={{ left: p.infoX, top: p.infoY }}
                      >
                        <span>2307 Beverley Rd Brooklyn, New York 11226 U.S.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-body">
              <h5 className="card-heading">book an appointment</h5>
              <p className="card-desc">Please feel welcome to contact our staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.</p>
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="select-holder">
                      <select
                        className="form-control"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      >
                        <option value="default">bathology clinic</option>
                        <option value="AL">neurology clinic</option>
                        <option value="AK">cardiology clinic</option>
                      </select>
                      <div className="badge">department</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="select-holder">
                      <select
                        className="form-control"
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      >
                        <option value="default">michael brian</option>
                        <option value="AL">maria andoloro</option>
                        <option value="AK">richard muldoone</option>
                      </select>
                      <div className="badge">choose doctor</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="date-select">
                      <input
                        className="form-control"
                        type="date"
                        placeholder="select date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                      <i className="fas fa-calendar-day"></i>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="time-select">
                      <input
                        className="form-control"
                        type="time"
                        placeholder="select time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                      <i className="fas fa-clock"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn--secondary btn-line btn-line-before btn--block" type="submit">
                      <span className="line"><span></span></span>
                      <span>make appointment</span>
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="contact-result"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
