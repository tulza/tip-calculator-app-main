function App() {
  return (
    <>
      <div id="tip-box-container">
        <div id="tip-sel-box">
          <InputBox label={"Bill"} />
          <p>Select Tip %</p>
          <form id="tip-sel-grid">
            <TipButton tipAmount={5} />
            <TipButton tipAmount={10} />
            <TipButton tipAmount={15} />
            <TipButton tipAmount={25} />
            <TipButton tipAmount={50} />
          </form>
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
      <input type="button" className="tip-button" value={`${tipAmount}%`} />
    </>
  );
};

const InputBox = ({ label }) => {
  return (
    <>
      <div className="input-box-wrapper">
        <img src="logo" />
        <input type="Input" className="tip-button" />
      </div>
    </>
  );
};

const Test = () => {
  return <div className="bg-black" />;
};

export default App;
