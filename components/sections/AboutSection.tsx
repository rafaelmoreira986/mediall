"use client";
import VideoPopup from "@/components/ui/VideoPopup";

export default function AboutSection() {
  return (
    <section className="about about-2" id="about-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="about-img">
              <img className="img-fluid" src="/assets/images/about/5.jpg" alt="about Image" />
              <VideoPopup videoId="nrJtHemSPW4" className="popup-video btn-video">
                <i className="fas fa-play"></i>
                <span>watch our presentation!</span>
              </VideoPopup>
            </div>
          </div>
          <div className="col-12 col-lg-3 offset-lg-1">
            <div className="heading heading-16">
              <p className="heading-desc">
                We&apos;re here to care for you and your entire family. Regular visits to the doctor
                will depend on your age and general health!
              </p>
            </div>
            <ul className="advantages-list">
              <li><i className="fas fa-check"></i> Health assessments</li>
              <li><i className="fas fa-check"></i> Home medicine review</li>
              <li><i className="fas fa-check"></i> Fractures and dislocations</li>
              <li><i className="fas fa-check"></i> Desensitisation injections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
