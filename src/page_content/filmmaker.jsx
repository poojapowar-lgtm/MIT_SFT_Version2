import React from "react";
import "./Filmaker.css";
import DividerWithTitle from "../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const videos = [
    "https://www.youtube.com/embed/qlqxu1Kl7K8",
    "https://www.youtube.com/embed/IvIdxYKtyAA",
    "https://www.youtube.com/embed/XFi7TtWfTGg",
    "https://www.youtube.com/embed/CtwaQmWoR3A",
    "https://www.youtube.com/embed/AgE0YE0k62E",
    "https://www.youtube.com/embed/sCQhq5aOIs8",
    "https://www.youtube.com/embed/pOUGfuO8rLQ"
];

const Filmaker = () => {
    return (
        <div>
            <DividerWithTitle title="how to become a filmmaker" />
            <div className="filmaker-container">
                {videos.map((video, index) => (
                    <div className="video-card" key={index}>
                        <iframe
                            src={video}
                            title={`video-${index}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Filmaker;