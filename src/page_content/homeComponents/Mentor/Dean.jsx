import React from "react";
import { useState } from "react";
import "./dean.css";
import { useNavigate } from "react-router-dom";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";


const Dean = () => {
    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);

    const images = [
        "/assets/images/dean/PM.jpg",
        "/assets/images/dean/PresidenAward2.jpg",
        "/assets/images/dean/cineAward2.jpg",
        "/assets/images/dean/aamir_khan.jpg",
        "/assets/images/dean/amitabh_bachhan.jpg",
        "/assets/images/dean/lataji.jpg",
        "/assets/images/dean/nadiyawala.jpg",
        "/assets/images/dean/David_dhawan.jpg",
        "/assets/images/dean/Jackie_Shroff.jpg",
        "/assets/images/dean/Chief_minister.jpg",
        "/assets/images/dean/Ameen_Sayani.jpg",
        "/assets/images/dean/khan.jpg",
        "/assets/images/dean/nadiyawala.jpg",
        "/assets/images/dean/Rajabali.jpg",
        "/assets/images/dean/Roogre_Bond.jpg",
        "/assets/images/dean/shabana.jpg",
        "/assets/images/dean/Subhash_ghai.jpg",
        "/assets/images/dean/Anup_Jalota.jpg",
        "/assets/images/dean/Ashaji.jpg",
        "/assets/images/dean/cineAward3.jpg",
    ];

    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            <section className="dean-section">


                <div className="dean-wrapper">
                    <div className="dean-left">
                        <img
                            src="/assets/images/faculty/Dr-Mukesh-Sharma.webp"
                            alt="dean"
                            className="dean-img"
                        />
                        <h4 className="subtitle" style={{ marginBottom: "0px" }}>Dr. Mukesh Sharma</h4>
                        <button
                            className="button"
                            onClick={() => navigate("/filmaker")} style={{marginTop:"5px"}}
                        >
                          Know More
                        </button>
                    </div>

                    <div className="dean-right">
                        <DividerWithTitle title="Message From Dean" />
                        <div className="expand-text">
                            <p>
                                Dear Parents and Students,
                                <br />
                                On behalf of all our faculty & staff, I welcome you all to the School of Film & Television or as we fondly refer to it as SFT. As dean of SFT, I am very proud of the rich tradition that we have adopted to impart experiential learning of Film Education. Endorsed under the ages MIT-ADT University, our program prepares students to become film makers with the ethical depth and intellectual intensity essential to meet the challenges of a time of critical transition in society.

                                <p className={expanded ? "expanded" : "collapsed"}>
                                    Generating Ideas is not a problem. But the lack of know how as to how to give them shape, is what prevents us from reaching our goal. It’s one’s attachment to the baggage that we carry, that prevents us from giving fruition to our ideas. Here’s where SFT comes into picture.
                                    <p>
                                        Our carefully constructed curriculum uses a combination of in classroom teachings and real world film making simulations, along with assurance of learning pushes the students to think outside the box. Change starts with you! Giving yourself permission to push outside expectations, unleashing your curiosity to discover what’s next and imagining a future other can’t yet see. I would like to cordially invite all of you who are interested in expanding your knowledge and enriching your careers to explore our school further either online or through a visit to our campus.
                                    </p>
                                </p>

                            </p>
                        </div>

                        <button
                            className="read-more-btn"
                            onClick={() => setExpanded(!expanded)}
                            style={{
                                float: "right",           // aligns button to the right
                            }}
                        >
                            {expanded ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>

                <div className="dean-slider-wrapper">
                    <div className="dean-slider">
                        {images.concat(images).map((img, idx) => (
                            <img key={idx} src={img} alt={`dean-${idx}`} className="dean-slide-img" />
                        ))}
                    </div>
                </div>

            </section>
        </div>

    );
};
export default Dean;
