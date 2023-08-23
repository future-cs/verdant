import React from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

export default function ItemFullviewCard({ content }) {
  return (
    <div className="item-fullview">
      <div className="item-fullview-img">
        <img
          className="component-img--medium"
          src={
            !content.default_image
              ? "img/9251D335-BFF2-4D65-8135-B945C749803E.png"
              : content.default_image.regular_url
          }
          alt={content.id}
        ></img>
      </div>
      <div className="item-fullview-content">
        <HiHeart />
        <h3>{content.question}</h3>
        <p>{content.answer}</p>
        <div className="item-fullview-content-tags">
          {content.tags.map((tag) => (
            <button className="item-fullview-content-tag">{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
