// import React from "react";
// import "./learning.css";

// const LearningData = [
//   {
//     id: 1,
//     title: "Alumni's Films & Recorded Footages for Practice",
//   },
//   {
//     id: 2,
//     title: "Different genres film Library",
//   },
//   {
//     id: 3,
//     title: "Online and e-Resource",
//   },
// ];

// const Learning = () => {
//   return (
//     <div>
//       <h2 className="innerpage-title">Learning Resorces</h2>
//       <div className="learning-container">
//         <div className="learning-grid ">
//           {LearningData.map((learning) => (
//             <div className="common-card" key={learning.id}>
//               <h4 className="common-title">{learning.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Learning;

import React from "react";
import "./learning.css";

const Learning = () => {
  const cardData = [
    {
      title: "Alumni Films & Recorded Footages for Student Practice",
      description: `Students get exclusive access to a rich archive of films created by our alumni along with recorded practical exercises, workshops, and classroom sessions. This resource allows learners to study real student-to-industry journeys, analyse filmmaking techniques, and practice editing, direction, and storytelling using authentic material.`,
    },
    {
      title: "Different Genres Films Library",
      description: `Our curated film library spans multiple genres—fiction, documentary, experimental, animation, short films, and feature films from India and across the world. This helps students understand narrative structures, visual styles, genre conventions, and evolving cinematic languages, encouraging creative exploration and informed filmmaking.`,
    },
    {
      title: "Online and e-Resources",
      description: `Students have access to a wide range of digital resources including research papers, scripts, reference videos, filmmaking journals, and learning modules. These e-resources support continuous learning beyond classrooms, enabling students to research, revise, and stay updated with global filmmaking trends anytime, anywhere.`,
    },
    {
      title: "Centralized Library with Books and Periodicals",
      description: `The centralized library houses an extensive collection of books on filmmaking, direction, cinematography, editing, sound, acting, screenwriting, and media studies, along with national and international periodicals. It serves as a quiet, focused space for research, reading, and academic as well as creative development.`,
    },
  ];

  const cardData2 = [
    {
      title: "Silent Era",
      link: "https://drive.google.com/drive/folders/10Xfk04U8LRrhnuj_BWZKMHTHwMiUE5as?usp=sharing",
    },
    {
      title: "Advent of Talkies & Color",
      link: " https://drive.google.com/drive/folders/1d2p_B41oeiOSSsie-Gei8bqgkMZCzvaS?usp=sharing",
    },
    {
      title: "Golden Era",
      link: "https://drive.google.com/drive/folders/1Enaq37AK0iC8X-A9jHcKlKIgtzYE5Vgm?usp=sharing",
    },
    {
      title: "Masala Parallel Cinema",
      link: "https://drive.google.com/drive/folders/112pjmylUDb6ddfKUmr2zg0lnAhnw0pJl?usp=sharing",
    },
    {
      title: "Contemporary Cinema",
      link: "https://drive.google.com/drive/folders/1Q9G88ClzV1HCvW3cDFuhhs9ZwJKz7KUf?usp=sharing",
    },
    {
      title: "History of Cinema ",
      link: "https://drive.google.com/drive/folders/19X8o9uFDNYOVv_2caST483k1taJjs7mv?usp=sharing",
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">Industry-Focused Education</h2>

      <section className="vision-section">
         <div className="vision-cards vs-top">
          {cardData2.map((card, index) => (
            <div
              className="common-card ld-card"
              key={index}
            >
              <p className="vs-title">{card.title}</p>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-btn"
              >
                View Collection
              </a>
            </div>
          ))}
        </div>
        
        <div className="vision-cards vs-bottom">
          {cardData.map((card, index) => (
            <div
              className="common-card"
              style={{ maxWidth: "260px"}}
              key={index}
            >
              <p className="innerpage-hg card-hg" >{card.title}</p>
              <p className="common-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

       
      </section>
    </div>
  );
};

export default Learning;
