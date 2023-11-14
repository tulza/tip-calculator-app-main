import React, { useState, useRef } from "react";
import InputBox from "./InputBox";
import TipButton from "./TipButton";
import CalculatedSummary from "./SummaryDisplay";

const Form = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [numOfPeople, setPeople] = useState(0);
  const tipRange = [5, 10, 15, 25, 50];

  return (
    <form id="tip-box-container">
      <div id="calculate-box">
        <InputBox
          label="Bill"
          imageFile="./images/icon-dollar.svg"
          onChange={(e) => {
            setBill(e.target.value);
          }}
          errFunc={(e) => {
            if (e.target.value <= 0) {
              return "can't be zero or less";
            }
          }}
        />
        <div>
          <p className="mb-2">Select Tip %</p>
          <div id="tip-sel-grid">

            {tipRange.map((value) => {
              return (
                <TipButton
                  key={value}
                  tipAmount={value}
                  onClick={() => {
                    setTip(value);
                  }}
                />
              );
            })}

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
      <div id="summary" className="w-full">
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
