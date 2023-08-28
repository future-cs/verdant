import React, { useEffect, useState } from "react";
import "./Article.css";
import {
  GiMonsteraLeaf,
  GiOakLeaf,
  GiZigzagLeaf,
  GiFallingLeaf,
  GiLindenLeaf,
} from "react-icons/gi";

export default function Article({ articleURL }) {
  console.log(articleURL);
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);
  const [articleData, setArticleData] = useState("");

  useEffect(() => {
    fetchURL(articleURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleURL]);

  const fetchURL = async (curURL) => {
    try {
      // Fetch the Data
      const response = await fetch(curURL);
      const jsonData = await response.json();

      setArticleData(jsonData);
      console.log(jsonData);

      // Allow Conditonal Rendering
      setIsLoadingArticle(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  if (isLoadingArticle) return <h1>LOADING</h1>;

  if (!isLoadingArticle)
    return (
      <div className="section-article">
        <div className="article">
          <div className="article-header">
            <div>
              <img
                className="article-header-img"
                src={
                  articleData.default_image
                    ? articleData.default_image.regular_url
                    : "img/9251D335-BFF2-4D65-8135-B945C749803E.png"
                }
                alt={articleData.id}
              ></img>
            </div>
            {/* Article Header */}
            <div className="article-header-content">
              <h2>{articleData.common_name}</h2>
              <p className="article-subhead">
                {articleData.scientific_name ? (
                  articleData.scientific_name[0]
                ) : (
                  <></>
                )}
              </p>
              <ul>
                <li>
                  <span className="article-header-item">Family:</span>
                  <span>{articleData.family ? articleData.family : <></>}</span>
                </li>
                <li>
                  <span className="article-header-item">Origin:</span>
                  <span>{articleData.origin[0]}</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Article Body */}
          <div className="article-body">
            <div className="article-description">
              <GiMonsteraLeaf className="article-description-icon" />
              <h4>Description:</h4>
              <p>{articleData.description}</p>
            </div>
            <div className="article-facts">
              <GiOakLeaf className="article-description-icon" />
              <h4>Cultivation Information:</h4>
              <ul className="article-facts-ul">
                <li className="article-facts-li">
                  <span className="article-header-item">Growth Rate:</span>
                  <span>{articleData.growth_rate}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">Care Level:</span>
                  <span>{articleData.care_level}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">Maintenance:</span>
                  <span>{articleData.maintenance}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">watering:</span>
                  <span>{articleData.watering}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">Cycle:</span>
                  <span>{articleData.cycle}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">Dimension:</span>
                  <span>{articleData.dimension}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">Type:</span>
                  <span>{articleData.type}</span>
                </li>
              </ul>
            </div>
            <div className="article-facts">
              <GiLindenLeaf className="article-description-icon" />
              <h4>Interesting Facts:</h4>
              <ul className="article-facts-ul">
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is this plant medicinal?
                  </span>
                  <span>{articleData.medicinal ? "Yes" : "No"}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is this plant invasive?
                  </span>
                  <span>{articleData.invasive ? "Yes" : "No"}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is ths plant leaf edible?
                  </span>
                  <span>{articleData.edible_leaf ? "Yes" : "No"}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Does this plant have flower?
                  </span>
                  <span>{articleData.flowers ? "Yes" : "No"}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is ths plant fruit edible?
                  </span>
                  <span>{articleData.edible_fruit ? "Yes" : "No"}</span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is ths plant poisonnous for humans?
                  </span>
                  <span>
                    {articleData.poisonous_to_humans === 1 ? "Yes" : "No"}
                  </span>
                </li>
                <li className="article-facts-li">
                  <span className="article-header-item">
                    Is ths plant poisonnous for pets?
                  </span>
                  <span>
                    {articleData.poisonous_to_pets === 1 ? "Yes" : "No"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="article-anatomy">
              <GiFallingLeaf className="article-description-icon" />
              <h4>Plant Anatomy:</h4>
              <ul className="article-anatomy-ul">
                {articleData.plant_anatomy.map((item) => (
                  <li>
                    <span className="article-header-item">{item.part}:</span>
                    <ul className="article-anatomy-ul-secondary">
                      {item.color.map((color) => (
                        <li>
                          <span>{color}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="article-facts">
              <GiZigzagLeaf className="article-description-icon" />
              <h4>Propagation by:</h4>
              <ul className="article-facts-ul">
                {articleData.propagation.map((item) => (
                  <li className="article-facts-li">
                    <span className="article-header-item">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
