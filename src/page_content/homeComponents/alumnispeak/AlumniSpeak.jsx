import React, { useRef } from "react";
import "./alumnispeak.css";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const alumniData = [
  {
    name: "Aishwarya Pardeshi ",
    course: "B.Sc Filmmaking",
    des: "(Specialization : Cinematography)",

    video: "https://www.youtube.com/watch?v=jObopxaHBQ8",
  },
  {
    name: "Gunjan Jaywant",
    course: "M.Sc Filmmaking ",
    des: "(Specialization : Cinematography)",
    video: "https://www.youtube.com/watch?v=-wLlPxmT00M",
  },
  {
    name: "Harsh Balpande",
    course: "B.Sc Filmmaking ",
    des: "(Specialization : film editing)",
    video: "https://www.youtube.com/embed/0RWqcbW7jxc",
  },
  {
    name: "Jay Agarwal",
    course:
      "B.Sc Filmmaking",
    des: "(Specialization : Screenplay Writing & Direction)",
    video: "https://www.youtube.com/watch?v=LKUwDwdpqYU",
  },
  {
    name: "Bhushan Gokhale",
    course: "B.Sc Filmmaking",
    des: "(Specialization : Direction)",
    video: "https://www.youtube.com/watch?v=hw0-UhiiRQ8",
  },
  {
    name: "Vishesh Iyer",
    course: "B.Sc Filmmaking",
    des: "(Specialization : Direction)",
    video: "https://www.youtube.com/watch?v=5PvkUzzoNZ4",
  },
  {
    name: "Siddhant Temkar",
    course: "B.Sc Filmmaking",
    des: "(Specialization : Cinematography)",
    video: "https://www.youtube.com/watch?v=m70MbrObNyY",
  },
];

const AlumniSpeak = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="alumni-speak">
      <DividerWithTitle title="Alumni Speak" />

      <div className="alumni-wrapper">
        <button className="nav-btn right" onClick={scrollLeft}>
          <TbPlayerTrackPrevFilled />
        </button>

        <div className="alumni-slider" ref={sliderRef}>
          {alumniData.map((item, index) => (
            <div className="alumni-card" key={index}>
              <div className="video-box">
                <iframe
                  src={getEmbedUrl(item.video)}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="alumni-info">
                <h4 className="alumni-name">{item.name}</h4>
                <p style={{marginBottom:"0"}}>{item.course}</p>
                <p style={{margin:"0px"}}>{item.des}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          <TbPlayerTrackNextFilled />
        </button>
      </div>
    </section>
  );
};

export default AlumniSpeak;
