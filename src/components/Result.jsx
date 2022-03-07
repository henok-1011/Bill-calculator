import React from "react";
import "./result.css";

export default function Result({
  bill,
  setBill,
  people,
  setPeople,
  tipPercent,
  setTipPercent
}) {
  const tipPerPerson = parseFloat((bill * tipPercent) / people).toFixed(2);
  const price = parseFloat(bill / people).toFixed(2);
  const totalPerPerson = parseFloat(+price + +tipPerPerson).toFixed(2);
  const reset = () => {
    setBill(0);
    setPeople(0);
    setTipPercent(0);
  };
  return (
    <div className="result__container">
      <div>
        <div className="calculation">
          <div style={{ marginRigth: "20px" }}>
            <h4>Tip Amount</h4>
            <h6 style={{ color: "hsl(186, 14%, 43%)" }}>/ person</h6>
          </div>
          <h1 style={{ marginLeft: "100px", color: "hsl(172, 67%, 45%)" }}>
            ${people && bill ? tipPerPerson : 0}
          </h1>
        </div>

        <div className="calculation">
          <div style={{ marginRigth: "20px" }}>
            <h4>Total </h4>
            <h6 style={{ color: "hsl(186, 14%, 43%)" }}>/ person</h6>
          </div>
          <h1 style={{ marginLeft: "100px", color: "hsl(172, 67%, 45%)" }}>
            ${people && bill ? totalPerPerson : 0}
          </h1>
        </div>
      </div>
      <button
        style={{
          backgroundColor:
            people === 0 ? "hsl(185, 41%, 84%)" : "hsl(172, 67%, 45%)"
        }}
        onClick={reset}
        className="reset__button"
      >
        Reset
      </button>
    </div>
  );
}
