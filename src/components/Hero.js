import React from "react";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero grid">
        <div className="hero-div--left">
          <h1 className="heading-primary">Verdant</h1>
          <div>
            <span className="hero-subhead">Dive into the botanical world.</span>
            <p>Get inspired to create your own garden.</p>
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
