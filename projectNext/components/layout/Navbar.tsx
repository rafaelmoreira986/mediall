"use client";
import { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { mainNavigation } from "@/lib/navigation";
import { useSearch } from "./SearchOverlay";

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isSticky = scrollY > 100;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { toggle: toggleSearch } = useSearch();

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-sticky ${isSticky ? "navbar-fixed" : ""}`}
      id="primary-menu"
    >
      <Link className="navbar-brand" href="/">
        <img className="logo logo-dark" src="/assets/images/logo/logo-dark.svg" alt="Medisch Logo" />
        <img className="logo logo-mobile" src="/assets/images/logo/logo-mobile.svg" alt="Medisch Logo" />
      </Link>

      <div className="module-holder module-holder-phone">
        <div className="module module-search float-left">
          <div className="module-icon search-icon" onClick={toggleSearch}>
            <i className="icon-search" data-hover=""></i>
          </div>
        </div>
        <div className="module module-language">
          <div className="selected" onClick={() => setLangOpen(!langOpen)}>
            <img src="/assets/images/module-language/en.png" alt="alt" />
            <span>english</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          {langOpen && (
            <div className="lang-list" style={{ display: "block" }}>
              <ul>
                <li>
                  <img src="/assets/images/module-language/en.png" alt="alt" />
                  <a href="#" onClick={(e) => { e.preventDefault(); setLangOpen(false); }}>english</a>
                </li>
                <li>
                  <img src="/assets/images/module-language/ar.png" alt="alt" />
                  <a href="#" onClick={(e) => { e.preventDefault(); setLangOpen(false); }}>arabic</a>
                </li>
              </ul>
            </div>
          )}
        </div>
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

      <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`} id="navbarContent">
        <ul className="navbar-nav">
          {mainNavigation.map((item, idx) => (
            <li
              key={idx}
              className={`nav-item ${item.children ? "has-dropdown" : ""} ${idx === 0 ? "active" : ""}`}
              id={item.id}
              data-hover=""
            >
              {item.children ? (
                <>
                  <a
                    className="dropdown-toggle"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(idx);
                    }}
                  >
                    <span>{item.label}</span>
                  </a>
                  <ul
                    className={`dropdown-menu ${openDropdown === idx ? "show" : ""}`}
                  >
                    {item.children.map((child, cidx) => (
                      <li key={cidx} className={`nav-item ${child.href === "/" && idx === 0 ? "current" : ""}`}>
                        <Link href={child.href} onClick={() => setMobileOpen(false)}>
                          <span>{child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="module-holder">
          <div className="module module-search float-left">
            <div className="module-icon search-icon" onClick={toggleSearch}>
              <i className="icon-search" data-hover=""></i>
            </div>
          </div>
          <div className="module-contact">
            <Link className="btn btn--secondary" href="/doctors-timetable">
              doctors&apos; timetable
            </Link>
            <Link className="btn btn--primary btn-line btn-line-after" href="/page-appointments">
              <span>make appointment</span>
              <span className="line"><span></span></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
