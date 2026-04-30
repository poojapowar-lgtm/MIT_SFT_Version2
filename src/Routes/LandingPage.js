import React from "react";
import LandingTop from "../page_content/landingComponents/landingtop/LandingTop";
import Career from "../page_content/landingComponents/career/Career";
import NationalAwards from "../page_content/homeComponents/NationalAwards/NationalAwards";
import Programs from "../page_content/homeComponents/Programs/Programs";
import ProgramHighlights from "../page_content/landingComponents/programHighlights/ProgramHighlights";
import AdmissionDetails from "../page_content/landingComponents/admissiondetails/AdmissionDetails";
import DividerWithTitle from "../components/reuseable_components/DividerWithTitle/DividerWithTitle";
import Specialization from "../page_content/course/specialization/Specialization";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <LandingTop />
      <DividerWithTitle title="Specializations Offered" />
      <Specialization />
      <NationalAwards />
      <Career />
      <Programs />
      <ProgramHighlights />
      <AdmissionDetails />
      <Footer />
    </>
  );
};

export default LandingPage;
