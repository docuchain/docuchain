import React from "react";
import "../style/circleAnimation.scss";

export default function CircleAnimation() {
  return (
    <div className="container">
      <div className="card">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
