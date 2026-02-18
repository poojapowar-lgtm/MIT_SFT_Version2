import React from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import DividerWithTitle from "../../components/reuseable_components/DividerWithTitle/DividerWithTitle";
import "./contact.css";

const Contact = () => {
  const bgImage = "/assets/images/inner-banner/contact-bnr.webp";
  const title = "Contact Us";
  const subtitle = "Start Your Journey With Us";

  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} subtitle={subtitle} />

      <section className="contact-us">
        <DividerWithTitle title="Contact Us" />
        <div className="contact-cards">
          {/* Address */}
          <div className="contact-card">
            <div className="icon">
              <img src="/assets/images/icons/contact/gps.webp" alt="Address" />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Address</h4>
              <p>
                School of Film & Television, MIT-ADT University Campus,
                Rajbaugh, Pune-Solapur Highway, Loni - Kalbhor, Pune,
                Maharashtra. 412201
              </p>
            </div>
          </div>

          {/* Enquiry */}
          <div className="contact-card">
            <div className="icon">
              <img
                src="/assets/images/icons/contact/phone.webp"
                alt="Enquiry"
              />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Enquiry</h4>
              <ul className="page-list" style={{ listStyleType: "none" }}>
                Mobile :
                <li>
                  <a href="tel:+919021080157">+91-9021080157</a>
                </li>
                <li>
                  <a href="tel:+918669982310">+91-8669982310</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="icon">
              <img src="/assets/images/icons/contact/email.webp" alt="Email" />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Connect</h4>
              <p>
                <span>Email :</span>
                <a href="mailto:admissions.sft@mituniversity.edu.in">
                  admissions.sft@mituniversity.edu.in
                </a>
              </p>
              <p>
                <span>Website :</span>
                <a href="mailto:www.mituniversity.ac.in">
                  www.mituniversity.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="contact-card">
            <div className="icon">
              <img
                src="/assets/images/icons/contact/clock.webp"
                alt="Working Hours"
              />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Working Hours</h4>
              <p>
                Monday – Friday
                <br />
                09:00 AM – 05:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="scope-cta">
          <h3 className="btn-heading ">
            Start your story here and begin your journey as a filmaker !
          </h3>
          <button className="button">Apply Now</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
