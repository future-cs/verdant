import "./Footer.css";

function FooterComponent() {
  return (
    <section className="section-footer">
      <div className="footer-div">
        <div className="footer-visual-division-container">
          <div className="outside-div">
            <div className="inner-div">
              <img
                className="page-visual-division-img"
                src="img/division-ornament.png"
                alt="Computer Drawing"
              ></img>
            </div>
          </div>
          <div className="outside-div">
            <div className="inner-div">
              <img
                className="page-visual-division-img"
                src="img/division-ornament.png"
                alt="Computer Drawing"
              ></img>
            </div>
          </div>
          <div className="outside-div">
            <div className="inner-div">
              <img
                className="page-visual-division-img"
                src="img/division-ornament.png"
                alt="Computer Drawing"
              ></img>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; <span>2023</span> by Verdant, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterComponent;
