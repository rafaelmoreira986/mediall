"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Stat {
  id: string;
  target: number;
  prefix?: string;
  label: string;
  sublabel?: string;
  top: string;
  left: string;
  numberSize: string;
  labelSize: string;
  color?: string;
}

// ─────────────────────────────────────────────────────────────
//  POSITION GUIDE — adjust top/left (%) to move each counter
//  on top of the image. top=0% is top edge, left=0% is left edge.
//  NUMBER SIZES — numberSize / labelSize control the text size.
// ─────────────────────────────────────────────────────────────
const STATS: Stat[] = [
  {
    // "+52" — top-center, just right of the map divider
    id: "unidades",
    prefix: "+",
    target: 52,
    label: "Unidades",
    sublabel: "de Saúde desde 2017",
    top:  "4%",   // ← move up/down
    left: "31%",  // ← move left/right
    numberSize: "clamp(1.5rem, 2.7vw, 2.3rem)",
    labelSize:  "clamp(0.65rem, 1.0vw, 0.85rem)",
    color: "#1a3a5c",
  },
  {
    // "13 Estados" — bottom-left, overlaid on the map
    id: "estados",
    target: 13,
    label: "Estados",
    sublabel: "Brasileiros + DF",
    top:  "60%",  // ← move up/down
    left: "3%",   // ← move left/right
    numberSize: "clamp(2.1rem, 4vw, 3.3rem)",
    labelSize:  "clamp(0.65rem, 1.0vw, 0.85rem)",
    color: "#1a3a5c",
  },
  {
    // "21.300" — to the right of the surgeon icon (top-right)
    id: "cirurgias",
    target: 21300,
    label: "Cirurgias",
    sublabel: "Realizadas",
    top:  "17%",  // ← move up/down
    left: "61%",  // ← move left/right
    numberSize: "clamp(1.35rem, 2.1vw, 1.8rem)",
    labelSize:  "clamp(0.6rem, 0.85vw, 0.75rem)",
    color: "#1a3a5c",
  },
  {
    // "80.300" — to the right of the consultation icon (mid-right)
    id: "consultas",
    target: 80300,
    label: "Consultas",
    sublabel: "Realizadas",
    top:  "33%",  // ← move up/down
    left: "61%",  // ← move left/right
    numberSize: "clamp(1.35rem, 2.1vw, 1.8rem)",
    labelSize:  "clamp(0.6rem, 0.85vw, 0.75rem)",
    color: "#1a3a5c",
  },
  {
    // "1.104" — to the right of the bed icon (lower-mid-right)
    id: "leitos",
    target: 1104,
    label: "Leitos",
    sublabel: "Geridos",
    top:  "52%",  // ← move up/down
    left: "65%",  // ← move left/right
    numberSize: "clamp(1.35rem, 2.1vw, 1.8rem)",
    labelSize:  "clamp(0.6rem, 0.85vw, 0.75rem)",
    color: "#1a3a5c",
  },
  {
    // "10.400" — to the right of the professional icon (bottom-right)
    id: "profissionais",
    target: 10400,
    label: "Profissionais",
    sublabel: "da Saúde",
    top:  "70%",  // ← move up/down
    left: "60%",  // ← move left/right
    numberSize: "clamp(1.35rem, 2.1vw, 1.8rem)",
    labelSize:  "clamp(0.6rem, 0.85vw, 0.75rem)",
    color: "#1a3a5c",
  },
];

const BULLETS = [
  "Melhoria contínua dos processos",
  "Eficiência no uso de recursos",
  "Gestão assistencial baseada em indicadores",
  "Sustentabilidade operacional e administrativa",
  "Humanização do atendimento",
];

function useCounter(target: number, active: boolean, duration = 4000): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return value;
}

function StatCounter({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCounter(stat.target, active);
  const formatted = value.toLocaleString("pt-BR");

  return (
    <div
      className="mediall-stat-counter"
      style={{
        position: "absolute",
        top: stat.top,
        left: stat.left,
        textAlign: "left",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          fontSize: stat.numberSize,
          fontWeight: 700,
          color: stat.color ?? "#1a3a5c",
          lineHeight: 1,
        }}
      >
        {stat.prefix}
        {formatted}
      </div>
      <div
        style={{
          fontSize: stat.labelSize,
          color: stat.color ?? "#1a3a5c",
          fontWeight: 500,
          lineHeight: 1.3,
          marginTop: "2px",
        }}
      >
        {stat.label}
        {stat.sublabel && (
          <>
            <br />
            {stat.sublabel}
          </>
        )}
      </div>
    </div>
  );
}

export default function MediallStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active) setActive(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  return (
    <>
      <style>{`
        .mediall-stats-section {
          display: flex;
          align-items: center;
          gap: 48px;
          padding: 60px 48px;
          max-width: 1400px;
          margin: 0 auto;
          zoom: 1.25;
        }

        .mediall-stats-left {
          flex: 0 0 38%;
          max-width: 38%;
        }

        .mediall-stats-right {
          flex: 1;
          position: relative;
        }

        .mediall-stats-left p {
          color: #2c4a6e;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.75;
          margin-bottom: 24px;
          text-align: justify;
        }

        .mediall-stats-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mediall-stats-bullets li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #2c4a6e;
          font-size: clamp(0.85rem, 1.2vw, 1rem);
          font-weight: 500;
        }

        .mediall-stats-bullets li::before {
          content: "";
          display: inline-block;
          width: 14px;
          height: 14px;
          min-width: 14px;
          background-color: #263967;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .mediall-stats-section {
            flex-direction: column;
            padding: 40px 20px;
            gap: 32px;
          }
          .mediall-stats-left {
            flex: unset;
            max-width: 100%;
            width: 100%;
          }
          .mediall-stat-counter {
            display: none;
          }
          .mediall-stats-right {
            display: none;
          }
        }
      `}</style>

      <section ref={sectionRef} style={{ width: "100%", paddingBottom: "4rem", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="mediall-stats-section">

          {/* LEFT — text block */}
          <div className="mediall-stats-left">
            <p>
              A Mediall Brasil se consolida como protagonista e referência nacional em
              administração e gerenciamento de serviços hospitalares, reunindo sólida
              expertise técnica, equipe altamente qualificada e visão estratégica
              orientada a resultados para garantir excelência assistencial, eficiência
              operacional e alto desempenho na gestão da saúde, e assim garantir:
            </p>
            <ul className="mediall-stats-bullets">
              {BULLETS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT — clean image + animated counters */}
          <div className="mediall-stats-right">
            <div style={{
              position: "relative",
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 6px 32px rgba(29, 42, 77, 0.18), 0 1px 6px rgba(29, 42, 77, 0.1)",
              border: "1px solid rgba(38, 57, 103, 0.12)",
            }}>
              <Image
                src="/assets/images/mediall/Portfolio Mediall Brasil 26 clean.png.png"
                alt="Mediall Brasil — Números que falam por si"
                width={1600}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority={false}
              />
              {STATS.map((stat) => (
                <StatCounter key={stat.id} stat={stat} active={active} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
