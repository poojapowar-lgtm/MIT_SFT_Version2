import React, { useState ,useEffect} from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import "./shortfilms.css";

const ShortFilm = () => {
  const [category, setCategory] = useState("Documentary");

  const [year, setYear] = useState("all");

    useEffect(() => {
    console.log("Selected year:", year, typeof year);
  }, [year])

  const bgImage = "/assets/images/inner-banner/short-films-bnr.webp";
  const title = "Award-Winning Stories";
  const subtitle = "Start Your Journey With Us";

  const imagesOne = [
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
    //   youtube: " ",
    // },
  ];

  const imagesTwo = [
    // {
    //   img: "/assets/images/film_posters/indhanam.webp",
    //   youtube: " 7",
    // },
    //     {
    //   img: "/assets/images/film_posters/Nirjara.webp",
    //   youtube: " ",
    // },
    //    {
    //   img: "/assets/images/film_posters/Tow of Hearts.webp",
    //   youtube: " ",
    // },
    {
      img: "/assets/images/film_posters/Akhri Panna.webp",
      youtube: "https://www.youtube.com/watch?v=35tYurLLuRo",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Alu ka Chalu.webp",
      youtube: "https://www.youtube.com/watch?v=tGc5NDT6gJw",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Bahoorupi.webp",
      youtube: "https://www.youtube.com/watch?v=QkaVbvWd9NQ",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Borderline.webp",
      youtube: "https://www.youtube.com/watch?v=emX16PUnnDs",
      year: 2020,
    },
    {
      img: "/assets/images/film_posters/Cake.webp",
      youtube: "https://www.youtube.com/watch?v=tl-k4HgD9To",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Chakravuh.webp",
      youtube: "https://www.youtube.com/watch?v=1mmtLxlF94Y",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Chitti mitti.webp",
      youtube: "https://www.youtube.com/watch?v=9LR15nLcmaw",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Cow.webp",
      youtube: "https://www.youtube.com/watch?v=BTTQ9xqOZbk",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Daayra.webp",
      youtube: "https://www.youtube.com/watch?v=Qbhw7dlwbEE",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Dont Cry.webp",
      youtube: "https://www.youtube.com/watch?v=PNrbxxso9hE",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Dvija.webp",
      youtube: "https://www.youtube.com/watch?v=QN98OFbCm7U",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Ears Truly.webp",
      youtube: "https://www.youtube.com/watch?v=oE4oKFHq9RE",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Farigh.webp",
      youtube: "https://www.youtube.com/watch?v=XT9bZkmkpMM",
      year: 2026,
    },
    {
      img: "/assets/images/film_posters/Fool.webp",
      youtube: "https://www.youtube.com/watch?v=Grozerz6zHU",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Happy Couple.webp",
      youtube: "https://www.youtube.com/watch?v=dLRvis6p7YM",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/hauaa.webp",
      youtube: "https://www.youtube.com/watch?v=NVLXVqgw_NU",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Intagible.webp",
      youtube: "https://www.youtube.com/watch?v=5NpjGqfMZGU",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Lighter.webp",
      youtube: "https://www.youtube.com/watch?v=0oPXU5dF984",
      year: 2026,
    },
    {
      img: "/assets/images/film_posters/Minky.webp",
      youtube: "https://www.youtube.com/watch?v=HF-PgKy1FLU",
      year: 2025,
    },

    {
      img: "/assets/images/film_posters/Nirop.webp",
      youtube: "https://www.youtube.com/watch?v=ZFe8hkGselk",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/No Joke.webp",
      youtube: "https://www.youtube.com/watch?v=84_Xqd7c0yY",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Outsider.webp",
      youtube: "https://www.youtube.com/watch?v=QQrhs49NmZI",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Parikatha.webp",
      youtube: "https://www.youtube.com/watch?v=XR3sT_UmcBs",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Phobia.webp",
      youtube: "https://www.youtube.com/watch?v=_1hb87xtJv0",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Rashq .webp",
      youtube: "https://www.youtube.com/watch?v=w-ebjtwVAac",
      year: 2026,
    },
    {
      img: "/assets/images/film_posters/Rhythm of life.webp",
      youtube: " https://www.youtube.com/watch?v=UMNjLpvvzjQ",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Savitar.webp",
      youtube: "https://www.youtube.com/watch?v=PvMKsYGi1rg",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Sleeping Muse.webp",
      youtube: "https://www.youtube.com/watch?v=7MrS1AEQAWI",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Sonyachi Kombdi copy.webp",
      youtube: " https://www.youtube.com/watch?v=O2iywjKyd_Q",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Sundarkand .webp",
      youtube: " https://www.youtube.com/watch?v=EaG4ha2BP2g&t=3s",
      year: 2026,
    },
    {
      img: "/assets/images/film_posters/Veredhari.webp",
      youtube: " https://www.youtube.com/watch?v=eBm8QR8cCLE",
      year: 2025,
    },
    {
      img: "/assets/images/film_posters/Vibhajit.webp",
      youtube: "https://www.youtube.com/watch?v=A0lUlQNg0Eo&t=67s",
      year: 2026,
    },
  ];

const filteredFilms = imagesTwo.filter(
  (item) => year === "all" || item.year === Number(year)
);



  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} subtitle={subtitle} />
      <div className="shortfilm-wrapper">
        {/* Section 1 */}
        <section className="shortfilm-section">
          <div className="section-header">
            <h2 className="innerpage-title ">Award Winning Short Films</h2>

            {/* <div className="filters">
              <select
                className="button"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Documentary</option>
                <option>Fiction</option>
                <option>Animation</option>
              </select>

              <select
                className="button"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>All Years</option>
              </select>
            </div> */}
          </div>

          {/* <div className="cards-grid">
            {imagesOne.map((img, index) => (
              <div key={index} className="film-card">
                <img src={img} alt={`film-${index}`} />
              </div>
            ))}
          </div> */}
          <div className="cards-grid">
            {imagesOne.map((item, index) => (
              <a
                key={index}
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="film-card"
              >
                <img src={item.img} alt={`film-${index}`} />
              </a>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="shortfilm-section">
          <div className="section-header">
            <h2 className="innerpage-title"> Short Films</h2>

            <div className="filters">
              <select
                className="button"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Documentary</option>
                {/* <option>Fiction</option> */}
              </select>

              <select
                className="button"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>

          <div className="cards-grid">
            {filteredFilms.map((item, index) => (
              <a
                key={index}
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="film-card"
              >
                <img src={item.img} alt={`film-${index}`} />
                {/* <span className="film-year">{item.year}</span> */}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ShortFilm;
