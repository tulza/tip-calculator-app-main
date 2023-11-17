import React from "react";
import clsx from "clsx";

const InputField = ({ value, placeholder, imageUrl, onChange, error }) => {
  return (
    <div className="flex">
      <img className="input-logo" src={imageUrl} />
      <input
        value={value}
        type="number"
        className={clsx("input-field", error ? "input-field-error" : "")}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
