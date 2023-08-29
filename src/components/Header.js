import { useState } from "react";
import "./Header.css";
import { HiMagnifyingGlass, HiBars3, HiOutlineXMark } from "react-icons/hi2";

function HeaderComponent({ onSearch, onFAQ, searchToggle, isSticky, onHome }) {
  const [navInput, setNavInput] = useState("");
  const [openNav, setOpenNav] = useState(false);

  // function handleScroll(e, id) {
  //   e.preventDefault();

  //   if (id === "top") {
  //     window.scrollTo(0, 0);
  //     setOpenNav(!openNav);
  //   }

  //   if (id !== "top") {
  //     const section = document.getElementById(id);
  //     const offset = 80;
  //     const topPosition =
  //       section.getBoundingClientRect().top + window.pageYOffset - offset;
  //     window.scrollTo({
  //       top: topPosition,
  //       behavior: "smooth",
  //     });
  //     setOpenNav(!openNav);
  //   }
  // }

  function handleRenderHome() {
    onHome();
    setNavInput("");
    setOpenNav(false);
  }
  function handleRenderFAQ() {
    onFAQ();
    setNavInput("");
    setOpenNav(false);
  }

  function handleHeaderForm(e) {
    e.preventDefault();

    onSearch(navInput);

    console.log(`HEADER FORM - ${navInput}`);
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
      <form
        className={!searchToggle ? "hidden" : "header-search-form"}
        onSubmit={(e) => handleHeaderForm(e)}
      >
        <input
          type="text"
          placeholder="e.g. Aloe"
          value={navInput}
          onChange={(e) => setNavInput(e.target.value)}
        />
        <button>
          <HiMagnifyingGlass />
        </button>
      </form>

      <nav
        className={`nav ${
          !openNav ? "nav-mobile nav-mobile--hidden" : "nav-mobile"
        }`}
      >
        <ul className="nav--ul">
          <li className="nav--li">
            {" "}
            <a href="#top" onClick={() => handleRenderHome()}>
              Home
            </a>
          </li>
          <li className="nav--li">
            {" "}
            <a href="#faq" onClick={() => handleRenderFAQ()}>
              FAQ
            </a>
          </li>
          <li className="nav--li">
            {" "}
            <a href="#signup">SIGN UP</a>
          </li>
        </ul>
      </nav>
      <div className="nav-mobile-div">
        <button className="nav-mobile-btn" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <HiOutlineXMark /> : <HiBars3 />}
        </button>
      </div>
    </header>
  );
}

export default HeaderComponent;
