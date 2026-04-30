import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import { AboutRoutes } from "./AboutRoutes";
import { AcademicsRoutes } from "./AcademicsRoutes.jsx";
import { CoursesRoutes } from "./CoursesRoutes.jsx";
import Admission from "../page_content/admission/Admission.jsx";
import Contact from "../page_content/contact/Contact.jsx";
import AwardStories from "../page_content/awardstories/AwardStories.jsx";
import ShortFilm from "../page_content/shortfilms/ShortFilms.jsx";
import Filmaker from "../page_content/filmmaker.jsx";
// import LandingPage from "./LandingPage.js";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/apply-now" element={<LandingPage />} /> */}
      {AboutRoutes}
      {AcademicsRoutes}
      {CoursesRoutes}
      <Route path="/admission" element={<Admission />} />
      <Route path="/award-stories" element={<AwardStories />} />
      <Route path="/short-film" element={<ShortFilm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/filmaker" element={<Filmaker />} />
    </Routes>
  );
};

export default MainRoutes;
