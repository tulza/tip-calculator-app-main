import React, { useState, useRef } from "react";
import InputBox from "./InputBox";
import TipButton from "./TipButton";
import CalculatedSummary from "./SummaryDisplay";

const Form = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [numOfPeople, setPeople] = useState(0);

  return (
    <form id="tip-box-container">
      <div id="calculate-box">
        <InputBox
          label="Bill"
          imageFile="./images/icon-dollar.svg"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
        <div>
          <p className="mb-2">Select Tip %</p>
          <div id="tip-sel-grid">
            <TipButton tipAmount={5} />
            <TipButton tipAmount={10} />
            <TipButton tipAmount={15} />
            <TipButton tipAmount={25} />
            <TipButton tipAmount={50} />
            <input
              type="Input"
              className="input-box"
              name="tip-custom"
              placeholder="Custom"
              onChange={(e) => {
                setCustomTip(e.target.value);
              }}
            />
          </div>
        </div>
        <InputBox
          label={"Number of people"}
          imageFile="./images/icon-person.svg"
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </div>
      <div id="summary">
        <CalculatedSummary
          bill={bill}
          tip={tip}
          customTip={customTip}
          numOfPeople={numOfPeople}
        />
        <input type="button" id="reset-button" value="RESET" name="reset" />
      </div>
    </form>
  );
};

export default Form;
