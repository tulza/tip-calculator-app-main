import React from "react";

const RandomRecatComponent = ({ bill, numberOfPeople }) => {
  const total = bill * numberOfPeople;
  return <>{`total is ${total}`}</>;
};

const CalculateTip = () => {
  const bill = NaN;
  const tip = NaN;
  const NumPeople = NaN;

  return (
    <div>
      <RandomRecatComponent bill={10} numberOfPeople={2} />
    </div>
  );
};

export default CalculateTip;
