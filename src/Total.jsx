import React from "react";
import { useAppContext } from "./Context";
import './Total.css';

const Total = () => {
  const { bills, selectedOpt } = useAppContext();

  const changeOpt = (cost) => {
    const monthlyCost = Number.parseFloat(cost);
    switch (selectedOpt) {
      case "Dayly":
        return (monthlyCost * 12) / 365;
      case "Monthly":
        return monthlyCost;
      case "Yearly":
        return monthlyCost * 12;
      default:
        return 0;
    }
  };

  return (
    <div className="total">
      <div className="container-cost"><span className="cost">cost:</span>
        {selectedOpt}
      <div>
        {bills
          .reduce((acc, val) => {
            return val.isChecked ? changeOpt(val.monthMoney) + acc : acc;
          }, 0)
          .toFixed(2)}
        </div>
      </div>
      <div className="container-save"><span className="save">save:</span>
      {selectedOpt}
      <div>
        {bills
          .reduce((acc, val) => {
            return !val.isChecked ? changeOpt(val.monthMoney) + acc : acc;
          }, 0)
          .toFixed(2)}
        </div>
        </div>
    </div>
  );
};

export default Total;
