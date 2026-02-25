"use client";
import { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { mainNavigation } from "@/lib/navigation";

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 100;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-sticky ${isSticky ? "navbar-fixed" : ""}`}
      id="primary-menu"
      style={{ justifyContent: "center" }}
    >
      <Link className="navbar-brand" href="/">
        <img className="logo logo-dark" src="/assets/images/mediall/logoMediall.png" alt="Mediall Logo" style={{ maxHeight: "35px", width: "auto" }} />
        <img className="logo logo-mobile" src="/assets/images/mediall/logoMediall.png" alt="Mediall Logo" />
      </Link>

      <div className="module-holder module-holder-phone">
        <button
          className={`navbar-toggler ${mobileOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-controls="navbarContent"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`} id="navbarContent" style={{ justifyContent: "center" }}>
        <ul className="navbar-nav" style={{ margin: "0 auto" }}>
          {mainNavigation.map((item, idx) => (
            <li
              key={idx}
              className={`nav-item ${idx === 0 ? "active" : ""}`}
              id={item.id}
              data-hover=""
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 12px" }}>
          <Link href="/" title="Português" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em", color: "#263967", opacity: 1, textDecoration: "none", border: "1.5px solid #263967", borderRadius: "3px", padding: "2px 6px" }}>BR</Link>
          <Link href="/es" title="Español" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em", color: "#263967", opacity: 0.4, textDecoration: "none", border: "1.5px solid #263967", borderRadius: "3px", padding: "2px 6px" }}>ES</Link>
        </div>
      </div>
    </nav>
  );
}
