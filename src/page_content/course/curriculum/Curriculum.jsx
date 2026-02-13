// import React from "react";
// import "./curriculum.css";

// const Curriculum = ({ title, children, imageSrc }) => {
//   return (
//     <section className="curriculum-section">

//       {title && <h2 className="innerpage-title">{title}</h2>}

//       <div className="curriculum-content">
//         <div className="curriculum-left">
//           <div className="curriculum-text">{children}</div>
//         </div>

//         <div className="curriculum-right">
//           <img src={imageSrc} alt={title || "Curriculum"} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Curriculum;

import React, { useState, useEffect } from "react";
import "./curriculum.css";

const Curriculum = ({ title, children, images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="curriculum-section">
      {title && <h2 className="innerpage-title">{title}</h2>}

      <div className="curriculum-content">
        {/* Left Content */}
        <div className="curriculum-left">
          <div className="curriculum-text">{children}</div>
        </div>

        {/* Right Slider */}
        <div className="curriculum-right slider-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title}-${index}`}
              className={`slide ${
                index === activeIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

