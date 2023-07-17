import React, { useState } from "react";
import "./general.css";

import ComponentSectionContent from "./ComponentSection";
import InfoComponent from "./Info";
import PageVisualDivision from "./PageDivision";
import CTA from "./CTA";
import FooterComponent from "./Footer";
import { render } from "@testing-library/react";

function App() {
  return <Container />;
}

function Container() {
  const [renderPlant, setRenderPlant] = useState(false);
  return (
    <>
      <div className="container">
        <Hero />
        <QuickButton
          setRenderPlant={setRenderPlant}
          renderPlant={renderPlant}
        />
        {renderPlant === true ? (
          <ComponentSectionContent />
        ) : (
          <h1 style={{ textAlign: "center" }}>Render a plant</h1>
        )}
        <InfoComponent />
        <InfoComponent />
        <CTA />
        <FooterComponent />
      </div>
    </>
  );
}

function QuickButton({ renderPlant, setRenderPlant }) {
  return (
    <section className={renderPlant === false ? "temporary-button" : "hidden"}>
      <div className="component-header">
        <div className="component-header-div--border">
          <div>
            <h2 className="heading-secondary">MOST REARCHED SPECIES</h2>
          </div>
          <button
            className="temporary-button--btn"
            onClick={() => setRenderPlant(true)}
          >
            DISCOVER
          </button>
        </div>
      </div>
    </section>
  );
}
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero grid">
        <div className="hero-div--left">
          <div className="test">
            <h1 className="heading-primary">
              <span className="heading-primary--first-letter">V</span>erdant
            </h1>
            <p>Get to Know One New Plant Every Day!</p>
          </div>
        </div>
        <div className="hero-div--right">
          <img
            className="hero-img"
            src="img/8149C778-B740-42A8-9AEA-63613A791D95.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-bottom-text">
          <h2>Dive into the botanical world.</h2>
          <p>More then 1000 species listed.</p>
          <p>
            Ruby Slippers Amur Maple is an amazing plant species that can
            survive in extreme conditions. It has a unique vertical habit,
            clockwise foliage, and bright red stems which makes it a great
            ornamental tree..
          </p>
        </div>
        <div>
          <img
            className="hero-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default App;
