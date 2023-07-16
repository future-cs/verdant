import React, { useEffect, useState } from "react";
import "./general.css";
import MyComponent from "./componentFetch";
import MyComponentC from "./componentFetchB";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return <Container />;
}

function Container() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://perenual.com/api/species-list?page=1&key=sk-Sw6j64b3059ecc0811570&"
      );

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container">
        <Hero />
        <PageVisualDivision />
        <Component />
        <Info />
        {/* {data ? <MyComponent solution={data} /> : <div>Not Yet</div>} */}
        {/* {data ? <MyComponentC solution={data} /> : <div>Not Yet</div>} */}

        {/* <MyComponent solution={data} /> */}
        {/* <MyComponentC currentId={data ? `${data.data[0].id}` : null} /> */}
        <Footer />
        <FooterB />
      </div>
    </>
  );
}
function Hero() {
  return (
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
      {/* <div className="hero-div--bottom">
        <div>
          <img
            className="hero-img--bottom"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
        <div>
          <img
            className="hero-img--bottom"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
        <div>
          <img
            className="hero-img--bottom"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div> */}
    </div>
  );
}

function PageVisualDivision() {
  return (
    <div className="page-visual-division">
      <div className="outside-div">
        <div className="inner-div">
          <img
            className="page-visual-division-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
      <div className="outside-div">
        <div className="inner-div">
          <img
            className="page-visual-division-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
      <div className="outside-div">
        <div className="inner-div">
          <img
            className="page-visual-division-img"
            src="img/9251D335-BFF2-4D65-8135-B945C749803E.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="component">
      <div className="component-header">
        <div className="component-header-div--border">
          <div>
            <h2 className="heading-secondary">ZZ Plant</h2>
            <p className="subheading">Zamioculcas zamiifolia</p>
          </div>
          <img
            className="component-header-img"
            src="img/leaf-white-outline.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
      <div className="component-grid">
        <div className="component-div--left">
          <div className="large-img">
            <img
              className="component-img--large"
              src="img/8149C778-B740-42A8-9AEA-63613A791D95.png"
              alt="Computer Drawing"
            ></img>
          </div>
          <div className="container-img--small">
            <div className="div-img--small div-img--small--selected">
              <img
                className="component-img--small"
                src="img/8149C778-B740-42A8-9AEA-63613A791D95.png"
                alt="Computer Drawing"
              ></img>
            </div>
            <div className="div-img--small">
              <img
                className="component-img--small"
                src="img/8149C778-B740-42A8-9AEA-63613A791D95.png"
                alt="Computer Drawing"
              ></img>
            </div>
            <div className="div-img--small">
              <img
                className="component-img--small"
                src="img/8149C778-B740-42A8-9AEA-63613A791D95.png"
                alt="Computer Drawing"
              ></img>
            </div>
          </div>
        </div>
        <div className="component-div--right">
          {/* <h2>Component</h2> */}
          <ul className="component-div--right-ul">
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">
                Common names:
              </span>
              <span className="component-div--right-li--text">
                Zanzibar gem, ZZ plant, Zuzu Plant, aroid palm, eternity plant,
                emerald palm.
              </span>
            </li>
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">Cicle:</span>
              <span className="component-div--right-li--text">Perennial.</span>
            </li>
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">Sunlight:</span>
              <span className="component-div--right-li--text">Part shade.</span>
            </li>
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">Watering:</span>
              <span className="component-div--right-li--text">Frequent.</span>
            </li>
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">Origin:</span>
              <span className="component-div--right-li--text">Africa.</span>
            </li>
            <li className="component-div--right-li">
              <span className="component-div--right-li--item">Type:</span>
              <span className="component-div--right-li--text">Bush.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Info() {
  return (
    <div className="info">
      <div className="info-div-img">
        <div className="info-div-img-absolute">
          <img
            className="info-img"
            // src="img/plant-idea.png"
            src="img/leaf-white-outline.png"
            alt="Computer Drawing"
          ></img>
        </div>
      </div>
      <div className="info-div-content">
        <h3>Do shade growing plants need any sunlight?</h3>
        <p>
          Yes, shade growing plants do need sunlight, althought they require
          less then others.
        </p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-cta">
          <div className="footer-cta-left">
            <h3>
              Sign up to receive an daily email form yout favorire botanical
              website.
            </h3>
            <h3>MAKE BACKGROUND WHITE AND LEAFES + TEXT BRIGHT GREEN</h3>
            <div className="footer-cta-signup">
              {/* <label>Your e-:mail</label> */}
              <input placeholder="john.smith@email.com"></input>
              <button>SIGN UP</button>
            </div>
          </div>
          <div className="footer-cta-right">
            <img
              className="cta-img"
              // src="img/plant-idea.png"
              src="img/leaf-white-outline.png"
              alt="Computer Drawing"
            ></img>
          </div>
        </div>
        {/* <div className="copyright">
          <p>
            Copyright &copy; <span>2023</span> by Gustavo Oliveira, Inc. All
            rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  );
}
function FooterB() {
  return (
    <div className="footer">
      <div className="inner-footer">
        {/* <div className="footer-cta">
          <div className="footer-cta-left">
            <h3>
              Sign up to receive an daily email form yout favorire botanical
              website.
            </h3>
            <div className="footer-cta-signup">
          
              <input placeholder="john.smith@email.com"></input>
              <button>SIGN UP</button>
            </div>
          </div>
          <div className="footer-cta-right">
            <img
              className="cta-img"
  
              src="img/leaf-white-outline.png"
              alt="Computer Drawing"
            ></img>
          </div>
        </div> */}
        <div className="copyright">
          <p>
            Copyright &copy; <span>2023</span> by Gustavo Oliveira, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
