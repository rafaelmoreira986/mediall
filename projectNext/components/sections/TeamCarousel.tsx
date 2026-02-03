"use client";
import Link from "next/link";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const doctors = [
  { name: "Richard Muldoone", specialty: "Cardiology Specialist", img: "/assets/images/team/grid/1.jpg", desc: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George University School of Medicine." },
  { name: "Michael Brian", specialty: "Dermatologists", img: "/assets/images/team/grid/2.jpg", desc: "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the skin, hair, and..." },
  { name: "Maria Andaloro", specialty: "Pediatrician", img: "/assets/images/team/grid/3.jpg", desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board of Pediatrics." },
  { name: "Dupree Black", specialty: "Urologist", img: "/assets/images/team/grid/4.jpg", desc: "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving..." },
  { name: "Markus Skar", specialty: "laboratory", img: "/assets/images/team/grid/5.jpg", desc: "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests." },
  { name: "Kiano Barker", specialty: "Pathologist", img: "/assets/images/team/grid/6.jpg", desc: "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care." },
];

export default function TeamCarousel() {
  return (
    <section className="team team-modern team-carousel" id="teamCarousel-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="heading heading-5">
              <h2 className="heading-title">meet our doctors</h2>
              <p className="heading-desc">Our administration and support staff have exceptional skills and trained to assist you with all enquiries.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SwiperCarousel
              slidesPerView={3}
              slidesPerViewMd={2}
              navigation
              autoplay
              loop
              spaceBetween={30}
              speed={3000}
            >
              {doctors.map((doc, i) => (
                <div key={i}>
                  <div className="team-member" data-hover="">
                    <div className="team-member-holder">
                      <div className="team-img">
                        <Link className="link" href="/doctors-single-modern"></Link>
                        <img src={doc.img} alt="team member" />
                      </div>
                      <div className="team-content-holder">
                        <div className="team-content">
                          <div className="team-title">
                            <h4><Link href="/doctors-single-modern">{doc.name}</Link></h4>
                          </div>
                          <div className="team-cat"><a href="#">{doc.specialty}</a></div>
                          <div className="team-desc"><p>{doc.desc}</p></div>
                          <div className="team-social">
                            <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter"></i></a>
                            <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-envelope"></i></a>
                            <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-phone-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SwiperCarousel>
          </div>
          <div className="col-12">
            <div className="action-bar">
              <p className="note">
                <span><i className="fas fa-calendar-day"></i> on monday, </span>
                Doctors will be available from 8 am : 12 am , kindly call to confirm your Appointment
              </p>
              <Link className="btn btn--primary btn-line btn-line-after" href="/page-appointments">
                <span>make appointment</span><span className="line"><span></span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
