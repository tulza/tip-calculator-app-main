import React from "react";

const SummaryDisplay = ({ label, perLabel, outID }) => {
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <p className="text-summary-label">{label}</p>
        <p className="text-summary-perLabel">/ {perLabel}</p>
      </div>
      <span className="text-summary-total text-[50px]">
        $<span id="outID">0.00</span>
      </span>
    </div>
  );
};

export default SummaryDisplay;
