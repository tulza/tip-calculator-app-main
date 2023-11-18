import React, { useState } from "react";

const AnimNumberDisplay = ({ type, changeToValue }) => {
  const [StartingNum, setStart] = useState(0.0);
  const [EndingNum, setEnd] = useState(0.0);
  const [current, setCurr] = useState(0.0);
  const [step, setStep] = useState(0.0);
  const duration = 500;
  const stepDivider = 10

  // for invalid input
  if (isNaN(StartingNum)) {
    setStart(parseFloat(0.0));
  }
  if (isNaN(EndingNum)) {
    setEnd(parseFloat(0.0));
  }
  setStep((startValue - endValue)/stepDivider);

  

  if (type === "p") {
    return <p>AnimNumberDisplay</p>;
  } else {
    return <span>{}</span>;
  }
};

export default AnimNumberDisplay;
