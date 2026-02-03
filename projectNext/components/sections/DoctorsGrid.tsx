import Link from "next/link";

const doctors = [
  {
    name: "Richard Muldoone",
    specialty: "Cardiology Specialist",
    description:
      "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George University School of Medicine.",
    image: "/assets/images/team/grid/1.jpg",
  },
  {
    name: "Michael Brian",
    specialty: "Dermatologists",
    description:
      "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the skin, hair, and...",
    image: "/assets/images/team/grid/2.jpg",
  },
  {
    name: "Maria Andaloro",
    specialty: "Pediatrician",
    description:
      "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board of Pediatrics.",
    image: "/assets/images/team/grid/3.jpg",
  },
];

export default function DoctorsGrid() {
  return (
    <section className="team team-grid team-grid-2" id="teamGrid-1">
      <div className="container">
        <div className="heading heading-9">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">Meet Our Doctors</h2>
              <p className="heading-desc">
                Our administration and staff all have exceptional skills and
                trained to assist you with all medical enquiries.
              </p>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="doctor-action">
                <Link
                  className="btn btn--secondary btn-line btn-line-after"
                  href="/appointments"
                >
                  <span>make appointment</span>
                  <span className="line">
                    <span></span>
                  </span>
                </Link>
                <div className="doctor-info">
                  <div className="doctor-img">
                    <img src="/assets/images/testimonial/5.jpg" alt="image" />
                  </div>
                  <div className="doctor-body">
                    <a href="tel:0106123214">01061245741</a>
                    <p>Call 24HR / 7Days</p>
                  </div>
                  <i className="fas fa-phone-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="team-member" data-hover="">
                <div className="team-member-holder">
                  <div className="team-img">
                    <Link className="link" href="/doctors"></Link>
                    <img src={doctor.image} alt={doctor.name} />
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-phone-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <div className="team-title">
                      <h4>
                        <Link href="/doctors">{doctor.name}</Link>
                      </h4>
                    </div>
                    <div className="team-cat">
                      <a href="#">{doctor.specialty}</a>
                    </div>
                    <div className="team-desc">
                      <p>{doctor.description}</p>
                    </div>
                    <div className="team-more">
                      <Link
                        className="btn-line btn-line-inversed btn-line-before"
                        href="/doctors"
                      >
                        <span className="line">
                          <span></span>
                        </span>
                        <span>read more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
