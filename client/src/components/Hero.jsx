
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="hero-eyebrow">
          SINGER · ACOUSTIC ARTIST · PERFORMER
        </p>

        <h1>
          Music is
          <br />
          my <span>language.</span>
        </h1>

        <p className="hero-description">
          Hey, I'm Gabriel. I sing, play, perform and
          create moments through music. Welcome to
          my little corner of the internet.
        </p>

        <div className="hero-actions">
          <a href="#videos" className="btn-primary">
            Explore my music
            <ArrowUpRight size={18} />
          </a>

          <a href="#performances" className="btn-secondary">
            <Play size={16} />
            Live performances
          </a>
        </div>

        <a href="#videos" className="scroll-indicator">
          <ArrowDown size={17} />
          SCROLL TO EXPLORE
        </a>
      </div>

      <div className="hero-visual">
        <div className="hero-image-placeholder">
          <div className="visual-top">
            <span>GABRIEL / 001</span>
            <span>EST. IN MUSIC</span>
          </div>

          <div className="visual-center">
            <div className="visual-circle">
              <Play size={30} fill="currentColor" />
            </div>
            <p>THE MUSIC SPEAKS</p>
          </div>

          <div className="visual-bottom">
            <span>VOICE & GUITAR</span>
            <span>SCROLL TO FEEL</span>
          </div>
        </div>

        <p className="visual-caption">
          A little bit of soul, a little bit of sound.
        </p>
      </div>

    </section>
  );
}

export default Hero;
