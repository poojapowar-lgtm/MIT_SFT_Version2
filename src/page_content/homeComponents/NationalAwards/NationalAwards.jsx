import React, { useEffect, useState } from "react";
import "./national_awards.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";
import { CgPlayButton } from "react-icons/cg";

const images = [
  "/assets/images/home/national_award.webp",
  "/assets/images/home/national_award(1).webp",
];

const NationalAwards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <DividerWithTitle title="68th National Film Award Winner" />
      <section className="national-awards">
        <div className="awards-card gradient-border">
          <div className="awards-content">
            {/* Left list */}
            <div className="awards-left">
              <ul className="page-list awards-list">
                {/* <h4 className="subtitle">National Awards</h4> */}
                <li>Film: Pariah (Marathi and Hindi)</li>
                <li>Section: Non-Feature Film</li>
                <li>
                  Award Winner: Producer (MIT School Of Film & Television, Pune)
                </li>
                <li>Awards: Best Debut Non-Feature Film Of Director</li>
              </ul>

              <div className="watch-btn-wrapper">
                <a
                  href="https://www.youtube.com/watch?v=YMSB0N0OgwY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="watch-button">
                    Watch Movie Now
                    <CgPlayButton className="icon" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right sliding images */}
            <div className="image-slider">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="National Award"
                  className={`slide ${index === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalAwards;
