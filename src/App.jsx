function App() {
  return (
    <>
      <div id="tip-box-container">
        <div id="tip-sel-box">
          <InputBox label={"Bill"} />
          <p>Select Tip %</p>
          <div id="tip-sel-grid">
            <TipButton tipAmount={5} />
            <TipButton tipAmount={10} />
            <TipButton tipAmount={15} />
            <TipButton tipAmount={25} />
            <TipButton tipAmount={50} />
          </div>
          <InputBox label={"Number of people"} />
        </div>
        <div id="summary">
          Custom Number of People Tip Amount / person Total / person Reset
          <InputBox label={""} />
        </div>
      </div>

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
      <div className="tip-button">{tipAmount}%</div>
    </>
  );
};

const InputBox = ({ label }, { id }) => {
  return (
    <>
      <p>{label}</p>
      <div className="input-box">
        <span>$</span>
        <span>142.5</span>
      </div>
    </>
  );
};

export default App;
