import React, { useState } from "react";
import TipInputButton from "./TipInputButton";
import InputField from "./InputField";
import CalculatedSummary from "./SummaryDisplay";
import InputLabel from "./InputLabel";

const error1 = (people) => {
  console.log(people);
  if (people === "") {
    return "";
  }
  if (!Number.isInteger(parseFloat(people))) {
    return "Must be an integer";
  } else if (parseInt(people) <= 0) {
    return "Can't be 0 or less";
  } else {
    return "";
  }
};

const error2 = (people) => {
  console.log(people);
  if (people === "" || people === "0") {
    return "";
  }
  if (parseInt(people) < 0) {
    return "Can't be less than 0";
  } else if (!parseFloat(people)) {
    return "Must a number";
  } else {
    return "";
  }
};

const TipApp = () => {
  const setTips = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [activeTip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [numPeople, setPeople] = useState("");

  const peopleError = error1(numPeople);
  const billError = error2(bill);
  console.log(peopleError);
  return (
    <div id="calculator-app">
      {/* Input */}
      <div id="inputs-container" className="w-[50%] h-full">
        {/* bill */}
        <div>
          <InputLabel label="bill" error={billError} />
          <InputField
            value={bill}
            imageUrl="./images/icon-dollar.svg"
            onChange={(e) => {
              setBill(e.target.value);
            }}
            error={billError}
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
                    setCustomTip("");
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
        {/* number of people */}
        <div>
          <InputLabel label="Number of People" error={peopleError} />
          <InputField
            value={numPeople}
            imageUrl="./images/icon-person.svg"
            onChange={(e) => {
              setPeople(e.target.value);
            }}
            error={Boolean(peopleError)}
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
            bill={billError ? null : bill}
            tip={activeTip}
            customTip={customTip}
            numOfPeople={peopleError ? null : numPeople}
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
            setCustomTip("");
            setTip(null);
          }}
        />
      </div>
    </div>
  );
};

export default TipApp;
