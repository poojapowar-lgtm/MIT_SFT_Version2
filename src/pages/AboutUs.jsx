// import React from "react";
// import { Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";
// import InnerBanner from "../components/inner_banner/InnerBanner";
// import Sidebar from "../components/sidebar/Sidebar";
// import "./Pages.css";

// const AboutUs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menu = [
//     { name: "About MIT-ADT", path: "about-mit" },
//     { name: "Leadership Message", path: "leadership" },
//     { name: "Institute History ", path: "history" },
//     { name: "Vision-Mission", path: "vision-mission" },
//     { name: "Unique Features ", path: "features" },
//     { name: " USP", path: "usp" },
//     { name: "Institutional Achievements", path: "achievements" },
//   ];

//   const activeItem =
//     menu.find((m) => location.pathname.includes(m.path))?.name ||
//     "About MIT-ADT";

//   // Mapping for title + background based on route
//   const bannerDataMap = {
//     " leadership": {
//       title: " Leadership Message",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//     " history ": {
//       title: " Institute History ",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//     " vision-mission ": {
//       title: "Vision-Mission ",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//     " features ": {
//       title: "Unique Features ",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//     "usp": {
//       title: " USP",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//     " achievements": {
//       title: "Institutional Achievements ",
//       bgImage: "/assets/images/banner/inner_banner.webp",
//     },
//   };

//   // Reusable function to fetch matching banner data
//   const getBannerData = () => {
//     const matchedKey = Object.keys(bannerDataMap).find((key) =>
//       location.pathname.includes(key)
//     );

//     // If no match found → default to About MANET
//     return (
//       bannerDataMap[matchedKey] || {
//         title: "About MIT-ADT",
//         bgImage: "/assets/images/banner/inner_banner.webp",
//       }
//     );
//   };

//   const { title, bgImage } = getBannerData();

//   const subtitle = "Sailing Towards Future";

//   return (
//     <>
//       <InnerBanner bgImage={bgImage} title={title} subtitle={subtitle} />

//       <div className="page-layout">
//         <Sidebar menuItems={menu} />
//         <div className="page-content">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../components/inner_banner/InnerBanner";
import Sidebar from "../components/sidebar/Sidebar";
import "./Pages.css";

const AboutUs = () => {
  const location = useLocation();

  const menu = [
    { name: "About MIT-ADT", path: "about-mit" },
    { name: "Leadership", path: "leadership" },
    { name: "Institute History", path: "history" },
    { name: "Vision & Mission", path: "vision-mission" },
    { name: "Unique Features", path: "features" },
    { name: "USP", path: "usp" },
    { name: "Institutional Achievements", path: "achievements" },
  ];

  // Title mapping only (no bg image here)
  const titleMap = {
    leadership: "Leadership",
    history: "Institute History",
    "vision-mission": "Vision & Mission",
    features: "Unique Features",
    usp: "USP",
    achievements: "Institutional Achievements",
  };

  // Get dynamic title
  const getTitle = () => {
    const matchedKey = Object.keys(titleMap).find((key) =>
      location.pathname.includes(key)
    );

    return matchedKey ? titleMap[matchedKey] : "About MIT-ADT";
  };

  const title = getTitle();

  // Single background image for all menus
  const bgImage = "/assets/images/inner-banner/mit-sft.webp";
  const subtitle = "Sailing Towards Future";

  return (
    <>
      <InnerBanner
        bgImage={bgImage}
        title={title}
        subtitle={subtitle}
      />

      <div className="page-layout">
        <Sidebar menuItems={menu} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
