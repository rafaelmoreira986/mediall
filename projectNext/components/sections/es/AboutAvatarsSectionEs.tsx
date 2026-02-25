"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-wow]");

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

export default function AboutAvatarsSectionEs() {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <style>{`
        [data-wow].wow-animated {
          opacity: 1;
          animation-fill-mode: both;
          animation-duration: 0.9s;
          animation-timing-function: ease-out;
        }
        [data-wow="fadeInDown"] { transform: translateY(-60px); }
        [data-wow="fadeInDown"].wow-animated { animation-name: wowFadeInDown; }
        @keyframes wowFadeInDown {
          from { opacity: 0; transform: translateY(-60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-wow="fadeIn"].wow-animated { animation-name: wowFadeIn; }
        @keyframes wowFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        [data-wow="slideInDown"] { transform: translateY(-80px); }
        [data-wow="slideInDown"].wow-animated { animation-name: wowSlideInDown; }
        @keyframes wowSlideInDown {
          from { opacity: 0; transform: translateY(-80px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-wow="fadeInLeft"] { transform: translateX(-60px); }
        [data-wow="fadeInLeft"].wow-animated { animation-name: wowFadeInLeft; }
        @keyframes wowFadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        [data-wow="slideInUp"] { transform: translateY(80px); }
        [data-wow="slideInUp"].wow-animated { animation-name: wowSlideInUp; }
        @keyframes wowSlideInUp {
          from { opacity: 0; transform: translateY(80px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-wow="slideInRight"] { transform: translateX(80px); }
        [data-wow="slideInRight"].wow-animated { animation-name: wowSlideInRight; }
        @keyframes wowSlideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to   { opacity: 1; transform: translateX(0); }
        }
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

      <section className="about about-4" id="about-4" ref={sectionRef as unknown as React.RefObject<HTMLDivElement>}>
        <div className="container">

          <div className="heading heading-18">
            <div className="row">
              <div className="col-12 col-lg-5">
                <p className="heading-subtitle">
                  ¡Salud de calidad para quienes más importa!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="heading-title">
                  Cuidando la salud y el bienestar de ti y de quienes amas.
                </h2>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <p className="paragraph">
                  Ofrecemos una gestión completa de salud para toda la comunidad, desde consultas de rutina hasta apoyo en situaciones de urgencia y emergencia.
                </p>
                <p className="heading-desc">
                  Trabajamos lado a lado con los equipos de salud para desarrollar planes de atención personalizados, incluyendo el seguimiento de enfermedades crónicas. Cuando es necesario, realizamos derivaciones y orientamos sobre el profesional más adecuado para cada caso. Todas las necesidades son atendidas con respeto, confidencialidad y compromiso.
                </p>
                <div className="signature-block">
                  <div className="signature-body">
                    <h6>Mediall Brasil</h6>
                    <p>Gestión en Salud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="avatars-holder">

            <div className="block-top">
              <div className="row">

                <div className="col-12 col-lg-2" data-wow="fadeInDown" data-wow-delay="0s">
                  <div className="avatar avatar-1" style={{ overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/medical-nurses-working-together-hospital.jpg"
                      alt="Profesional de salud"
                      style={{ transform: "scale(1.4)", transformOrigin: "center center", objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-5" data-wow="fadeIn" data-wow-delay="0.15s">
                  <div
                    className="avatar avatar-2 bg-section"
                    style={{ backgroundImage: "url('/assets/images/mediall/meeting.jpg')", position: "relative", overflow: "hidden" }}
                  >
                    <div style={{ position: "absolute", inset: 0, backgroundColor: "#1a2e44", opacity: 0.88 }} />
                    <div className="avatar-content" style={{ position: "relative", zIndex: 1 }}>
                      <p>
                        Los hospitales que funcionan con excelencia salvan más vidas. Transformamos la gestión hospitalaria para que cada decisión, proceso y recurso esté al servicio de lo que más importa: el cuidado humano.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-2" data-wow="slideInDown" data-wow-delay="0.3s">
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

            <div className="block-bottom">
              <div className="row">

                <div className="col-12 offset-lg-1 col-lg-3" data-wow="fadeInLeft" data-wow-delay="0s">
                  <div className="avatar avatar-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/small-girl-with-mother-reception-desk-hospital-coronavirus-pandemic.jpg"
                      alt="Unidad hospitalaria"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-5" data-wow="slideInUp" data-wow-delay="0.15s">
                  <div className="avatar avatar-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/nurse-listens-doctor-students-hospital-gowns-men-woman-standing-hospital-ward.jpg"
                      alt="Enfermera Mediall"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-3" data-wow="slideInRight" data-wow-delay="0.3s">
                  <div className="avatar avatar-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/mediall/happy-mature.jpg"
                      alt="Urgencias"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
