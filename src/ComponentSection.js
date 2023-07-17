import React, { useEffect, useState } from "react";
import apiExampleID from "./apiExample";

//
const idFormatCall = apiExampleID;
console.log(idFormatCall);

//
function ComponentSectionContent() {
  const [idData, setIdData] = useState(null);

  useEffect(() => {
    fetchIdData();
  }, []);

  const fetchIdData = async () => {
    try {
      const response = await fetch(
        "https://perenual.com/api/species/details/15?key=sk-Sw6j64b3059ecc0811570"
      );
      const jsonData = await response.json();
      setIdData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(idData);

  if (idData) {
    return (
      <section className="section-component">
        <div className="component">
          <span className="component-subhead">
            Trending: The most searched speacies today.
          </span>
          <div className="component-header">
            <div className="component-header-div--border">
              <div>
                <h2 className="heading-secondary">{idData.common_name}</h2>
                <p className="subheading">{idData.scientific_name[0]}</p>
                {/* <p className="subheading">_id = {idData.id}</p> */}
              </div>
              {/* <img
              className="component-header-img"
              src="img/leaf-white-outline.png"
              alt="Computer Drawing"
            ></img> */}
            </div>
          </div>
          <div className="component-grid">
            <div className="component-div--left">
              <div className="large-img">
                {/* <img
                className="component-img--large"
                src={idData.default_image.original_url}
                alt="Computer Drawing"
              ></img> */}
                {/* <img
                className="component-img--large"
                src={idData.default_image.regular_url}
                alt="Computer Drawing"
              ></img> */}
                <img
                  className="component-img--large"
                  src={idData.default_image.medium_url}
                  alt="Computer Drawing"
                ></img>
              </div>
            </div>
            <div className="component-div--right">
              <ul className="component-div--right-ul">
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">
                    Other name(s):
                  </span>
                  <span className="component-div--right-li--text">
                    {idData.other_name}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">Origin:</span>
                  <span className="component-div--right-li--text">
                    {idData.origin.map((item) => item).join(" ,")}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">Type:</span>
                  <span className="component-div--right-li--text">
                    {idData.type}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">
                    Dimension:
                  </span>
                  <span className="component-div--right-li--text">
                    {idData.dimension}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">
                    Leaf color:
                  </span>
                  <span className="component-div--right-li--text">
                    {idData.leaf_color.map((item) => item).join(", ")}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">
                    Sunlight:
                  </span>
                  <span className="component-div--right-li--text">
                    {idData.sunlight.map((item) => item).join(", ")}
                  </span>
                </li>
                <li className="component-div--right-li">
                  <span className="component-div--right-li--item">
                    Description:
                  </span>
                  <span className="component-div--right-li--text">
                    {idData.description}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (!idData) {
    return <h1 style={{ textAlign: "center" }}>LOADING</h1>;
  }
}

export default ComponentSectionContent;

// OLD CODE - ALL GOOD AND WORKING
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://perenual.com/api/species-list?page=1&key=sk-Sw6j64b3059ecc0811570&"
//     );
// const response = await fetch(
//   "https://perenual.com/api/species-list?key=sk-Sw6j64b3059ecc0811570&q=monstera&q=silver"
// );
// const responseB = await fetch(
//   "https://perenual.com/api/species-care-guide-list?key=sk-Sw6j64b3059ecc0811570"
// );
// const response = await fetch(
//   "https://perenual.com/api/species-list?key=sk-Sw6j64b3059ecc0811570&&indoor=true"
// );
// const response = await fetch(
//   "https://perenual.com/api/species-care-guide-list?key=sk-Sw6j64b3059ecc0811570"
// );
// const response = await fetch(
//   "https://perenual.com/api/species/details/1?key=sk-Sw6j64b3059ecc0811570"
// );
//     const jsonData = await response.json();
//     setData(jsonData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// console.log(data);
// console.log(err);
