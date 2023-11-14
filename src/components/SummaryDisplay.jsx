import React from "react";

const SummaryDisplay = ({ label, perLabel, value }) => {
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <p className="text-summary-label">{label}</p>
        <p className="text-summary-perLabel">/ {perLabel}</p>
      </div>
      <span className="text-summary-total text-[50px]">
        $<span>{value}</span>
      </span>
    </div>
  );
};

export const CalculatedSummary = ({ bill, tip, customTip, numOfPeople }) => {
  console.log(bill, tip, customTip, numOfPeople);
  let tipAmount = 0;
  let tipPerPerson = "0.00";
  let total = "0.00";
  //enable calculation when inputs below has a value
  if (bill && numOfPeople && (tip || customTip)) {
    //if there are custom tip use value
    if (customTip) {
      tipAmount = customTip / 100;
    } else {
      tipAmount = tip;
    }

    // Calculate tip and total here 2d.p.
    tipPerPerson = Math.round((100 * (bill * tipAmount)) / numOfPeople) / 100;
    total = Math.round((100 * (bill * (1 + tipAmount))) / numOfPeople) / 100;
  }
  console.log(tipPerPerson, total);
  return (
    <>
      <SummaryDisplay
        label="Tip Amount"
        perLabel="person"
        value={tipPerPerson}
      />
      <SummaryDisplay label="Total" perLabel="person" value={total} />
    </>
  );
};

export default CalculatedSummary;