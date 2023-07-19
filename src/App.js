// import React, { useState } from "react";
import "./general.css";
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
          <span className="collection-subhead">Today's article presents:</span>
          <div className="collection-header">
            <div className="collection-header-div--border">
              <div>
                <h2 className="heading-secondary">Our Collection</h2>
              </div>
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
          <span className="hero-subhead">Dive into the botanical world.</span>
          <p>
            Every day a new article with a different species and it's
            particularities, FAQs and more.
          </p>
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
