import React from "react";
import "./Item.css";

export default function Item({ content, onFullviewCard }) {
  return (
    <div className="item" onClick={(e) => onFullviewCard(content.id)}>
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
      <div>
        <p>{content.question}</p>
      </div>
    </div>
  );
}
