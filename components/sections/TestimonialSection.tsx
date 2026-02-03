"use client";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const testimonials = [
  { name: "sami wade", company: "promina", img: "/assets/images/testimonial/1.jpg" },
  { name: "john peter", company: "optima inc", img: "/assets/images/testimonial/2.jpg" },
  { name: "sony blake", company: "koira ind", img: "/assets/images/testimonial/3.jpg" },
];

const testimonialText =
  "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!";

export default function TestimonialSection() {
  return (
    <section className="testimonial testimonial-1 testimonial-2" id="testimonial-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="clients-img">
              <img src="/assets/images/testimonial/image.png" alt="image" />
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <h6 className="section-head">hear the inspiring stories of our patients</h6>
            <SwiperCarousel pagination autoplay loop speed={800}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-panel testimonial-panel-2">
                  <div className="testimonial-body">
                    <div className="testimonial-content">
                      <div className="testimonial-icon"></div>
                      <p>{testimonialText}</p>
                      <div className="testimonial-thumb">
                        <div className="thumb-img">
                          <img src={t.img} alt="Testimonial Author" />
                          <i className="icon-Quote-Icon"></i>
                        </div>
                        <div className="thumb-body">
                          <h6>{t.name}</h6>
                          <p>{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SwiperCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
