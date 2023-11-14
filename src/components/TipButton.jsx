import React, { useState } from "react";

const TipButton = ({ tipAmount, onClick }) => {
  return (
    <input
      type="button"
      className="tip-button"
      value={`${tipAmount}%`}
      name={`tip-${tipAmount}`}
      onClick={onClick}
    />
  );
};

export default TipButton;
