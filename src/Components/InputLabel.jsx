import React from "react";

const InputLabel = ({ label, error }) => {
  return (
    <div className="input-label flex justify-between py-2">
      <span>{label}</span>
      <span>{error}</span>
    </div>
  );
};

export default InputLabel;
