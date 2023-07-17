// import React, { useEffect, useState } from "react";

function MyComponent({ solution }) {
  console.log(solution);
  // console.log(data);
  // console.log(data.data[0]);
  // console.log(data.data[0].common_name);
  // console.log(typeof data.data[0].default_image.original_url);

  // function handleContent() {
  //   setContent(data.data[0].id);
  // }

  // console.log(solution.data[0].common_name);
  return (
    <div className="component">
      <div className="component-header">
        <div className="component-header-div--border">
          <div>
            <h2 className="heading-secondary">
              {solution.data[26].common_name}
            </h2>
            <p className="subheading">{solution.data[26].scientific_name[0]}</p>
            <p className="subheading">_id = {solution.data[26].id}</p>
            <p className="subheading">
              image URL = {solution.data[26].default_image.original_url}
            </p>
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
              src={solution.data[26].default_image.original_url}
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

export default MyComponent;