import { useState } from "react";
import "./styles.css";
import InfoCollection from "./components/InfoCollection";
import Result from "./components/Result";

export default function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  return (
    <div className="container">
      <h1 className="top__ttl">
        SPLI
        <br />
        TTER
      </h1>

      <div className="App">
        <InfoCollection
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
        />
        <Result
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
        />
      </div>
    </div>
  );
}
