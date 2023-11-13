import React from "react";

const TipButton = ({ tipAmount }) => {
  return (
    <input
      type="button"
      className="tip-button"
      value={`${tipAmount}%`}
      name={`tip-${tipAmount}`}
    />
  );
};

export default TipButton;
