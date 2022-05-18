import React from "react";
import Skills from "../Sections/Skills";
import Languages from "../Sections/Languages";
import Education from "../Sections/Education";
import PersonalDetails from "../Sections/PersonalDetails";
import WebSiteAndSocialLinks from "../Sections/WebSiteAndSocialLinks";
import Hobbies from "../Sections/Hobbies";

const FormContainer = () => {
  return (
    <div className="flex flex-col w-1/2 h-screen p-3 space-y-3 overflow-y-scroll bg-white">
      <PersonalDetails />
      <Education />
      <WebSiteAndSocialLinks />
      <Skills />
      <Languages />
      <Hobbies />
    </div>
  );
};
export default FormContainer;
