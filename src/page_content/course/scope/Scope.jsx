// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./scope.css";

// const Scope = ({ title, children, imageSrc, ctaPath }) => {
//   const navigate = useNavigate();

//   return (
//     <section className="scope-section">
//       {title && <h2 className="innerpage-title">{title}</h2>}
//       <div className="scope-content">

//         <div className="scope-left">
//           <img className="scope-img" src={imageSrc} alt={title || "Scope"} />
//         </div>

//         <div className="scope-right">
//           <div className="scope-text">{children}</div>
//         </div>
//       </div>

//       <div className="scope-cta">
//         <h3 className="btn-heading ">
//           Every Great Film Begins with a First Frame, Start Yours Here !
//         </h3>
//         <button className="button" onClick={() => navigate(ctaPath)}>
//           Apply Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Scope;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./scope.css";

const Scope = ({ title, children, images = [], ctaPath }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="scope-section">
      {title && <h2 className="innerpage-title">{title}</h2>}

      <div className="scope-content">
        {/* Left Slider */}
        <div className="scope-left slider-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title}-${index}`}
              className={`slide ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Right Content */}
        <div className="scope-right">
          <div className="scope-text">{children}</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="scope-cta">
        <h3 className="btn-heading">
          Every Great Film Begins with a First Frame, Start Yours Here !
        </h3>
        <button
          onClick={() =>
            window.open(
              "https://www.digialm.com/EForms/configuredHtml/176/61093/Registration.html",
              "_blank",
            )
          }
          className="button"
          id="footer-btn"
        >
        Apply Now
        </button>
      </div>
    </section>
  );
};

export default Scope;
