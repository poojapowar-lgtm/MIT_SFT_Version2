import React from "react";
import "./achievements.css";

const Achievements = () => {
  const images = [
    "/assets/images/home/nt.webp",
    "/assets/images/home/nt2.webp",
  ];

  const imagesTwo = [
    "/assets/images/film_posters/award-films/Pariah.webp",
    "/assets/images/film_posters/award-films/Divine Caponies.webp",
    "/assets/images/film_posters/award-films/Koyta.webp",
  ];
  return (
    <div className=".page-content ">
       <div className="achievements">
      <h2 className="innerpage-title">Achievements</h2>
        {/* First set of images */}
        <div className="ach-images-grid">
          {images.map((img, index) => (
            <img
              key={`img1-${index}`}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="ach-image"
              loading="lazy"
            />
          ))}
        </div>
      <div className="ach-content">
        <p>
          MIT School of Film and Television is steadily establishing its
          presence on national and international platforms.
          <span>
            Our student film PARIAH won the National Award (2022), while DIVINE
            CANOPY and KOYTA received the NCERT Best Film Award (2023–24).
          </span>
          These achievements reflect our commitment to setting new benchmarks in
          film and television education.
        </p>
        <p>
          Our students have also earned accolades at prestigious festivals
          including the Jaipur International Film Festival, Pune International
          Film Festival, One Leaf International Film Festival, Student World
          International Film Festival, and several others, showcasing the
          institute’s growing creative impact.
        </p>
      </div>
      <section className="ach-images">
      

        {/* Second set of images */}
        <div className="ach-images-grid">
          {imagesTwo.map((img, index) => (
            <img
              key={`img2-${index}`}
              src={img}
              alt={`Gallery ${images.length + index + 1}`}
              className="ach-image posters"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
    </div>
   
  );
};

export default Achievements;
