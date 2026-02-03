"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "sami wade",
    company: "promina",
    image: "/assets/images/testimonial/1.jpg",
    content:
      "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!",
  },
  {
    name: "john peter",
    company: "optima inc",
    image: "/assets/images/testimonial/2.jpg",
    content:
      "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!",
  },
  {
    name: "sony blake",
    company: "koira ind",
    image: "/assets/images/testimonial/3.jpg",
    content:
      "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!",
  },
];

const clients = [
  "/assets/images/clients/1.png",
  "/assets/images/clients/2.png",
  "/assets/images/clients/3.png",
];

export default function TestimonialSection3() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="testimonial testimonial-3 bg-overlay bg-overlay-theme2"
      id="testimonial-3"
    >
      <div className="bg-section">
        <img src="/assets/images/background/2.jpg" alt="background-img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="heading heading-light heading-10">
              <p className="heading-subtitle">the best medical care</p>
              <h2 className="heading-title">
                patient&apos;s inspiring stories of hope !
              </h2>
            </div>
            <div className="testimonial-thumbs">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-thumb ${
                    activeIndex === index ? "active" : ""
                  }`}
                  data-hover=""
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="thumb-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <i className="icon-Quote-Icon"></i>
                  </div>
                  <div className="thumb-body">
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-7 offset-lg-1">
            <div className="testimonials-holder">
              <div className="testimonial-panel">
                <div className="testimonial-body">
                  <div className="testimonial-content">
                    <div className="testimonial-icon"></div>
                    <p>{testimonials[activeIndex].content}</p>
                    <div className="testimonial-rating">
                      <span className="num">4.9</span>
                      <div className="rating-body">
                        <p>
                          <a href="#" data-hover="">
                            <span>zodoc</span> Overall Rating ,
                          </a>{" "}
                          based
                          <br /> on 7541 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-navs">
                <a
                  className="prev"
                  href="#"
                  data-hover=""
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    );
                  }}
                >
                  <span className="line">
                    <span></span>
                  </span>
                  <span>previous</span>
                </a>
                <a
                  className="next"
                  href="#"
                  data-hover=""
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    );
                  }}
                >
                  <span>next</span>
                  <span className="line">
                    <span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="contact-panel contact-panel-2">
              <div className="img-card bg-overlay">
                <div className="bg-section">
                  <img src="/assets/images/contact/1.jpg" alt="image" />
                </div>
                <div className="card-content">
                  <h3>we accept all major insurance plans</h3>
                  <p>
                    We accept a number of insurance plans to help you cover
                    costs depending on your individual needs.
                  </p>
                  <div className="clients-row">
                    {clients.map((client, index) => (
                      <div key={index} className="client">
                        <img src={client} alt="Client" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-body">
                  <h5 className="card-heading">book an appointment</h5>
                  <p className="card-desc">
                    Please feel welcome to contact our staff with any general or
                    medical enquiry. Our doctors will receive or return any
                    urgent calls.
                  </p>
                  <form className="contactForm">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="select-holder">
                          <select className="form-control">
                            <option value="default">bathology clinic</option>
                            <option value="AL">neurology clinic</option>
                            <option value="AK">cardiology clinic</option>
                          </select>
                          <div className="badge">department</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="select-holder">
                          <select className="form-control">
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
                          name="contact-name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          name="contact-email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <input
                          className="form-control"
                          type="text"
                          name="contact-phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="date-select">
                          <input
                            className="form-control"
                            type="date"
                            name="contact-date"
                            placeholder="select date"
                            required
                          />
                          <i className="fas fa-calendar-day"></i>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="time-select">
                          <input
                            className="form-control"
                            type="time"
                            name="contact-time"
                            placeholder="select time"
                            required
                          />
                          <i className="fas fa-clock"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn--secondary btn-line btn-line-before btn--block"
                        >
                          <span className="line">
                            <span></span>
                          </span>
                          <span>make appointment</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
