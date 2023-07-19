// import React, { useState } from "react";
import "./general.css";
import "./Hero.css";
import "./MainComponent.css";
import "./CTA.css";
import apiExampleListCall from "./apiExample.js";
import NavComponent from "./Nav";

import CTA from "./CTA";
import FooterComponent from "./Footer";

function App() {
  return <Container />;
}

function Container() {
  return (
    <>
      <div className="container">
        <NavComponent />
        <Hero />
        <Collection />

        <CTA id="signup" />
        <FooterComponent />
      </div>
    </>
  );
}

function Collection() {
  const idDataC = true;

  if (!idDataC) {
    return <h2 className="heading-secondary">LOADING</h2>;
  }

  if (idDataC) {
    return (
      <section className="section-component">
        <div className="component">
          <div className="collection-header">
            <span className="collection-subhead">Our Collection</span>
            <div>
              <h2 className="heading-secondary">Inspirations</h2>
            </div>
          </div>
          {/* s */}
          <div className="collection-grid">
            {apiExampleListCall.data.map((item) => (
              <div className="collection-item" key={item.id}>
                <p className="collection-item--text">
                  {item.common_name.charAt(0).toUpperCase() +
                    item.common_name.slice(1)}
                </p>
                <img
                  className="component-img--medium"
                  src={
                    item.default_image
                      ? item.default_image.small_url
                      : "img/9251D335-BFF2-4D65-8135-B945C749803E.png"
                  }
                  alt={item.id}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function Hero() {
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

export default App;
