// import React from "react";

// const Placements = () => {
//   return (
//     <div>
//       <h2 className="innerpage-title">Placements</h2>

//       <p>
//         School of Film & Television students short films are getting nominated
//         at various international film festivals around the world and are being
//         invited to assist in films, by new and upcoming film makers around the
//         country.
//       </p>
//       <p>
//         SFT Students begin their search for Placements within the campus as
//         eminent cinema industry practitioners visit the campus as Visiting
//         Faculty. They recommend SFT students for work placements on various
//         projects.
//       </p>
//       <p>
//         SFT Students also get an opportunity, annually, to interact with media
//         industry practitioners at the Pune International Film Festival, which
//         they attend as student delegates.
//       </p>
//     </div>
//   );
// };

// export default Placements;

import React from "react";

const Placements = () => {
  const cardData = [
    {
      title: "Placements & Industry Exposure",
      description: `At the School of Film & Television (SFT), placements are not limited to a final-year activity—they begin as an integral part of the academic journey. Students are continuously exposed to real-world industry environments, enabling them to build strong professional networks and gain practical experience even before graduation.`,
    },
    {
      title: "On-Campus Industry Interaction",
      description: `Eminent cinema and media industry practitioners regularly visit the campus as Visiting Faculty, mentors, and jury members. Through workshops, masterclasses, project reviews, and interactions, students receive first-hand industry insights. Many of these professionals recommend SFT students for work placements, internships, and assistantship roles on films, OTT content, television, advertising, and digital media projects.`,
    },
    {
      title: "Student Films & Festival Recognition",
      description: `SFT students actively create short films and academic projects that are nominated and showcased at national and international film festivals. Such exposure not only brings recognition to their work but also opens doors to collaborations. Students are often invited to assist new and upcoming filmmakers across the country, gaining valuable on-set experience and credits early in their careers.`,
    },
    {
      title: "Industry Platforms & Film Festivals",
      description: `Every year, SFT students attend the Pune International Film Festival (PIFF) as student delegates. This platform allows them to interact with filmmakers, producers, critics, distributors, and media professionals, helping them understand industry dynamics while expanding their professional circle.`,
    },
    {
      title: "Alumni Network Support",
      description: `SFT’s growing alumni network plays a significant role in mentoring and guiding current students. Alumni working across film, television, OTT platforms, advertising, and digital media frequently recommend students for projects, internships, and entry-level positions, further strengthening industry access.`,
    },
    {
      title: "A Career-Ready Ecosystem",
      description: `With continuous industry interaction, festival exposure, hands-on project experience, and a strong alumni base, SFT provides students with a career-ready ecosystem. Graduates leave not only with technical and creative skills but also with the industry connections and confidence required to build sustainable careers in the media and entertainment industry.`,
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">Industry-Focused Education</h2>

      <section className="vision-section">
        <div className="vision-cards">
          {cardData.map((card, index) => (
            <div
              className="common-card"
              style={{ maxWidth: "350px" }}
              key={index}
            >
              <p className="innerpage-hg card-hg">{card.title}</p>
              <p className="common-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="vision-cards">
          <div className="common-card" style={{textAlign:"start"}}>
            <p className="innerpage-hg card-hg" style={{textAlign:"center"}}>
              Academic Networking & Project Collaborations
            </p>
            <p>
              During their academic tenure, students work extensively on
              individual and group projects, which become crucial networking
              opportunities. Through these projects, students establish
              professional relationships not only with filmmakers and senior
              professionals but also with:
            </p>
            <ul className="page-list">
              <li>Cinematographers</li>
              <li>Editors</li>
              <li>Sound designers</li>
              <li>Production designers</li>
              <li>Line producers</li>
              <li>Technicians and crew members</li>
              <li>
                Equipment rental houses, studios, and post-production vendors
              </li>
            </ul>
            <p>
              These connections often lead to freelance assignments, project
              collaborations, and long-term professional associations after
              graduation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
