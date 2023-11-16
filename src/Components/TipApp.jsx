import React, { useState } from "react";
import TipInputButton from "./TipInputButton";
import InputField from "./InputField";

const TipApp = () => {
  const setTips = [5, 10, 15, 25, 50];
  const [activeTip, setTip] = useState();

  return (
    <div id="calculator-app">
      {/* Input */}
      <div id="inputs-container" className="w-[50%] h-full">
        <InputField imageUrl="./images/icon-dollar.svg" />
        {/* tip selection grid */}
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
          <InputField placeholder="Custom" />
        </div>
        <InputField imageUrl="./images/icon-person.svg" />
      </div>
      {/* Summary */}
      <div
        id="summary-container"
        className="flex flex-col justify-between w-[50%] h-full"
      >
        <div></div>
        <input
          type="button"
          id="reset-button"
          value="RESET"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default TipApp;
