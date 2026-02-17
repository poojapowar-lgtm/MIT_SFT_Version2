import React, { useEffect, useState } from "react";
import "./vishwaraj-studio.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const images = [
  "/assets/images/home/vj1.webp",
  "/assets/images/home/vj2.webp",
  "/assets/images/home/vj3.webp",
  "/assets/images/home/vj4.webp",
  "/assets/images/home/vj5.webp",
];

const VishwarajStudio = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vj-section">
      <DividerWithTitle title="Where Student Sets Become Real Stories" />
      <h3 className="subtitle">
        Vishwaraj Studio, India's Largest Shooting Studio For A Film School
      </h3>
      <section
        className="vishwaraj-wrapper"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      >
        {/* Content */}
        <div className="studio-content">
          <div className="studio-section">
            <div>
              <p className="studio-text">
                A fully air-conditioned shooting floor enables large scale set
                construction, controlled lighting, and immersive production
                training. The campus houses state of the art production and post
                production facilities, including high end digital cameras,
                professional editing suites, and one of the largest air
                conditioned shooting floors in Pune ,
                providing students with immersive, hands on experience using
                industry-grade equipment.
              </p>
            </div>

            {/* <button className="button" id="studio-btn">
              More Facilites
            </button> */}
          </div>
        </div>
        <p className="size"> Size:(110 x 90 x 80 sq. ft.)</p>
      </section>
    </div>
  );
};

export default VishwarajStudio;
