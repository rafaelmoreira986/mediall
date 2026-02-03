"use client";
import Link from "next/link";
import VideoPopup from "@/components/ui/VideoPopup";

export default function HeroServices() {
  return (
    <section className="hero hero-6 bg-overlay bg-overlay-dark">
      <div className="bg-section">
        <img src="/assets/images/sliders/13.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="hero-subtitle">
                Caring For The Health Of You And Your Family.
              </p>
              <h2 className="hero-title">
                We Provide All Aspects Of Medical Practice For Your Whole Family!
              </h2>
              <div className="hero-action">
                <Link
                  className="btn btn--white btn-line btn-line-after btn-line-inversed"
                  href="/about"
                >
                  <span>more about us</span>
                  <span className="line">
                    <span></span>
                  </span>
                </Link>
                <VideoPopup
                  videoId="nrJtHemSPW4"
                  className="popup-video btn-video btn-video-2"
                >
                  <i className="fas fa-play"></i>
                </VideoPopup>
              </div>
            </div>
            <div className="col-12">
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/services">Services</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
