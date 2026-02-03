"use client";

const projects = [
  {
    image: "/assets/images/team/projects/1.jpg",
    title: "DR.Richard Muldoone",
  },
  {
    image: "/assets/images/team/projects/2.jpg",
    title: "DR.Michael Brian",
  },
  {
    image: "/assets/images/team/projects/3.jpg",
    title: "DR.Maria Andaloro",
  },
  {
    image: "/assets/images/team/projects/4.jpg",
    title: "DR.Dupree Black",
  },
];

export default function TeamProjectsCarousel() {
  return (
    <section className="team team-projects" id="teamProjects-1">
      <div className="row g-0">
        {projects.map((project, index) => (
          <div key={index} className="col-6 col-lg-3">
            <div className="project" data-hover="">
              <a
                className="img-gallery-item"
                href={project.image}
                title={project.title}
                data-hover=""
              ></a>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
