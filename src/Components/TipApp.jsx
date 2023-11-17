import React, { useState } from "react";
import TipInputButton from "./TipInputButton";
import InputField from "./InputField";
import CalculatedSummary from "./SummaryDisplay";
import InputLabel from "./InputLabel";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";
import clsx from "clsx";

const error1 = (people) => {
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
  if (people === "" || people === "0") {
    return "";
  }
  if (parseInt(people) < 0) {
    return "Can't be less than 0";
  } else {
    return "";
  }
};

const TipApp = () => {
  const setTips = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [numPeople, setPeople] = useState("");

  const peopleError = error1(numPeople);
  const billError = error2(bill);
  return (
    <div id="calculator-app">
      {/* Input */}
      <div id="inputs-container">
        {/* bill */}
        <div>
          <InputLabel label="bill" error={billError} />
          <InputField
            value={bill}
            imageUrl={iconDollar}
            placeholder="0"
            onChange={(e) => {
              setBill(e.target.value);
            }}
            error={billError}
          />
        </div>
        {/* tip selection grid */}
        <div>
          <InputLabel label="Select Tip %" />
          <div id="tip-grid" className="grid grid-cols-3 gap-4">
            {setTips.map((value) => {
              return (
                <TipInputButton
                  key={value}
                  value={value}
                  activeTip={tip}
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
            imageUrl={iconPerson}
            placeholder="0"
            onChange={(e) => {
              setPeople(e.target.value);
            }}
            error={Boolean(peopleError)}
          />
        </div>
      </div>
      {/* Summary */}
      <div id="summary-container" className="flex flex-col justify-between">
        <div>
          <CalculatedSummary
            bill={billError ? null : bill}
            tip={tip}
            customTip={customTip}
            numOfPeople={peopleError ? null : numPeople}
          />
        </div>
        {/* reset button */}
        <input
          type="button"
          id={clsx(
            bill || tip || customTip || numPeople
              ? "reset-button"
              : "reset-button-disabled"
          )}
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
