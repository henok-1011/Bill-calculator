import React from "react";
import "./infoCollection.css";

export default function InfoCollection({
  bill,
  setBill,
  people,
  setPeople,
  tipPercent,
  setTipPercent
}) {
  return (
    <div className="collector__container">
      <div className="input bill">
        <h5>Bill</h5>
        <input
          placeholder=""
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="tip__selector">
        <h5>Select Tip %</h5>
        <div className="tip__button">
          <button
            onClick={() => {
              setTipPercent(0.05);
            }}
          >
            5%
          </button>
          <button
            onClick={() => {
              setTipPercent(0.1);
            }}
          >
            10%
          </button>
          <button
            onClick={() => {
              setTipPercent(0.15);
            }}
          >
            15%
          </button>
          <button
            onClick={() => {
              setTipPercent(0.25);
            }}
          >
            25%
          </button>
          <button
            onClick={() => {
              setTipPercent(0.5);
            }}
          >
            50%
          </button>
          <input
            onChange={(e) => {
              setTipPercent(e.target.value / 100);
            }}
            placeholder="Coustome"
            type="text"
          />
        </div>
      </div>
      <div className="input bill">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>Number of People</h5>
          <h5
            style={{
              color: "red",
              display: bill !== 0 && people === 0 ? "inline" : "none"
            }}
          >
            Can't be zero
          </h5>
        </div>

        <input
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          type="text"
        />
      </div>
    </div>
  );
}
