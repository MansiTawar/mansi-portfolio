import "../styles/hero.css";
import heroImage from "../assets/hero-me.jpeg";


function Hero() {
  return (
    <section className="hero-section">

      

       <div className="watercolor-canvas">
        {/* Main Defined Rainbow Strokes */}
        <div className="stroke stroke-red"></div>
        <div className="stroke stroke-orange"></div>
        <div className="stroke stroke-yellow"></div>
        <div className="stroke stroke-green"></div>
        <div className="stroke stroke-blue"></div>
        <div className="hero-blob-purple"></div>
        <div className="hero-blob-yellow"></div>
        <div className="hero-blob-green"></div>
        <div className="hero-blob-blue"></div>
        
        {/* The Small "Perfect" Splatters */}
        <div className="splatter sp1"></div>
        <div className="splatter sp2"></div>
        <div className="splatter sp3"></div>
        <div className="splatter sp4"></div>
        <div className="splatter sp5"></div>
        <div className="splatter sp6"></div>
        <div className="splatter sp7"></div>
        <div className="splatter sp8"></div>
        <div className="splatter sp9"></div>
      </div>

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
