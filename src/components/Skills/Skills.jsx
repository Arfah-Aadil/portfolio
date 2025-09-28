import "./Skills.css";

function Skills() {
  const skills = [
    "Java", "Python", "React", "Node.js", "HTML & CSS", "JavaScript",
    "SQL", "Spring Boot", "REST APIs", "Docker", "Kubernetes",
    "GCP", "CI/CD", "Git & GitHub"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;