import React from "react";

const Input = (props) => {
  return (
    <>
      <label>{props?.name}</label>
      <input className="input" {...props} />
    </>
  );
};
export default Input;
