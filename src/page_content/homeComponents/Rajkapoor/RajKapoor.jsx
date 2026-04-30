import React from "react";
import { useState } from "react";
import "./raj_kapoor.css"; // We'll put the CSS here
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const RajKapoor = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="raj-container">
        <div className="raj-content">
          {/* Left side - images */}
          <div className="raj-images">
            <div className="image-wrapper">
              <img
                className="main-image"
                src="/assets/images/home/raj_kapoor_bungalow.avif"
                alt="Raj Kapoor"
              />
              <img
                className="inner-image"
                src="/assets/images/home/rj.png"
                alt="Raj Kapoor"
              />
            </div>
          </div>

          {/* Right side - paragraph */}
          <div className="raj-right">
            <DividerWithTitle title="A Timeless Residence of Cinematic Heritage" />
            <h4 className="subtitle">A Living Legacy of Indian Cinema</h4>
            <div className="expand-text">
              <p>
                The MIT-ADT University, Rajbaug Campus is not merely an academic
                space, it stands on land deeply rooted in the history of Indian
                cinema. Spread across 125 acres, the campus includes part of
                what was historically known as Rajbaug, the family estate of the
                legendary filmmaker Raj Kapoor.It was on this land that Kapoor
                conceptualised, planned, and created several of his most iconic
                films, including <b> Bobby, Mera Naam Joker, Satyam Shivam Sundaram, Prem Rog, and
                  later Prem Granth. </b>
                Renowned filmmaker Yash Chopra also filmed portions of <b>Kala Patthar </b> here, further cementing Rajbaug’s place in
                India’s cinematic heritage.
              </p>
              <p className={expanded ? "expanded" : "collapsed"}>
                Raj Kapoor’s association with this land was deeply personal and
                creative. In keeping with his vision, the Kapoor family chose to
                dedicate this space to education and creative pursuit, ensuring
                that it would serve a noble purpose rather than commercial
                development. Honouring this legacy, MIT-ADT University has
                preserved Raj Kapoor’s bungalow and established a dedicated Raj
                Kapoor Memorial and Museum on campus. The University also houses
                the samadhis of Raj Kapoor and his parents, making Rajbaug a
                site of cultural reverence and a living monument to Indian
                cinema.
                <p>
                  The family bungalow on the estate, preserved by the
                  University, is noted as the location where the iconic song <b>“Hum Tum Ek Kamre Mein Band Ho” </b> was filmed, further
                  reinforcing the connection between Kapoor’s creative work and
                  the land that now houses the film school. This historical
                  association significantly enhances the cultural heritage value
                  of the campus where the MIT School of Film & Television
                  educates future filmmakers. Building upon this extraordinary
                  legacy, the MIT School of Film & Television (MIT-SFT)
                  functions under the mentorship of legendary filmmaker and
                  multiple National Award winner Dr. Jabbar Patel. Under his
                  guidance, the School integrates cinematic tradition with
                  contemporary, internationally benchmarked filmmaking
                  practices. Students are trained not only in technical and
                  creative skills but are also immersed in cinema as an art
                  form, a cultural expression, and a professional discipline.
                  Together, the enduring legacy of Raj Kapoor and the visionary
                  mentorship of Dr. Jabbar Patel shape the MIT School of Film &
                  Television as a unique institution where the next generation
                  of filmmakers and screen performers is educated in the true
                  spirit of cinema, on land where Indian film history itself was
                  created.
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
        </div>
      </div>
    </>
  );
};

export default RajKapoor;
