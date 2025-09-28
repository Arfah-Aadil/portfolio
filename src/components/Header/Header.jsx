import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-content">
        <h1>Arfah Aadil</h1>
        <p className="subtitle">MSc in Software Engineering | Full Stack Developer</p>
        <a 
        href="/files/ArfahAadil_CV.pdf" 
        download="ArfahAadil_CV.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
