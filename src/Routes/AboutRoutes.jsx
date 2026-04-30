import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import MIT from "../page_content/aboutComponents/MIT-ADT/MIT";
import Leadership from "../page_content/aboutComponents/Leadership/Leadership";
import History from "../page_content/aboutComponents/History/History";
import Vision from "../page_content/aboutComponents/Vision/Vision";
import Features from "../page_content/aboutComponents/Features/Features";
import USP from "../page_content/aboutComponents/USP/USP";
import Achievements from "../page_content/aboutComponents/Achievements/Achievements";

export const AboutRoutes = (
  <Route path="about" element={<AboutUs />}>
    <Route index element={<MIT />} />
    <Route path="about-mit" element={<MIT />} />
    <Route path="leadership" element={<Leadership />} />
    <Route path="history" element={<History />} />
    <Route path="vision-mission" element={<Vision />} />
    <Route path="features" element={<Features />} />
    <Route path="usp" element={<USP />} />
    <Route path="achievements" element={<Achievements />} />
  </Route>
);
