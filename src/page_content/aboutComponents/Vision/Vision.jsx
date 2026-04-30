import React from "react";
import { FaEye, FaAward } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import "./vision.css";

const Vision = () => {
  const visionData = [
    {
      icon: <FaEye size={60} />,
      title: "Our Vision",
      description:
        "To nurture creative storytellers and performers who shape the future of cinema and television through innovation, imagination, and global perspective.",
    },
    {
      icon: <TbTargetArrow size={60} />,
      title: "Our Mission",
      description:
        "To provide a dynamic learning environment that blends artistic expression, technical mastery, and industry exposure-empowering students to excel both behind and in front of the camera.",
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">Vision, Mission & Objectives</h2>
      <section className="vision-section">
        <div className="vision-cards">
          {visionData.map((item, index) => (
            <div
              className="common-card"
              style={{ maxWidth: "350px" }}
              key={index}
            >
              <div className="vision-top">
                <div className="vision-icon">{item.icon}</div>
                <h5 className="common-title">{item.title}</h5>
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;
