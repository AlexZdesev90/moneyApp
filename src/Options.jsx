import React from "react";
import { useAppContext } from "./Context";
import "./Options.css";

const Options = () => {
  const { setSelectedOpt } = useAppContext();
  return (
    <div style={{ marginTop: "1.5rem" }} className="option_container">
      <div className="option_period"
        onClick={(e) => setSelectedOpt(e.target.innerText)}
      >
        Daily
      </div>
      <div className="option_period"
        onClick={(e) => setSelectedOpt(e.target.innerText)}
      >
        Monthly
      </div>
      <div className="option_period"
        onClick={(e) => setSelectedOpt(e.target.innerText)}
      >
        Yearly
      </div>
    </div>
  );
};

export default Options;
