import React from "react";

const InputField = ({ placeholder, imageUrl, onChange }) => {
  return (
    <div className="flex">
      <img className="input-logo" src={imageUrl} />
      <input
        type="Input"
        className="input-field"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
