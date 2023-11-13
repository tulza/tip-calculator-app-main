import React, { useState, useRef } from "react";
import InputBox from "./InputBox";
import TipButton from "./TipButton";
import SummaryDisplay from "./SummaryDisplay";
import CalculateTip from "./CalculateTip";

const Form = () => {
  const [tipRange] = useState([5, 10, 15, 25, 50]);
  const [bill, setBill] = useState(0);
  return (
    <form id="tip-box-container">
      <div id="calculate-box">
        <InputBox label="Bill" imageFile="./images/icon-dollar.svg" />
        <div>
          <p className="mb-2">Select Tip %</p>
          <div id="tip-sel-grid">
            {tipRange.map((tip) => {
              return <TipButton tipAmount={tip} />;
            })}

            <input
              type="Input"
              className="input-box"
              name="tip-custom"
              placeholder="Custom"
            />
          </div>
        </div>
        <InputBox
          label={"Number of people"}
          imageFile="./images/icon-person.svg"
        />
        <CalculateTip />
      </div>
      <div id="summary">
        <SummaryDisplay label="Tip Amount" perLabel="person" />
        <SummaryDisplay label="Total" perLabel="person" />
        <input type="button" id="reset-button" value="RESET" name="reset" />
      </div>
    </form>
  );
};

export default Form;
