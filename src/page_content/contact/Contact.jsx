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
           <DividerWithTitle title="Cotact Us" />
        <div className="contact-cards">
          {/* Address */}
          <div className="contact-card">
            <div className="icon">
              <img src="/assets/images/icons/contact/gps.webp" alt="Address" />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Address</h4>
              <p>
                MIT ADT University Campus, Rajbaugh, Loni-Kalbhor,
                <br />
                Pune - 412201, Maharashtra India.
              </p>
            </div>
          </div>

          {/* Enquiry */}
          <div className="contact-card">
            <div className="icon">
              <img src="/assets/images/icons/contact/phone.webp" alt="Enquiry" />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Enquiry</h4>
              <p>
                <span>Mobile :</span>
                +9513237668 +91 86699 82310.
              </p>
              <p>
                <span>Landline :</span>020-67652443
              </p>
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
                 admissions.sft@mituniversity.edu.in
              </p>
              <p>
                <span>Website :</span>www.mituniversity.ac.in
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="contact-card">
            <div className="icon">
              <img src="/assets/images/icons/contact/clock.webp" alt="Working Hours" />
            </div>
            <div className="content">
              <h4 className="innerpage-subtitle">Working Hours</h4>
              <p>
                Monday – Friday
                <br />
                9:00 AM – 5:30 PM
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
