import React from "react";
import "./BackToTop.css";

import { HiArrowUturnUp } from "react-icons/hi2";

export default function BackToTop({ onHandleScroll }) {
  return (
    <div className="back-to-top">
      <button onClick={() => onHandleScroll()}>
        <HiArrowUturnUp />
      </button>
    </div>
  );
}
