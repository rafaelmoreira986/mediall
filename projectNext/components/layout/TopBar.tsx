"use client";
import { useState } from "react";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import Link from "next/link";

const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8" width="11" height="8">
    <g><g><g>
      <path className="shp1" d="M11 4L7.01 0L7.01 3L0 3L0 5L7.01 5L7.01 8L11 4Z" />
    </g></g></g>
  </svg>
);

const headlines = [
  "Hear their real stories",
  "tips for eating healthy",
  "why wearing a mask",
  "why coronavirus cases rise ?",
];

export default function TopBar() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="top-bar">
      <div className="block-left">
        <p className="headline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
            <g><g><g>
              <path className="shp0" d="M10 10L8 10L8 4L10 4L10 10ZM9 14.3C8.28 14.3 7.7 13.72 7.7 13C7.7 12.28 8.28 11.7 9 11.7C9.72 11.7 10.3 12.28 10.3 13C10.3 13.72 9.72 14.3 9 14.3ZM12.73 0L5.27 0L0 5.27L0 12.73L5.27 18L12.73 18L18 12.73L18 5.27L12.73 0Z" />
            </g></g></g>
          </svg>
          Our Clinic sees over 10,000 patients every year.
        </p>
        <SwiperCarousel autoplay loop speed={800} className="carousel">
          {headlines.map((text, i) => (
            <Link key={i} href="/blog-grid-fullwidth">
              {text} <ArrowSvg />
            </Link>
          ))}
        </SwiperCarousel>
      </div>
      <div className="block-right">
        <div className="top-contact">
          <div className="contact-infos">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-body">
              <a href="tel:123-456-7890">emergency line: 002 010612457410</a>
            </div>
          </div>
          <div className="contact-infos">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-body">
              <a href="#">location: brooklyn, new york</a>
            </div>
          </div>
          <div className="contact-infos">
            <i className="fas fa-clock"></i>
            <div className="contact-body">
              <p>Mon-Fri: 8am – 7pm</p>
            </div>
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
      </div>
    </div>
  );
}
