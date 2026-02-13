import React from "react";
import "./recognitions.css";

// Sample data array
const recognitionsData = [
  {
    id: 1,
    name: "Mr. Vishesh Iyer",
    image: "/assets/images/home/nt2.webp",
    points: [

      "B.Sc. in Filmmaking - Batch 2016-17, Specialization – Direction & Screenplay Writing",
      "68 th National Film Award - Best Debut Director Non Feature Film Category for His Graduation Film “Pariah”.",
    ],
  },
  {
    id: 2,
    name: "Mr. Shaksham Vyas",
    image: "/assets/images/bts/Shaksham_Vyas.webp",
    points: [
      "B.Sc. in Filmmaking - Batch 2020-21, Specialization – Direction & Screenplay Writing",
      "ALL INDIA CHILDREN EDUCATIONAL eCONTENT COMPETITION (AICEeCC) 2023-24, Organised by NCERT – Best Film.",
    ],
  },
  {
    id: 3,
    name: "Mr. Rishabh Nahar",
    image: "/assets/images/bts/Rishabh-Nahar.webp",
    points: [
   "M.Sc in Filmmaking - Batch 2021-22, Specialization - Cinematography",
   "ALL INDIA CHILDREN EDUCATION eCONTENT COMPETITION (AICEeCC) 2023-24, Organised by NCERT- Best Editor"
    ],
  },
];

const Recognitions = () => {
  return (
    <div>
      <h2 className="innerpage-title"> Awards & Recognitions</h2>
      <div className="recognitions-container">
        <div className="recognitions-grid">
          {recognitionsData.map((rec) => (
            <div className="common-card rg-card" key={rec.id}>
              {/* Top Image */}
              <div
                className="rec-image"
                style={{ backgroundImage: `url(${rec.image})` }}
              ></div>

              {/* Name and Button */}
              <div className="rec-header">
                <h3 className="innerpage-subtitle">{rec.name}</h3>
                <button className="button" id="rec-btn">Watch Here</button>
              </div>

              {/* UL/LI List */}
              <ul className="page-list">
                {rec.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognitions;
