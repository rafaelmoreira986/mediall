"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-wow]");

    // Set initial hidden state via JS so elements are never stuck invisible
    elements.forEach((el) => {
      el.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.wowDelay ?? "0s";
            el.style.animationDelay = delay;
            el.style.opacity = "";
            el.classList.add("wow-animated");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function AboutAvatarsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <style>{`
        /* ---- Scroll-reveal animations (WOW.js replacement) ---- */
        [data-wow].wow-animated {
          opacity: 1;
          animation-fill-mode: both;
          animation-duration: 0.9s;
          animation-timing-function: ease-out;
        }

        /* fadeInDown */
        [data-wow="fadeInDown"] { transform: translateY(-60px); }
        [data-wow="fadeInDown"].wow-animated {
          animation-name: wowFadeInDown;
        }
        @keyframes wowFadeInDown {
          from { opacity: 0; transform: translateY(-60px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* fadeIn */
        [data-wow="fadeIn"].wow-animated {
          animation-name: wowFadeIn;
        }
        @keyframes wowFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* slideInDown */
        [data-wow="slideInDown"] { transform: translateY(-80px); }
        [data-wow="slideInDown"].wow-animated {
          animation-name: wowSlideInDown;
        }
        @keyframes wowSlideInDown {
          from { opacity: 0; transform: translateY(-80px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* fadeInLeft */
        [data-wow="fadeInLeft"] { transform: translateX(-60px); }
        [data-wow="fadeInLeft"].wow-animated {
          animation-name: wowFadeInLeft;
        }
        @keyframes wowFadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* slideInUp */
        [data-wow="slideInUp"] { transform: translateY(80px); }
        [data-wow="slideInUp"].wow-animated {
          animation-name: wowSlideInUp;
        }
        @keyframes wowSlideInUp {
          from { opacity: 0; transform: translateY(80px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* slideInRight */
        [data-wow="slideInRight"] { transform: translateX(80px); }
        [data-wow="slideInRight"].wow-animated {
          animation-name: wowSlideInRight;
        }
        @keyframes wowSlideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ---- Image hover effect (same as teamgrid1) ---- */
        .about-4 .avatar:not(.avatar-2) {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        .about-4 .avatar:not(.avatar-2)::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.5);
          content: '';
          z-index: 1;
          transition: transform 0.6s;
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -100%, 0);
          pointer-events: none;
        }
        .about-4 .avatar:not(.avatar-2):hover::before {
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 100%, 0);
        }
        .about-4 .avatar:not(.avatar-2) img {
          transition: transform 0.35s;
          transform: scale3d(1.05, 1.05, 1);
          max-width: 100%;
          height: auto;
          display: block;
        }
        .about-4 .avatar:not(.avatar-2):hover img {
          transform: scale3d(1, 1, 1);
        }
      `}</style>

      <section className="about about-4" id="about-4" ref={sectionRef as unknown as React.RefObject<HTMLDivElement>} style={{ backgroundColor: "#263967" }}>
        <div className="container">

          {/* ---- Heading ---- */}
          <div className="heading heading-18">
            <div className="row">
              <div className="col-12 col-lg-5">
                <p className="heading-subtitle" style={{ color: "#7ecbe6" }}>
                  Saúde de qualidade para quem mais importa!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="heading-title" style={{ color: "#ffffff" }}>
                  Cuidando da saúde e do bem-estar de você e de quem você ama.
                </h2>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <p className="paragraph" style={{ color: "#c8d8f0" }}>
                  Oferecemos uma gestão completa de saúde para toda a comunidade, desde consultas de rotina até suporte em situações de urgência e emergência.
                </p>
                <p className="heading-desc" style={{ color: "#a8bcd8" }}>
                  Trabalhamos lado a lado com as equipes de saúde para desenvolver planos de atendimento personalizados, incluindo o acompanhamento de doenças crônicas. Quando necessário, realizamos encaminhamentos e orientamos sobre o profissional mais adequado para cada caso. Todas as demandas são tratadas com respeito, sigilo e comprometimento.
                </p>
                <div className="signature-block">
                  <div className="signature-body">
                    <h6 style={{ color: "#ffffff" }}>Mediall Brasil</h6>
                    <p style={{ color: "#7ecbe6" }}>Gestão em Saúde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Avatars ---- */}
          <div className="avatars-holder">

            {/* Block Top */}
            <div className="block-top">
              <div className="row">

                {/* Avatar 1 — fadeInDown */}
                <div
                  className="col-12 col-lg-2"
                  data-wow="fadeInDown"
                  data-wow-delay="0s"
                >
                  <div className="avatar avatar-1" style={{ overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/medical-nurses-working-together-hospital.jpg"
                      alt="Profissional de saúde"
                      style={{ transform: "scale(1.4)", transformOrigin: "center center", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Avatar 2 — fadeIn (overlay card) */}
                <div
                  className="col-12 col-lg-5"
                  data-wow="fadeIn"
                  data-wow-delay="0.15s"
                >
                  <div
                    className="avatar avatar-2 bg-section"
                    style={{ backgroundImage: "url('/assets/images/mediall/doctor-with.jpg')", position: "relative", overflow: "hidden" }}
                  >
                    <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.61)" }} />
                    <div className="avatar-content" style={{ position: "relative", zIndex: 1 }}>
                      <p style={{ color: "#ffffff" }}>
                        Hospitais que funcionam com excelência salvam mais vidas. Transformamos a gestão hospitalar para que cada decisão, processo e recurso esteja a serviço do que mais importa: o cuidado humano.
                      </p>

                    </div>
                  </div>
                </div>

                {/* Avatar 3 — slideInDown */}
                <div
                  className="col-12 col-lg-2"
                  data-wow="slideInDown"
                  data-wow-delay="0.3s"
                >
                  <div className="avatar avatar-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/healthcare.jpg"
                      alt="Consulta médica"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-3"></div>
              </div>
            </div>

            {/* Block Bottom */}
            <div className="block-bottom">
              <div className="row">

                {/* Avatar 5 — fadeInLeft */}
                <div
                  className="col-12 offset-lg-1 col-lg-3"
                  data-wow="fadeInLeft"
                  data-wow-delay="0s"
                >
                  <div className="avatar avatar-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/small-girl-with-mother-reception-desk-hospital-coronavirus-pandemic.jpg"
                      alt="Unidade hospitalar"
                    />
                  </div>
                </div>

                {/* Avatar 6 — slideInUp */}
                <div
                  className="col-12 col-lg-5"
                  data-wow="slideInUp"
                  data-wow-delay="0.15s"
                >
                  <div className="avatar avatar-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/nurse-listens-doctor-students-hospital-gowns-men-woman-standing-hospital-ward.jpg"
                      alt="Enfermeira Mediall"
                    />
                  </div>
                </div>

                {/* Avatar 4 — slideInRight */}
                <div
                  className="col-12 col-lg-3"
                  data-wow="slideInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="avatar avatar-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/happy-mature.jpg"
                      alt="Pronto-socorro"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
          {/* End .avatars-holder */}

        </div>
        {/* End .container */}
      </section>
    </>
  );
}
