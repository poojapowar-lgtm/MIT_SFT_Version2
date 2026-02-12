import React from "react";

const USP = () => {
  const cardData = [
    {
      title: "Internationally Aligned Cinematic Pedagogy",
      description: `The curriculum at MITSFT is structured in line with globally
      accepted practices followed by leading international film schools.
      Emphasis is placed on the complete cinematic workflow development,
      pre production, production, and post production ensuring students
      learn filmmaking as a professional, end to end process rather than
      as isolated subjects.`,
    },
    {
      title: "Production-Based Learning with Industry Jury Evaluation",
      description: `Each semester culminates in practical film or performance projects that are evaluated by industry professionals serving as jury members. This approach mirrors real-world filmmaking environments and instils professional discipline, accountability, and international standards of execution.`,
    },
    {
      title: "Extensive Professional Infrastructure",
      description: `MITSFT offers over thirty units of professional cameras, editing systems, and sound recording equipment, allowing students to work on a one-to-one basis. The School also houses a dedicated shooting studio for camera workshops and one of Pune’s largest fully air-conditioned shooting floors for large-scale productions.`,
    },
    {
      title: "Advanced Post-Production & Sound Facilities",
      description: `Dedicated audio workstations are available for training in sound design and audio post-production for films, ensuring students achieve technical proficiency in line with international cinematic standards.`,
    },
    {
      title:
        "Faculty with Prestigious Film School Training & Industry Experience",
      description: `The faculty comprises alumni of premier institutions such as the Film & Television Institute of India (FTII) and Satyajit Ray Film & Television Institute (SRFTI), each bringing a minimum of 7–8 years of professional industry experience to the classroom.`,
    },
    {
      title: "Strong Industry Engagement & Mumbai Film Industry Proximity",
      description: `Proximity to Mumbai’s film industry enables continuous interaction with working professionals. Students benefit from regular workshops, masterclasses, and mentoring sessions conducted by National Award–winning filmmakers and technicians, strengthening professional networking and industry readiness.`,
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
              <p className="innerpage-hg">{card.title}</p>
              <p className="common-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default USP;
