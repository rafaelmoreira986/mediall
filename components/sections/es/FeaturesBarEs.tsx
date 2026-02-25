"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  id: string;
  prefix?: string;
  target: number;
  label: string;
  sublabel?: string;
  icon: string;
}

const STATS: Stat[] = [
  { id: "unidades",      prefix: "+", target: 52,    label: "Unidades",      sublabel: "de Salud desde 2017",   icon: "flaticon-022-medical" },
  { id: "estados",                    target: 13,    label: "Estados",       sublabel: "Brasileños + DF",       icon: "flaticon-042-clinic" },
  { id: "cirugias",                   target: 21300, label: "Cirugías",      sublabel: "Realizadas",            icon: "flaticon-016-medical-tools" },
  { id: "consultas",                  target: 80300, label: "Consultas",     sublabel: "Realizadas",            icon: "flaticon-027-medical-report" },
  { id: "camas",                      target: 1104,  label: "Camas",         sublabel: "Gestionadas",           icon: "flaticon-033-medical-bed" },
  { id: "profesionales",              target: 10400, label: "Profesionales", sublabel: "de la Salud",           icon: "flaticon-025-examination" },
];

function useCounter(target: number, active: boolean, duration = 3500): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      else setValue(target);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCounter(stat.target, active);
  const formatted = value.toLocaleString("es-ES");

  return (
    <div className="col-12 col-sm-6 col-lg-2" style={{ display: "flex" }}>
      <div className="feature-panel feature-timetable" style={{ width: "100%", textAlign: "center" }}>
        <div className="feature-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <i className={stat.icon} style={{ fontSize: "2rem" }}></i>
          <div style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1, color: "#fff" }}>
            {stat.prefix}{formatted}
          </div>
          <div style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", fontWeight: 700, lineHeight: 1.2, color: "#fff" }}>
            {stat.label}
            {stat.sublabel && <><br /><span style={{ fontWeight: 400, opacity: 0.85 }}>{stat.sublabel}</span></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesBarEs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !active) setActive(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section ref={sectionRef} className="features-bar bg-section" id="featuresBar-1" style={{ backgroundImage: "url(/assets/images/background/pattern-2.jpg)" }}>
      <div className="container">
        <div className="row g-0 features-holder" style={{ display: "flex", flexWrap: "wrap" }}>
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} active={active} />
          ))}
        </div>
        <div className="heading heading-15">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="heading-title" style={{ textAlign: "center" }}>Mediall Brasil donde la gestión y el cuidado van de la mano</h2>
              <h3 className="paragraph" style={{ textAlign: "center" }}>Desde 2017, Mediall Brasil ha liderado la transformación de la gestión
en salud en el país, con presencia consolidada en 13 estados y el Distrito
Federal, totalizando más de 52 unidades bajo su administración.</h3>
              <p className="heading-desc text--just">Mediall Brasil es una empresa especializada en gestión hospitalaria y
administración de unidades de salud públicas y privadas desde 2017.
Surgió con enfoque en la organización de equipos, optimización de procesos y
eficiencia asistencial. Con el tiempo, amplió su actuación hacia un modelo
de gestión integrada, incorporando gobernanza corporativa y soluciones
estratégicas orientadas a la calidad y sostenibilidad operacional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
