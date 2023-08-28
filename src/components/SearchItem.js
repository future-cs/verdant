import React from "react";
import "./SearchItem.css";

export default function SearchItem({ content, onArticle }) {
  return (
    <div className="search-item" onClick={(e) => onArticle(content.id)}>
      <div>
        <img
          className="component-img--medium"
          src={
            content.default_image
              ? content.default_image.regular_url
              : "img/9251D335-BFF2-4D65-8135-B945C749803E.png"
          }
          alt={content.id}
        ></img>
      </div>
      <div className="text-div">
        <h3>{content.common_name}</h3>
        <p>{content.scientific_name[0]}</p>
      </div>
    </div>
  );
}
