import React, { useState } from "react";
import TipInputButton from "./TipInputButton";
import InputField from "./InputField";
import CalculatedSummary from "./SummaryDisplay";
import InputLabel from "./InputLabel";

const TipApp = () => {
  const setTips = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [activeTip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [numPeople, setPeople] = useState("");

  return (
    <div id="calculator-app">
      {/* Input */}
      <div id="inputs-container" className="w-[50%] h-full">
        <div>
          <InputLabel label="bill" />
          <InputField
            value={bill}
            imageUrl="./images/icon-dollar.svg"
            onChange={(e) => {
              setBill(e.target.value);
            }}
          />
        </div>
        {/* tip selection grid */}
        <div>
          <InputLabel label="Select Tip %" />
          <div className="grid grid-cols-3 gap-4">
            {setTips.map((value) => {
              return (
                <TipInputButton
                  key={value}
                  value={value}
                  activeTip={activeTip}
                  onClick={() => {
                    setTip(value);
                  }}
                />
              );
            })}
            <InputField
              placeholder="Custom"
              value={customTip}
              onChange={(e) => {
                setCustomTip(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <InputLabel label="Number of People" />
          <InputField
            value={numPeople}
            imageUrl="./images/icon-person.svg"
            onChange={(e) => {
              setPeople(e.target.value);
            }}
          />
        </div>
      </div>
      {/* Summary */}
      <div
        id="summary-container"
        className="flex flex-col justify-between w-[50%] h-full"
      >
        <div>
          <CalculatedSummary
            bill={bill}
            tip={activeTip}
            customTip={customTip}
            numOfPeople={numPeople}
          />
        </div>
        {/* reset button */}
        <input
          type="button"
          id="reset-button"
          value="RESET"
          onClick={() => {
            setBill("");
            setPeople("");
            setCustomTip(null);
            setTip(null);
          }}
        />
      </div>
    </div>
  );
};

export default TipApp;
