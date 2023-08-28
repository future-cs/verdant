import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="section-hero" id="hero">
      <div className="hero grid">
        <div className="hero-div--left">
          <h1 className="heading-primary">Verdant</h1>
          <div>
            <span className="hero-subhead">
              Get inspired to create your own garden
            </span>
            <p>
              Embark on this botanical journey with us and watch your
              fascination with plants flourish into expertise. Let's grow
              together!
            </p>
          </div>

          <div className="hero-signup-div">
            <a href="#signup" className="hero-signup">
              SIGN UP
            </a>
          </div>
        </div>
        <div className="hero-div--right">
          <div className="hero-small-img">
            {" "}
            <img
              className="hero-img"
              src="img/1.webp"
              alt="Computer Drawing"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
