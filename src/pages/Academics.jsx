import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../components/inner_banner/InnerBanner";
import Sidebar from "../components/sidebar/Sidebar";
import "./Pages.css";

const Academics = () => {
  const location = useLocation();

  const menu = [
    // { name: "School Leadership Message", path: "leadership-message" },
    { name: "Faculty", path: "faculty" },
    { name: "Academic Structure", path: "academic-structure" },
    { name: "Learning Resources", path: "learning-resourses" },
    { name: "Event & Workshops", path: "event-workshops" },
    { name: "Awards & Recognitions", path: "awards-recognitions" },
    { name: "Placements", path: "placements" },
  ];

  /* Only title changes based on route */
  const bannerTitleMap = {
    // "leadership-message": "School Leadership Message",
    "faculty": "Faculty",
    "academic-structure": "Academic Structure",
    "learning-resourses": "Learning Resources",
    "event-workshops": "Event & Workshops",
    "awards-recognitions": "Awards & Recognitions",
    "placements": "Placements",
  };

  const getBannerTitle = () => {
    const matchedKey = Object.keys(bannerTitleMap).find((key) =>
      location.pathname.includes(key)
    );

    return matchedKey
      ? bannerTitleMap[matchedKey]
      : "Faculty";
  };

  const title = getBannerTitle();

  /* ONE static background image */
  const bgImage = "/assets/images/inner-banner/DharamGulati.webp";
  const subtitle = "Sailing Towards Future";

  return (
    <>
      <InnerBanner title={title} subtitle={subtitle} bgImage={bgImage} />

      <div className="page-layout">
        <Sidebar menuItems={menu} />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Academics;
