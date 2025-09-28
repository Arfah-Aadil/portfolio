import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Library Resource Management System",
      description: "An inventory management system to track hardware and software items for Bipsync, designed to streamline distribution, returns, and compliance, built using Java, Spring Boot, H2 Database, and GitLab.",
      repo: "https://github.com/Arfah-Aadil/Bipsync-Library-Application"
    },
    {
      title: "Assessment Tracking System",
      description: "An automated academic assessment tracking system for managing the full assessment lifecycle, developed using Java, Spring Boot, MariaDB and GitLab.",
      repo: "https://github.com/Arfah-Aadil/Assessment-Tracking-System"
    },
    {
      title: "Employee Management System",
      description: "An Employee Management System at Capgemini that streamlines HR workflows, developed using Java and Spring Boot.",
      repo: "https://github.com/Arfah-Aadil/Employee-Management-System"
    },
    {
      title: "Audio Adventures",
      description: "An accessible educational game prototype for visually impaired users, built using MIT App Inventor.",
      repo: "https://github.com/Arfah-Aadil/Audio-Adventures"
    },
    {
      title: "Banking Application",
      description: "A Java command-line banking app to manage accounts, balances, and transactions, developed using Java.",
      repo: "https://github.com/Arfah-Aadil/Banking-Application"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
