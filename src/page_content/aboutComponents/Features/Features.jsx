import React from "react";
import { Shield, Star, Users, Globe, Award, Zap, Settings } from "lucide-react";
import "./features.css";

const featuresDataOne = [
  {
    // src: "/assets/images/icons/production.webp",
    src: "/assets/images/icons/new_icons/productivity.png",
    title: "Production Based Learning Framework",
  },
  {
    // src: "/assets/images/icons/internationally.webp",
    src: "/assets/images/icons/new_icons/international.png",
    title: "Internationally Benchmarked Curriculum",
  },
  {
    // src: "/assets/images/icons/studio.webp",
    src: "/assets/images/icons/new_icons/video-camera.png",
    title: "One of the Largest Professional Shooting Studios",
  },
  {
    // src: "/assets/images/icons/headeset.webp",
    src: "/assets/images/icons/new_icons/gimbal.png",
    title: "One to One Access to Professional Equipment",
  },
  {
    // src: "/assets/images/icons/industry.webp",
    src: "/assets/images/icons/new_icons/movie.png",
    title: "Strong Industry Interface & Festival Exposure",
  },
  {
    // src: "/assets/images/icons/legacy.webp",
    src: "/assets/images/icons/new_icons/legacy.png",
    title: "Legacy Driven Learning Enviroment",
  },
  {
    // src: "/assets/images/icons/creative.webp",
    src: "/assets/images/icons/new_icons/idea.png",
    title: "Intergrated Multidisciplinary Creative Campus",
  },
];

const featuresDataTwo = [
  {
    title: "Production-Based Learning Framework",
    desc: "Learning is driven by hands on film and performance projects each semester, evaluated by industry juries to ensure continuous professional feedback and real world readiness.",
  },
  {
    title: "Internationally Benchmarked Curriculum",
    desc: "Programs are structured in alignment with global film school practices, emphasizing cinematic storytelling, technical craft, and industry standard workflows.",
  },
  {
    title: "One of Pune’s Largest Professional Shooting Studios",
    desc: "A fully air-conditioned shooting floor enables large scale set construction, controlled lighting, and immersive production training.",
  },
  {
    title: "One-to-One Access to Professional Equipment",
    desc: "Students work individually with high end still and digital cameras, professional sound recording systems, and Mac and PC based editing suites with industry standard software.",
  },
  {
    title: "Strong Industry Interface & Festival Exposure",
    desc: "Annual participation in the Pune International Film Festival (PIFF), along with regular workshops and masterclasses by National Award winners and industry professionals, fosters networking and industry insight.",
  },
  {
    title: "Legacy-Driven Learning Environment",
    desc: "Located at Rajbaug on a 120-acre campus along the river Mutha home to legendary filmmaker Raj Kapoor the School draws inspiration from a rich cinematic legacy.",
  },
  {
    title: "Integrated Multidisciplinary Creative Campus",
    desc: "Close collaboration with Fine Arts, Architecture, Music &amp; Performing Arts, and Design schools encourages cross-disciplinary thinking and holistic creative development.",
  },
];
const Features = () => {
  return (
    <div>
      <h2 className="innerpage-title">Unique Features</h2>
      <div className="features-grid">
        {featuresDataOne.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.src} alt={item.title} className="feature-icon" />
            <p className="innerpage-hg">{item.title}</p>
          </div>
        ))}
      </div>

      <section className="unique-features">
        <h2 className="innerpage-title">Distinctive Features</h2>
        <div className="uq-features-container">
          {featuresDataTwo.map((feature, index) => (
            <div
              key={index}
              className={`common-card uq-feature-card ${
                index % 2 === 0 ? "left" : "right"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <p className="innerpage-hg">{feature.title}</p>
              <p className="common-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
