import Link from "next/link";

const services = [
  {
    icon: "flaticon-046-blood-pressure",
    title: "Neurology Clinic",
    description:
      "Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.",
    image: "/assets/images/services/1.jpg",
    link: "/services",
  },
  {
    icon: "flaticon-029-cardiogram-1",
    title: "Cardiology Clinic",
    description:
      "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...",
    image: "/assets/images/services/2.jpg",
    link: "/services",
  },
  {
    icon: "flaticon-018-medical-2",
    title: "Pathology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...",
    image: "/assets/images/services/3.jpg",
    link: "/services",
  },
  {
    icon: "flaticon-032-medicine",
    title: "Laboratory Analysis",
    description:
      "Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.",
    image: "/assets/images/services/4.jpg",
    link: "/services",
  },
  {
    icon: "flaticon-017-medical-3",
    title: "Pediatric Clinic",
    description:
      "Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.",
    image: "/assets/images/services/5.jpg",
    link: "/services",
  },
  {
    icon: "flaticon-007-stethoscope",
    title: "Cardiac Clinic",
    description:
      "For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.",
    image: "/assets/images/services/6.jpg",
    link: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services" id="services-1">
      <div className="bg-section">
        <img src="/assets/images/background/pattern.png" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading heading-7 text--center">
              <p className="heading-subtitle">
                The Best Medical And General Practice Care!
              </p>
              <h2 className="heading-title">
                Providing Medical Care For The Sickest In Community.
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="service-panel" data-hover="">
                <div className="service-panel-holder">
                  <div className="service-content">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="service-title">
                      <h4>
                        <Link href={service.link}>{service.title}</Link>
                      </h4>
                    </div>
                    <div className="service-desc">
                      <p>{service.description}</p>
                    </div>
                    <div className="service-more">
                      <Link
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href={service.link}
                      >
                        <span className="line">
                          <span></span>
                        </span>
                        <span>read more</span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-img">
                    <Link href={service.link}></Link>
                    <img src={service.image} alt={service.title} />
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
