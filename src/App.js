import "./App.css";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import SearchList from "./components/SearchList";
import CTA from "./components/CTA";
import FooterComponent from "./components/Footer";
import Article from "./components/Article";

import BackToTop from "./components/BackToTop";
import { FAQ } from "./components/FAQ";

function App() {
  const [search, setSearch] = useState(false);
  const [searchURL, setSearchURL] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const [article, setArticle] = useState(false);
  const [articleURL, setArticleURL] = useState("");
  const [FAQSection, setFAQSection] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the scroll position and the position of the hero section
      const scrollPosition = window.scrollY;
      const headerSectionHeight =
        document.getElementById("header").offsetHeight;

      // Update the state to make the navigation sticky
      setIsSticky(scrollPosition >= headerSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSearch(searchInput) {
    const text = searchInput;
    const edited = text.trim().replace(/ /g, "&");
    const curSearchURL = `https://perenual.com/api/species-list?key=sk-Sw6j64b3059ecc0811570&q=${edited}`;
    setSearchURL(curSearchURL);
    setSearch(true);
    setArticle(false);
    setSearchToggle(true);
  }

  function handleArticle(id) {
    const curSearchURL = `https://perenual.com/api/species/details/${id}?key=sk-Sw6j64b3059ecc0811570`;
    setSearch(false);
    setArticle(true);
    setArticleURL(curSearchURL);
    setSearchToggle(true);
  }

  function handleHome() {
    setSearch(false);
    setArticle(false);
    setFAQSection(false);

    setSearchToggle(false);
  }
  function handleFAQ() {
    setSearch(false);
    setArticle(false);
    setFAQSection(true);
    setSearchToggle(false);
  }

  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="container" id="container">
      <HeaderComponent
        onSearch={handleSearch}
        searchToggle={searchToggle}
        onHome={handleHome}
        onFAQ={handleFAQ}
      />
      {search || article || FAQSection ? (
        <></>
      ) : (
        <Hero onSearch={handleSearch} />
      )}
      {search || article || FAQSection ? <></> : <How />}
      {search ? (
        <SearchList searchURL={searchURL} onArticle={handleArticle} />
      ) : (
        <></>
      )}
      {article ? <Article articleURL={articleURL} /> : <></>}
      {FAQSection ? <FAQ /> : <></>}
      <CTA id="signup" />
      <FooterComponent />
      {isSticky ? <BackToTop onHandleScroll={handleScroll} /> : <></>}
    </div>
  );
}

export default App;
