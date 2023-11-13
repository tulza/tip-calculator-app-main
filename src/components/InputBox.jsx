import React from "react";

const InputBox = ({ label, imageFile, formName }) => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-2">
          <span>{label}</span> <span id="input-out-error">Err</span>
        </div>
        <div className="flex">
          <img className="input-logo" src={imageFile} />
          <input type="Input" className="input-box" name={formName} />
        </div>
      </div>
    </>
  );
};

export default InputBox;
