import React from "react";
import "./structure.css";

const Structure = () => {
  return (
    <div>
      <h2 className="innerpage-title">Academic Structure</h2>
      <div className="Structure-grid ">
        {/* card 1 */}
        <div className="common-card st-card">
          <div className="st-top">
            <h4 className="innerpage-subtitle">M.Sc. in Filmmaking</h4>
            <span>Program Duration – 2 Year.</span>
          </div>

          <div className="st-bottom">
            <ul className="page-list">
              <span>Semester Wise Progression</span>
              <li>1st SEM – Foundation.</li>
              <li>2nd Sem to 4th Sem – Choices of Specialization.</li>
              <li>Credit Based – Yes.</li>
              <li>Evaluation Pattern – Continuous Assessment + Jury.</li>
            </ul>
            <img
              src="/assets/images/bts/Msc.webp"
              alt="courses"
              className="course-img"
            />
          </div>

          <ul className="page-list">
            The M.Sc. in Filmmaking program spans four semesters (two years),
            emphasizing advanced creative, technical, and managerial
            competencies.
            <li>
              The first Sem strengthens conceptual understanding and
              pre-production planning, while from the second semester focus in
              on specialized film production and individual research driven
              projects.
            </li>
            <li>
              Students undertake practical assignments that mirror real-world
              industry workflows, culminating in a final master’s film project
              evaluated by a jury of renowned film professionals.
            </li>
            <li>
              The structure integrates lectures, masterclasses, workshops, and
              internships, fostering a balance of theory, practice, and
              innovation that prepares students for leadership roles in film and
              media production.
            </li>
          </ul>
        </div>

        {/* card 2*/}
        <div className="common-card st-card">
          <div className="st-top">
            <h4 className="innerpage-subtitle">B.Sc. in Filmmaking</h4>
            <span>
              Program Duration – 3 Year. <br />
              NEP Implementation – Yes (Since A.Y.2025-2026)
            </span>
          </div>

          <div className="st-bottom">
            <ul className="page-list">
              <span>Semester Wise Progression</span>
              <li>1st Year – Foundation Year - 2 Semesters</li>
              <li>
                2nd Year & 3rd Year– Two Choices of Specialization<br/> – Major &
                Minor along with other key components.
              </li>
              <li>Credit Based – Yes.</li>
              <li>Evaluation Pattern – Continuous Assessment + Jury.</li>
            </ul>
            <img
              src="/assets/images/bts/msc4.webp"
              alt="courses"
              className="course-img"
            />
          </div>

          <ul className="page-list">
            The B.Sc. in Filmmaking program is structured across six semesters
            (three years), a progressive learning path from fundamentals to
            advanced specialization
            <li>
              The initial semesters focus on the basics of visual storytelling,
              film language, and technical foundations, while the middle
              semesters emphasize departmental specialization in Direction &
              Screenplay Writing, Cinematography, Editing and Sound Recording &
              Designing.
            </li>
            <li>
              The final stage integrates major film projects, internships, and
              professional portfolio development. Evaluation is conducted
              through continuous assessments, film projects, and jury-based
              reviews by industry experts, ensuring a strong link between
              academic learning and professional filmmaking standards.
            </li>
          </ul>
        </div>

        {/* card 3 */}
        <div className="common-card st-card">
          <div className="st-top">
            <h4 className="innerpage-subtitle">B.A. in Screen Acting</h4>
            <span>Program Duration – 3 Year.</span>
          </div>

          <div className="st-bottom">
            <ul className="page-list">
              <span>Semester Wise Progression</span>
              <li>1st Year – Foundation – Understand Filmmaking Core.</li>
              <li>2nd Year onwards – Screen Acting.</li>
              <li>Credit Based – Yes.</li>
              <li>Evaluation Pattern – Continuous Assessment + Jury.</li>
            </ul>
            <img
              src="/assets/images/bts/actor5.webp"
              alt="courses"
              className="course-img"
            />
          </div>

          <ul className="page-list">
            The B.A. in Screen Acting program is delivered over six semesters
            (three years), following a structured progression from foundational
            learning to advanced screen performance.
            <li>
              In the first year, students are introduced to the fundamentals of
              filmmaking, similar to the B.Sc. in Filmmaking program helping
              them understand each department involved in film production.
            </li>
            <li>
              This holistic exposure enables them to grasp the collaborative
              nature of filmmaking and prepares them to learn screen acting
              techniques more effectively in the second and third years.
              Subsequent semesters focus on acting for camera, character
              development, movement, voice, and performance projects.
            </li>
            <li>
              Each semester culminates in performance- based evaluations and
              jury assessments by industry professionals, ensuring students are
              industry-ready and confident performers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Structure;
