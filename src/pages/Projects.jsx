
const projects = [
  {
    number: "01",
    title: "Complex Land Title Clearance",
    category: "Property Issue Resolution",
    location: "Telangana",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "02",
    title: "Luxury Apartment Development",
    category: "Construction & Development",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  }
];

function Projects({ onConsult }) {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <span>OUR PROJECTS</span>
          <h2>Selected Work</h2>
        </div>

        <p>
          A glimpse of the property matters and developments we have worked on.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span className="project-number">{project.number}</span>

              <div className="project-view">
                <span>VIEW PROJECT</span>
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="project-info">
              <div>
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
              </div>

              <div className="project-location">
                <span>LOCATION</span>
                <strong>{project.location}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;