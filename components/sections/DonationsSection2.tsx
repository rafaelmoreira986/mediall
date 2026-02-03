"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    id: "collapse01-1",
    question: "Which Plan Is Right For Me?",
    answer:
      "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.",
  },
  {
    id: "collapse01-2",
    question: "Do I have to commit to a contract?",
    answer:
      "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.",
  },
  {
    id: "collapse01-3",
    question: "What Payment Methods Are Available?",
    answer:
      "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.",
  },
];

const hotspots = [
  { x: "15%", y: "29%", position: "right", infoX: "18px", infoY: "-97px" },
  { x: "48%", y: "48%", position: "left", infoX: "-160px", infoY: "-97px" },
  { x: "68%", y: "23%", position: "left", infoX: "-160px", infoY: "-97px" },
];

export default function DonationsSection2() {
  const [openFaq, setOpenFaq] = useState<string | null>("collapse01-3");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="donations donations-2" id="donations-2">
      <div className="container">
        <div className="heading heading-4">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">
                Helping Patients From Around the Globe!!
              </h2>
              <div className="img-hotspot">
                <div className="img-hotspot-wrap">
                  <div className="img-hotspot-bg">
                    <img
                      src="/assets/images/background/world-map.png"
                      alt="image"
                    />
                  </div>
                  <div className="img-hotspot-pointers">
                    {hotspots.map((hotspot, index) => (
                      <div
                        key={index}
                        className="img-hotspot-pointer"
                        style={{ left: hotspot.x, top: hotspot.y }}
                      >
                        <img
                          src="/assets/images/background/map-pointer.png"
                          alt="pointer"
                        />
                        <div
                          className={`info ${hotspot.position}`}
                          style={{ left: hotspot.infoX, top: hotspot.infoY }}
                        >
                          <span>
                            2307 Beverley Rd Brooklyn, New York 11226 U.S.
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <p className="paragraph">
                Our staff strives to make each interaction with patients clear,
                concise, and inviting. Support them important work of Medicsh
                Hospital by making a much-needed donation today.
              </p>
              <p className="heading-desc">
                We will work with you to develop individualised care plans,
                including management of chronic diseases. If we cannot assist,
                we can provide referrals or advice about the type of
                practitioner you require. We treat all enquiries sensitively and
                in the strictest confidence.
              </p>
              <div className="accordion" id="accordion03">
                {faqs.map((faq) => (
                  <div key={faq.id} className="card">
                    <div className="card-heading">
                      <a
                        className={`card-link ${
                          openFaq === faq.id ? "" : "collapsed"
                        }`}
                        data-hover=""
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFaq(faq.id);
                        }}
                      >
                        {faq.question}
                      </a>
                    </div>
                    <div
                      className={`collapse ${openFaq === faq.id ? "show" : ""}`}
                      id={faq.id}
                    >
                      <div className="card-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link className="btn btn--primary" href="/contact">
                make a gift <i className="fas fa-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
