import "../styles/hero.css";
import heroImage from "../assets/Mansi_Portfolio2.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Hi, I'm Mansi Tawar</h2>
        <h1>Java Full Stack Developer</h1>

        <p>
          Passionate about creating innovative web solutions with modern
          technologies.
        </p>

        <p>
          I specialize in building responsive, user-friendly applications that
          deliver exceptional user experiences.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Get In Touch</button>
        </div>
      </div>

      <div className="hero-visual">
        <img src={heroImage} alt="Mansi Tawar" />
      </div>
    </section>
  );
}

export default Hero;
