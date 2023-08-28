import { useState } from "react";
import "./Header.css";
import { HiMagnifyingGlass, HiBars3, HiOutlineXMark } from "react-icons/hi2";

function HeaderComponent({ onSearch, isSticky, onHome }) {
  const [navInput, setNavInput] = useState("");
  const [openNav, setOpenNav] = useState(true);

  function handleScroll(e, id) {
    e.preventDefault();

    if (id === "top") {
      window.scrollTo(0, 0);
      setOpenNav(!openNav);
    }

    if (id !== "top") {
      const section = document.getElementById(id);
      const offset = 80;
      const topPosition =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      setOpenNav(!openNav);
    }
  }

  function handleHandle() {
    onHome();
    setNavInput("");
  }

  return (
    <header className={`header ${isSticky ? "header-sticky" : ""}`} id="header">
      <div className="nav-logo">
        <div>
          <img
            className="nav-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
        <div className="logo-text">Verdant</div>
      </div>
      <div className="search-div">
        <input
          type="text"
          placeholder="e.g. Aloe"
          value={navInput}
          onChange={(e) => setNavInput(e.target.value)}
        />
        <button onClick={() => onSearch(navInput)}>
          <HiMagnifyingGlass />
        </button>
      </div>

      <nav
        className={`nav ${
          openNav ? "nav-mobile nav-mobile--hidden" : "nav-mobile"
        }`}
      >
        <ul className="nav--ul">
          <li className="nav--li">
            {" "}
            <a href="#top" onClick={() => handleHandle()}>
              Home
            </a>
          </li>
          <li className="nav--li">
            {" "}
            <a href="#about" onClick={(e) => handleScroll(e, "how")}>
              About{" "}
            </a>
          </li>
          <li className="nav--li">
            {" "}
            <a href="#signup" onClick={(e) => handleScroll(e, "signup")}>
              SIGN UP
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-mobile-div">
        <button className="nav-mobile-btn" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <HiBars3 /> : <HiOutlineXMark />}
        </button>
      </div>
    </header>
  );
}

export default HeaderComponent;
