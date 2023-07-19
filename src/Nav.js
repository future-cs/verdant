function NavComponent() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <div>
          <img
            className="nav-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
        <div className="logo-text">VerdantWorld.com</div>
      </div>

      <nav className="main-nav">
        <ul className="main-nav--ul">
          <li className="main-nav--li">
            {" "}
            <a href="#article">Articles</a>
          </li>
          <li className="main-nav--li">
            {" "}
            <a href="#faq">FAQ</a>
          </li>
          <li className="main-nav--li">
            {" "}
            <a href="#signup">SIGN UP</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavComponent;
