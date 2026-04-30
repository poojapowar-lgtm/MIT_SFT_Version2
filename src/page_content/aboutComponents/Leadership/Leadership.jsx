import React from "react";
import "./leadership.css";

const Leadership = () => {
  return (
    <div>
      <h2 className="innerpage-title">Message from Executive President</h2>

      <div className="leadership-content">
        {/* Left Content */}
        <div className="leadership-text">
          <p> Dear Parents and Students,</p>
          <p>
            At MIT Art, Design and Technology University, we are committed to
            fostering future-ready education that encourages creativity,
            innovation, and global engagement. Our university nurtures a
            multidisciplinary academic environment where knowledge, practice,
            and purpose come together to prepare learners for meaningful
            professional and societal contributions.
          </p>
          <p>
            The School of Film & Television reflects this commitment through its
            focused approach to screen-based storytelling and visual media
            education. Guided by its vision to nurture creative storytellers and
            performers who shape the future of film and television, the school
            emphasizes innovation, imagination, and a global perspective across
            all aspects of learning.
          </p>
          <p>
            Its mission is realized through a dynamic academic ecosystem that
            blends artistic expression, technical mastery, and industry exposure
            empowering students to excel both behind and in front of the camera.
            With structured curricula, intensive production practice, and
            engagement with professional filmmaking practices, the school equips
            students to meet the evolving demands of film, television, and
            digital platforms.
          </p>
        </div>

        {/* Right Content */}
        <div className="leadership-profile">
          <img
            src="/assets/images/inner-banner/leader.webp"
            alt="Leader"
            className="leader-image"
          />

          <div className="leader-info">
            <h4 className="ld-name">Hon’ble Prof. Dr. Mangesh T. Karad</h4>
            <p className="span-text">
              (Pro-Chancellor and Executive President,MIT ADT University.)
            </p>
            <p className="span-text">
              with Shri Javed Akhtar Sahab , poet, lyricist and screenwriter
            </p>
          </div>
        </div>
      </div>
      <p>
        The School of Film & Television will continue to develop skilled,
        responsible, and visionary media professionals who uphold the values of
        excellence, integrity, and innovation that define our university.
      </p>
    </div>
  );
};

export default Leadership;
