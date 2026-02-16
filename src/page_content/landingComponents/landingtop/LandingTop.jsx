import React from "react";
import "./landingtop.css";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { IoClose } from "react-icons/io5";
import socialIconsData from "../../../components/reuseable_components/socialIconsData";

const LandingTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="landing-top">
      <div className="landing-overlay"></div>

      {/* Top Bar */}
      <div className="landing-top-bar">
        <div className="logos">
           <img
            src="/assets/icons/film_logo.webp"
            alt="Logo 2"
            className="ld-logo2"
          />
          <h1 className="logo-title">
            School Of <br />
            Film and Television
          </h1>
          <img
            src="/assets/icons/mit_logo_black.webp"
            alt="Logo 1"
            className="ld-logo1"
          />
         
        </div>

        <div className="ld-social">
          {socialIconsData.map(({ url, network, bgColor }, index) => (
            <SocialIcon
              key={index}
              className="ld-social-icons"
              url={url}
              network={network}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>

      {/* Apply Now Button */}
      <button
        className="button vertical-apply-btn"
        onClick={() => setIsOpen(true)}
      >
        Apply Now
      </button>

      {/* Modal Overlay */}
      <div
        className={`form-modal-overlay ${isOpen ? "show-form" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <h2 className="subtitle ld-subtitle">Bring Imagination To Life</h2>
        <div className="info-card" onClick={(e) => e.stopPropagation()}>
          <IoClose className="close-btn" onClick={() => setIsOpen(false)} />
          <h3 className="form-title">Apply Now / Enquiry Now</h3>

          <form className="apply-form">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="email" placeholder="Email ID" />

            <div className="form-row">
              <select>
                <option>Country</option>
                <option>India</option>
              </select>

              <select>
                <option>State</option>
                <option>Maharashtra</option>
              </select>

              <select>
                <option>City</option>
                <option>Pune</option>
              </select>
            </div>

            <select>
              <option>Select Program</option>
              <option>B.Sc Filmmaking</option>
              <option>M.Sc Filmmaking</option>
              <option>Diploma in Media</option>
            </select>

            <button type="submit" className="button" id="landing-btn">
              Apply Now
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="landing-main">
        <div className="landing-bottom">
          <div className="bottom-block">
            <h4 className="subtitle bt-block-title">20 February, 2026</h4>
            <p className=" bt-block-text">Last date of Application</p>
          </div>

          <div className="divider"></div>

          <div className="bottom-block">
            <h4 className="subtitle bt-block-title" style={{ color: "black" }}>
              3 Programs
            </h4>
            <p className="bt-block-text">Full time</p>
          </div>
        </div>

        {/* Vertical Text Right Bottom */}
        {/* <div className="landingtop-text">
          <h1 className="lt-text">Our Alumni</h1>
          <h1 className="lt-text">Mr.Ankit Bhat (Associate Dop)</h1>
          <h1 className="lt-text">On the set of feature film</h1>
        </div> */}
      </div>

      {/* Bottom Section */}
      {/* <div className="landing-bottom">
        <div className="bottom-block">
          <p className=" bt-block-text">Last date of Application</p>
          <h4 className="subtitle bt-block-title">20 February, 2026</h4>
        </div>

        <div className="divider"></div>

        <div className="bottom-block">
          <p className="bt-block-text">Full time</p>
          <h4 className="subtitle bt-block-title" style={{color:"red"}}>3 Programs</h4>
        </div>
      </div> */}
    </section>
  );
};

export default LandingTop;
