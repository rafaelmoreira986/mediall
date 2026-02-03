import Link from "next/link";

export default function CtaSection5() {
  return (
    <section className="cta cta-5" id="cta-5">
      <div className="bg-section">
        <img src="/assets/images/background/wavy-pattern.png" alt="background" />
      </div>
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className="heading heading-8 heading-light">
            <h2 className="heading-title">
              Sets The Standard For High Quality Care And Patient Safety!!
            </h2>
            <p className="paragraph">
              Our doctors include highly qualified practitioners who come from a
              range of backgrounds and bring a diversity of skills. Besides, our
              administration staff all have exceptional people skills
            </p>
          </div>
          <div className="prief-set prief-set-2">
            <p>
              Our administration and support staff all have exceptional people
              skills and trained to assist you with all medical enquiries.
            </p>
            <div className="advantages-list-holder">
              <ul className="list-unstyled advantages-list">
                <li>
                  <i className="fas fa-check"></i> Fractures &amp; dislocations
                </li>
                <li>
                  <i className="fas fa-check"></i> Desensitisation injections
                </li>
                <li>
                  <i className="fas fa-check"></i> Home medicine review
                </li>
              </ul>
              <ul className="list-unstyled advantages-list">
                <li>
                  <i className="fas fa-check"></i> Health Assessments
                </li>
                <li>
                  <i className="fas fa-check"></i> High Quality Care
                </li>
              </ul>
            </div>
          </div>
          <div className="phone-card">
            <div className="card-icon">
              <i className="flaticon-022-medical"></i>
            </div>
            <div className="card-content">
              <h5>emergency cases</h5>
              <p>
                Please feel welcome to contact our friendly reception staff with
                any general or medical enquiry call us
              </p>
              <a href="tel:0106123214">
                <i className="fas fa-phone-alt"></i> <span>0106123214</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-1">
          <div className="video video-1" id="video1">
            <div className="bg-section">
              <img src="/assets/images/video/4.jpg" alt="background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
