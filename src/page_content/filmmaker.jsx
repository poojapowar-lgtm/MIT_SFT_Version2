import React from "react";
import "./Filmaker.css";
import DividerWithTitle from "../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const videos = [
    "https://youtu.be/qlqxu1Kl7K8",
    "https://youtube.com/shorts/IvIdxYKtyAA?feature=share",
    "https://youtube.com/shorts/XFi7TtWfTGg?feature=share",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/aqz-KE-bpKQ",
    "https://www.youtube.com/embed/ScMzIvxBSi4"
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