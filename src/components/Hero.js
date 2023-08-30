import React, { useState } from "react";
import "./Hero.css";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Hero({ onSearch }) {
  const [heroInput, setHeroInput] = useState("");

  function handleHeroForm(e) {
    e.preventDefault();

    onSearch(heroInput);

    console.log(`HERO FORM - ${heroInput}`);
  }

  return (
    <section className="section-hero" id="hero">
      <div className="hero grid">
        <div className="hero-div--left">
          <h1 className="heading-primary">Verdant</h1>
          <div>
            <span className="hero-subhead">
              Get inspired to create your own garden
            </span>
          </div>
          <div className="hero-search-div">
            <form
              className="hero-search-form"
              onSubmit={(e) => handleHeroForm(e)}
            >
              <input
                type="text"
                placeholder="e.g. Aloe"
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
              />
              <button>
                <HiMagnifyingGlass />
              </button>
            </form>
            <ul>
              <li>
                <p>Suggestions:</p>
              </li>
              <li>
                <button onClick={() => onSearch("maple")}>Maple</button>
              </li>
              <li>
                <button onClick={() => onSearch("fern")}>Fern</button>
              </li>
              <li>
                <button onClick={() => onSearch("orchid")}>Orchid</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-div--right">
          <div className="hero-small-img">
            {" "}
            <img className="hero-img" src="img/1.webp" alt="Potted Plant"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
