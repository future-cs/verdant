import "./App.css";
import React, { useState } from "react";
import HeaderComponent from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import SearchList from "./components/SearchList";
import CTA from "./components/CTA";
import FooterComponent from "./components/Footer";
import Article from "./components/Article";

function App() {
  const [search, setSearch] = useState(false);
  const [searchURL, setSearchURL] = useState("");
  const [article, setArticle] = useState(false);
  const [articleURL, setArticleURL] = useState("");
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Determine the scroll position and the position of the hero section
  //     const scrollPosition = window.scrollY;
  //     const heroSectionHeight = document.getElementById("hero").offsetHeight;

  //     // Update the state to make the navigation sticky
  //     setIsSticky(scrollPosition >= heroSectionHeight - 80);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  function handleSearch(searchInput) {
    const text = searchInput;
    const edited = text.trim().replace(/ /g, "&");
    const curSearchURL = `https://perenual.com/api/species-list?key=sk-Sw6j64b3059ecc0811570&q=${edited}`;
    setSearchURL(curSearchURL);
    setSearch(true);
    setArticle(false);
  }

  function handleArticle(id) {
    const curSearchURL = `https://perenual.com/api/species/details/${id}?key=sk-Sw6j64b3059ecc0811570`;
    setSearch(false);
    setArticle(true);
    setArticleURL(curSearchURL);
  }

  function handleHome() {
    setSearch(false);
    setArticle(false);
  }

  return (
    <div className="container">
      <HeaderComponent
        onSearch={handleSearch}
        onHome={handleHome}
       
      />

      {search || article ? <></> : <Hero />}
      {search || article ? <></> : <How />}
      {/* <SearchList searchURL={searchURL} onArticle={handleArticle} /> */}
      {search ? (
        <SearchList searchURL={searchURL} onArticle={handleArticle} />
      ) : (
        <></>
      )}
      {article ? <Article articleURL={articleURL} /> : <></>}
      <CTA id="signup" />
      <FooterComponent />
    </div>
  );
}

export default App;
