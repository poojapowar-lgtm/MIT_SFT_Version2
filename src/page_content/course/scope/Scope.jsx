import React from "react";
import { useNavigate } from "react-router-dom";
import "./scope.css";

const Scope = ({ title, children, imageSrc, ctaPath }) => {
  const navigate = useNavigate();

  return (
    <section className="scope-section">
      {title && <h2 className="innerpage-title">{title}</h2>}
      <div className="scope-content">
        {/* Left Content */}
        <div className="scope-left">
          <img className="scope-img" src={imageSrc} alt={title || "Scope"} />
        </div>

        {/* Right Image */}
        <div className="scope-right">
          <div className="scope-text">{children}</div>
        </div>
      </div>

      {/* apply btn */}
      <div className="scope-cta">
        <h3 className="btn-heading ">
          Every Great Film Begins with a First Frame, Start Yours Here !
        </h3>
        <button className="button" onClick={() => navigate(ctaPath)}>
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Scope;
