import React from "react";
import { useState } from "react";
import "./mentor.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

// const Mentor = () => {
//   const images = [
//     "/assets/images/home/mentor/mentor1.webp",
//     "/assets/images/home/mentor/mentor8.webp",
//     "/assets/images/home/mentor/mentor7.webp",
//     "/assets/images/home/mentor/mentor6.webp",
//     "/assets/images/home/mentor/mentor3.webp",
//     "/assets/images/home/mentor/mentor4.webp",
//     "/assets/images/home/mentor/mentor2.webp",
//     "/assets/images/home/mentor/mentor.webp",
//   ];
//   return (
//     <section className="mentor-section">
//       <div className="mentor-content">
//         {/* LEFT SIDE */}
//         <div className="mentor-left">
//           {/* Title */}
//           <DividerWithTitle title="Our Mentor" />

//           <div className="img-wrap">
//             <img
//               src="/assets/images/home/mentor/jabbar_patel.webp"
//               alt="Mentor"
//             />
//           </div>

//           {/* Mentor Info */}
//           <div className="mentor-info">
//             <img
//               src="/assets/images/home/award_logo.webp"
//               alt="Icon"
//               className="mentor-icon"
//             />
//             <div>
//               <h3 className="subtitle" style={{ textAlign: "left" }}>
//                 Padma Shree. Dr. Jabbar Patel
//               </h3>
//               <p className="mentor-message">
//                 “Cinema is not just about visuals, it’s about emotions,
//                 discipline, and honesty. Always tell stories that matter.”
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="mentor-right">
//           <p className="mentor-paragraph">
//             Dr. Jabbar Patel is a renowned Indian filmmaker, known for his
//             socially relevant and critically acclaimed films like 'Dr. Babasaheb
//             Ambedkar' and 'Mukta'. As a Dadasaheb Phalke Award winner, he has
//             made significant contribution to Indian Cinema, shedding light on
//             important social issues and inspiring generations of filmmaker.
//           </p>

//           {/* 8 Images Grid */}
//           <section className="image-section">
//             <div className="image-grid">
//               {images.map((img, index) => (
//                 <img key={index} src={img} alt={`Gallery ${index + 1}`} />
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

const Mentor = () => {
  const [expanded, setExpanded] = useState(false);

  const images = [
    "/assets/images/home/mentor/mentor1.webp",
    "/assets/images/home/mentor/mentor8.webp",
    "/assets/images/home/mentor/mentor7.webp",
    "/assets/images/home/mentor/mentor6.webp",
    "/assets/images/home/mentor/mentor3.webp",
    "/assets/images/home/mentor/mentor4.webp",
    "/assets/images/home/mentor/mentor2.webp",
    "/assets/images/home/mentor/mentor.webp",
  ];
  return (
    <section className="mentor-section">
      <DividerWithTitle title="Our Mentor" />
      

      <div className="mentor-content">
        {/* left side */}
        <div className="mentor-left">
          <img
            // src="/assets/images/home/mentor/jabbar_patel.webp"
            src="/assets/images/inner-banner/Dr.jabbar.webp"
            alt="Mentor"
            className="mentor-img"
          />
               <h4 className="subtitle">
            Padma Shree. Dr. Jabbar Patel
          </h4>
          <div className="mentor-bottom">
            
            <img
              src="/assets/images/home/award_logo.webp"
              alt="Icon"
              className="mentor-icon"
            />
            <p className="mentor-paragraph" style={{ fontStyle: "italic" }}>
              Dr. Jabbar Patel is a renowned Indian filmmaker, known for his
              socially relevant and critically acclaimed films like 'Dr.
              Babasaheb Ambedkar' and 'Mukta'. As a Dadasaheb Phalke Award
              winner, he has made significant contribution to Indian Cinema,
              shedding light on important social issues and inspiring
              generations of filmmaker.
            </p>
          </div>
          <div className="expand-text">
            <p className={expanded ? "expanded" : "collapsed"}>
              At MIT Art, Design and Technology University, we are committed to
              fostering future ready education that encourages creativity,
              innovation, and global engagement. Our University nurtures a
              multidisciplinary academic environment where knowledge, practice,
              and purpose come together to prepare learners for meaningful
              professional and societal contributions. The MIT School of Film &
              Television reflects this commitment through its focused approach
              to screen based storytelling and visual media education. Guided by
              its vision to nurture creative storytellers and performers who
              shape the future of film and television, the school emphasizes
              innovation, imagination, and a global perspective across all
              aspects of learning.
              <p>
                Its mission is realized through a dynamic academic ecosystem
                that blends artistic expression, technical mastery, and industry
                exposure empowering students to excel both behind and in front
                of the camera. With structured curriculum, intensive production
                practice, and engagement with professional filmmaking practices,
                the school equips students to meet the evolving demands of film,
                television, and digital platforms. The School of Film &
                Television will continue to develop skilled, responsible, and
                visionary media professionals who uphold the values of
                excellence, integrity, and innovation that define our
                university.
              </p>
            </p>
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="mentor-right">
     

          <p className="mentor-message">
            “Cinema is not just about visuals, it’s about emotions, discipline &
            honesty. Always tell stories that matter.”
          </p>

          <section className="image-section">
            <div className="image-grid">
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Mentor;
