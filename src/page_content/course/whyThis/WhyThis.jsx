import React from "react";
import "./whythis.css";

const WhyThis = ({ title, whyThisData = [] }) => {
  return (
    <div className="whythis-container">
      <h2 className="innerpage-title">{title}</h2>

      {/* <div className="whythis-grid">
          {whyThisData.map((item) => (
            <div className="whythis-card " key={item.id}>
              <h4 className="whythis-title">{item.title}</h4>
            </div>
          ))}
        </div> */}
      <div className="whythis-grid">
        {whyThisData.map((item, index) => (
          <div
            className="whythis-card step-animate"
            key={item.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h4 className="whythis-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyThis;
