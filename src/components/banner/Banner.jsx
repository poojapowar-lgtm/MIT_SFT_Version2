import { GoDotFill } from "react-icons/go";
import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./banner.css";

const images = [
  "/assets/images/banner/bn.webp",
  "/assets/images/banner/bn9.webp",
  "/assets/images/banner/bn11.webp",
  "/assets/images/banner/bn2.webp",
  "/assets/images/banner/bn3.webp",
  "/assets/images/banner/bn4.webp",
  "/assets/images/banner/bn5.webp",
  "/assets/images/banner/bn6.webp",
  "/assets/images/banner/bn7.webp",
  "/assets/images/banner/bn1.webp",
  "/assets/images/banner/bn8.webp",
  "/assets/images/banner/bn10.webp",
];

// const Banner = () => {
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = true;
//       videoRef.current
//         .play()
//         .catch((err) => console.log("Autoplay blocked:", err));
//     }
//   }, []);

//   const toggleMute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };
//   return (
//     <div>
//       {/* Banner */}
//       <div className="banner">
//         <section className="bnr-video">
//           <div className="bnr-video-container">
//             <img
//               // src="/assets/images/banner/bannerhome1.png"
//               src="/assets/images/banner/banner.png"
//               alt="Short Film Banner"
//               className="bnr-image"
//             />

//             {/* Overlay Items */}
//             <div className="bnr-overlay">
//               <div className="bnr-left">
//                 <div className="banner-content">
//                   <h3 className="banner-title reveal-bg">
//                     Our Alumni <br /> Mr. Ankit Bhat (Associate DoP)
//                   </h3>

//                   <p className="banner-text reveal-bg delay-1">
//                     On the Set Of Feature Film
//                   </p>
//                 </div>

//                 <button
//                   className="button"
//                   id="bnr-btn"
//                   onClick={() => navigate("/short-film")}
//                 >
//                   More Alumni Work
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // preload
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className="banner">
      <section className="bnr-section">
        {/* <div
          className="bnr-container banner-bg"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
        ></div> */}
        <div
          className="slide slide-prev"
          style={{ backgroundImage: `url(${images[prevIndex]})` }}
        />
        <div
          className="slide slide-current"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </section>
    </div>
  );
};

export default Banner;
