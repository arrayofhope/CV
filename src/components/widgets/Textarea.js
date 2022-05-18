import React from "react";

const Textarea = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <textarea {...props} className="p-2 bg-slate-100" />
    </>
  );
};
export default Textarea;
