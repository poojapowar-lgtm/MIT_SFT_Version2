import React from "react";
import "./faculty.css";

const facultyData = [
  {
    id: 1,
    name: "Prof. Manish Joshi",
    designation: "Dy. Director",
    department:"",
    photo: "/assets/images/faculty/Prof. Manish Joshi .webp",
  },
  {
    id: 2,
    name: "Prof. Gyanesh Kelkar",
    designation: "Associate Professor",
     department:" Sound Recording & Designing.",
    photo: "/assets/images/faculty/Prof. Gyanesh Kelkar Suit image New.webp",
  },
  {
    id: 3,
    name: "Prof. Krishnendu Sarkar",
    designation: "Associate Professor",
     department:"Editing",
    photo: "/assets/images/faculty/Prof. Krishnendu Sarkar Suit Image New.webp",
  },
  {
    id: 4,
    name: "Prof. Santosh Swarnakar",
    designation: "Associate Professor",
     department:"Cinematography",
    photo: "/assets/images/faculty/Prof. Santosh Swarnakar Image New.webp",
  },
  {
    id: 6,
    name: "Prof. Amarpal Fauzdar",
    designation: "Assistant Professor",
     department:"Screenplay Writing",
    photo: "/assets/images/faculty/Prof. Amarpal Fauzdar Final New.webp",
  },
  {
    id: 7,
    name: "Prof. Prasad Thorat",
    designation: "Assistant Professor",
     department:" VFX & Motion Graphics",
    photo: "/assets/images/faculty/Prof. Prasad Thorat Suit Image New.webp",
  },
  {
    id: 8,
    name: "Prof. Sajeeb Majumder",
    designation: "Assistant Professor ",
     department:"Art Direction & Production Design",
    photo: "/assets/images/faculty/Prof. Sajeeb Majumder.webp",
  },
];

const Faculty = () => {
  return (
    <div>
      <h2 className="innerpage-title">Message From Dean</h2>
      <div>
        <div className="leadership-content">
          {/* Left Content */}
          <div className="leadership-text">
            <p> Dear Parents and Students,</p>
            <p>
              On behalf of all our faculty & staff, I welcome you all to the
              School of Film & Theatre or as we fondly refer to it as SFT. As
              dean of SFT, I am very proud of the rich tradition that we have
              adopted to impart experiential learning of Film Education.
              Endorsed under the aegis MIT ADT University, our program prepares
              students to become film makers with the ethical depth and
              intellectual intensity essential to meet the challenges of a time
              of critical transition in society.
            </p>

            <p>
              Generating Ideas is not a problem. But the lack of know how as to
              how to give them shape, is what prevents us from reaching our
              goal. It’s one’s attachment to the baggage that we carry, that
              prevents us from giving fruition to our ideas. Here’s where SFT
              comes into picture. 
            </p>
          </div>

          {/* Right Content */}
          <div className="leadership-profile">
            <img
              src="/assets/images/faculty/Dr-Mukesh-Sharma.webp"
              alt="Leader"
              className="leader-image"
              style={{ width: "60%" }}
            />

            <div className="leader-info">
              <h4 className="ld-name">Dr. Mukesh Sharma</h4>
              <p className="span-text">( Dean of SFT, MIT - ADT University )</p>
            </div>
          </div>
        </div>
        <p>
          Our carefully constructed curriculum uses a combination of in
          classroom teachings and real world film making simulations, along with
          assurance of learning pushes the students to think outside the box.
          Change starts with you! Giving yourself permission to push outside
          expectations, unleashing your curiosity to discover what’s next and
          imagining a future other can’t yet see. I would like to cordially
          invite all of you who are interested in expanding your knowledge and
          enriching your careers to explore our school further either online or
          through a visit to our campus.
        </p>
      </div>

      <h2 className="innerpage-title">Our Faculty</h2>
      <div className="faculty-container">
        <div
          className={`faculty-grid ${
            facultyData.length % 4 !== 0 ? "center-last-row" : ""
          }`}
        >
          {facultyData.map((faculty) => (
            <div className="common-card faculty-card" key={faculty.id}>
              <div className="faculty-img-wrapper">
                <img src={faculty.photo} alt={faculty.name} />
              </div>

              <h5 className="common-title">{faculty.name}</h5>
              <p className="common-card-desc" style={{margin:"0px", color:"#003153"}}>{faculty.designation}</p>
                    <p className="common-card-desc" style={{margin:"0px"}}>{faculty.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
