"use client";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 200;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`backtop ${visible ? "active" : ""}`}
      id="back-to-top"
      data-hover=""
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none", cursor: "pointer" }}
    >
      <svg
        className="bi bi-chevron-up"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </div>
  );
}
