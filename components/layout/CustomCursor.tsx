"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let circleX = 0;
    let circleY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      dotX = lerp(dotX, mouseX, 0.5);
      dotY = lerp(dotY, mouseY, 0.5);
      circleX = lerp(circleX, mouseX, 0.15);
      circleY = lerp(circleY, mouseY, 0.15);

      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(render);

    // Scale on hover of [data-hover] elements
    const onEnter = () => circle.classList.add("cursor-hover");
    const onLeave = () => circle.classList.remove("cursor-hover");

    const hoverElements = document.querySelectorAll("[data-hover]");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="cursor" style={{ position: "fixed", top: 0, left: 0, zIndex: 99999, pointerEvents: "none" }}>
      <div ref={circleRef} className="cursor__inner cursor__inner--circle"></div>
      <div ref={dotRef} className="cursor__inner cursor__inner--dot"></div>
    </div>
  );
}
