import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { LuArrowUp } from "react-icons/lu";
import socialIconsData from "../reuseable_components/socialIconsData";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {/* TOP FOOTER */}
      <div className="footer-top">
        {/* SECTION 1 */}
        <div className="footer-section footer-left">
          <div className="footer-logos">
            <img
              className="logo1"
              src="/assets/icons/mit_logo.webp"
              alt="Logo 1"
            />
            <img
              className="logo2"
              src="/assets/icons/film_logo.webp"
              alt="Logo 2"
            />
          </div>

          <p className="footer-address">
            School of Film & Television, MIT-ADT Campus,
            <br />
            Rajbaugh, Solapur-Pune Highway, Near Bharat <br /> Petrol Pump, Loni
            Kalbhor, Maharashtra- 412201
          </p>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.763298670794!2d74.021772471721!3d18.494377912109268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e805e62101ff%3A0x1ddc1a0f0d10f749!2sMIT%20School%20of%20Film%20%26%20Theatre!5e0!3m2!1sen!2sin!4v1767600491380!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="footer-section footer-center">
          <div className="footer-links">
            <ul className="page-list">
              <span className="footer-heading">Quick Links</span>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/academics">Academics</Link>
              </li>
              <li>
                <Link to="/short-film">Short Films</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
            </ul>
            {/* Contact + Admission Row */}
            <div className="contact-admission">
              <ul className="page-list">
                <span className="footer-heading">Contact Us</span>
                <li>
                  <a href="tel:+919021080157">+91-9021080157</a>
                </li>
                <li>
                  <a href="tel:+918669982310">+91-8669982310</a>
                </li>
              </ul>

              <ul className="page-list">
                <span className="footer-heading">Email</span>
                <li>
                  <a href="mailto:admissions.sft@mituniversity.edu.in">
                    admissions.sft@mituniversity.edu.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            {socialIconsData.map(({ url, network, bgColor }, index) => (
              <SocialIcon
                key={index}
                className="ft-social-icons"
                url={url}
                network={network}
                bgColor={bgColor}
              />
            ))}
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="footer-section footer-right">
          <div className="footer-text vertical-words">
            <img
              src="/assets/images/banner/footer-gif.gif"
              alt="Lights Camera and Action"
              className="vertical-image"
            />
          </div>
          <button
            onClick={() =>
              window.open(
                "https://mituniversity.ac.in/bsc-msc-film-making-course-mit-pune/",
                "_blank",
              )
            }
            className="button"
            id="footer-btn"
          >
            Join Now
          </button>

          {/* <button
            onClick={() => navigate("/apply-now")}
            className="button"
            id="footer-btn"
          >
            Join Now
          </button> */}
        </div>
      </div>
      <span
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <LuArrowUp />
      </span>
      <p className="footer-bottom">
        Copyright © 2026 All rights reserved by Website Department MIT-ADT
        University.
      </p>
    </footer>
  );
};

export default Footer;
