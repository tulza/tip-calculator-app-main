function App() {
  return (
    <>
      <form id="tip-box-container">
        <div id="calculate-box">
          <InputBox label="Bill" imageFile="./images/icon-dollar.svg" />
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
                formName="tip-custom"
                placeholder="Custom"
              />
            </div>
          </div>
          <InputBox
            label={"Number of people"}
            imageFile="./images/icon-person.svg"
          />
        </div>
        <div id="summary">
          <SummaryDisplay label="Tip Amount" perLabel="person" />
          <SummaryDisplay label="Total" perLabel="person" />
          <input
            type="button"
            id="reset-button"
            value="RESET"
            formName="reset"
          />
        </div>
      </form>

      {/* default frontend mentor code */}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Tulza</a>.
      </div>
    </>
  );
}

const TipButton = ({ tipAmount }) => {
  return (
    <>
      <input
        type="button"
        className="tip-button"
        value={`${tipAmount}%`}
        formName={`tip-${tipAmount}`}
      />
    </>
  );
};

const InputBox = ({ label, imageFile, formName }) => {
  return (
    <>
      <div>
        <p className="flex justify-between mb-2">
          <span>{label}</span> <span id="input-out-error">Err</span>
        </p>
        <div className="flex">
          <img className="input-logo" src={imageFile} />
          <input type="Input" className="input-box" formName={formName} />
        </div>
      </div>
    </>
  );
};

const SummaryDisplay = ({ label, perLabel, outID }) => {
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <p className="text-summary-label">{label}</p>
        <p className="text-summary-perLabel">/ {perLabel}</p>
      </div>
      <span className="text-summary-total text-[50px]">
        $<span id="outID">0.00</span>
      </span>
    </div>
  );
};

export default App;
