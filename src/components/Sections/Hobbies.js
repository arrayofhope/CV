import React from "react";
import SectionTitle from "../widgets/SectionTitle";
import Textarea from "../widgets/Textarea";

const Hobbies = () => {
  return (
    <>
      <SectionTitle title="Hobbies" />
      <Textarea
        placeholder="e.g Painting, Writing, Snooker playing"
        label="What do you like?"
      />
    </>
  );
};
export default Hobbies;
