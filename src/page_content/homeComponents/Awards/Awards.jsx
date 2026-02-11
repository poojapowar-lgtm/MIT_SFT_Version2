import React from "react";
import "./awards.css";
import { useNavigate } from "react-router-dom";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Awards = () => {
  const navigate = useNavigate();

  const awardsData = [
    {
      film: "INDHANAM ",
      award: "Audience Choice Award Mokkho International Film Festival 2024",
      student: "Surya Vakkalanka",
    },
    {
      film: "SIYA",
      award: "Best VFX Award Asian Talent International Film Festival 2024",
      student: "Hetansa Rajkotiya",
    },
    {
      film: "GUMNAAM ",
      award:
        "1st Gujrati Short Film Ahmedabad International Film Festival 2024",
      student: "Arpit Modh",
    },
    {
      film: "INDHANAM ",
      award: "Winner of Top 100 Short Film DPIFF-2024",
      student: "Surya Vakkalanka",
    },
    {
      film: "KOYTA ",
      award: "Theme based Educational eContent category NCERT 2023-24",
      student: "Shaksham Vyas",
    },
    {
      film: "AAMHI DOGHE ",
      award: "Official Screening Short film of the Year India 2024",
      student: "Neel Phadnis",
    },
    {
      film: "NIRAST ",
      award: "Official Screening Golden/Silver Comma Award 2022-23",
      student: "Purva Dutiya",
    },
    {
      film: "ASAMTOL  ",
      award: "Best Director One Leaf International Film Festival 2023",
      student: "Archit Kirkinde",
    },
    {
      film: "GHUNGHAT ",
      award: "Best Hindi Film IFH National Level Short Film Awards 2023",
      student: "Neel Phadnis",
    },
  ];

  // const images = [
  //   "/assets/images/film_posters/award-films/Siya.webp",
  //   "/assets/images/film_posters/award-films/Asamtol.webp",
  //   "/assets/images/film_posters/award-films/Divine Caponies.webp",
  //   "/assets/images/film_posters/award-films/Gumnaam.webp",
  //   "/assets/images/film_posters/award-films/Ghungath.webp",
  //   "/assets/images/film_posters/award-films/Pariah.webp",
  //   "/assets/images/film_posters/award-films/Koyta.webp",
  //   "/assets/images/film_posters/award-films/Sunita.webp",
  //   "/assets/images/film_posters/award-films/Shalechiya dwari .webp",
  //   "/assets/images/film_posters/award-films/Amhi doghe.webp",
  // ];

  const images = [
    {
      img: "/assets/images/film_posters/award-films/Siya.webp",
      youtube: "https://www.youtube.com/watch?v=PRmy320oYx0",
    },
    {
      img: "/assets/images/film_posters/award-films/Asamtol.webp",
      youtube: "https://www.youtube.com/watch?v=dZL-ghqdIdA",
    },
    {
      img: "/assets/images/film_posters/award-films/Divine Caponies.webp",
      youtube: "https://www.youtube.com/watch?v=WnPss4BIf1s",
    },
    {
      img: "/assets/images/film_posters/award-films/Gumnaam.webp",
      youtube: "https://www.youtube.com/watch?v=vZhUCAhudP4",
    },
    {
      img: "/assets/images/film_posters/award-films/Ghungath.webp",
      youtube: "https://www.youtube.com/watch?v=BfhNb9iJ7bA",
    },
    {
      img: "/assets/images/film_posters/award-films/Pariah.webp",
      youtube: "https://www.youtube.com/watch?v=YMSB0N0OgwY",
    },
    {
      img: "/assets/images/film_posters/award-films/Koyta.webp",
      youtube: "https://www.youtube.com/watch?v=oOroZ2Hlm8Q",
    },
    {
      img: "/assets/images/film_posters/award-films/Sunita.webp",
      youtube: "https://www.youtube.com/watch?v=UKrIvC4L0T0",
    },
    {
      img: "/assets/images/film_posters/award-films/Shalechiya dwari .webp",
      youtube: "https://www.youtube.com/watch?v=rSNeOwFETNk",
    },
    // {
    //   img: "/assets/images/film_posters/award-films/Amhi doghe.webp",
    //   youtube: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    // },
  ];

  return (
    <div className="awards-section">
      <DividerWithTitle title="Award-Winning Films by Our Students" />

      {/* First Row (5 cards) */}
      <div className="award-top">
        <div className="awards-row five">
          {awardsData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="award-card"
              style={{
                backgroundImage: "url(/assets/images/home/award_card_s.svg",
              }}
            >
              <div className="award-content">
                <p className="film-name">{item.film}</p>
                <p className="award-name">{item.award}</p>
                <p className="student-name">{item.student}</p>
              </div>
            </div>
          ))}
        </div>
           {/* Second Row (4 cards) */}
      <div className="awards-row four">
        {awardsData.slice(4, 7).map((item, index) => (
          <div
            key={index}
            className="award-card"
            style={{
              backgroundImage: "url(/assets/images/home/award_card_s.svg",
            }}
          >
            <div className="award-content">
              <p className="film-name">{item.film}</p>
              <p className="award-name">{item.award}</p>
              <p className="student-name">{item.student}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

   

      {/* Button */}
      <button className="button" onClick={() => navigate("/award-stories")}>
        View All Awards
      </button>
      <div className="carousel-wrapper">
        {/* <div className="carousel-track"> */}
        {/* Duplicate array for seamless loop */}
        {/* {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`carousel-${index}`} />
          ))}
        </div> */}
        <div className="carousel-track">
          {[...images, ...images].map((item, index) => (
            <a
              key={index}
              href={item.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={index} src={item.img} alt={`carousel-${index}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
