import React from "react";
import { useAppContext } from "./Context";
import './AddList.css';

const AddList = () => {
  const { bills, setEditMode, editBill } = useAppContext();

  return (
    <div className="list">
      {bills.map((el, idx) => {
        return (
          <div className="bill-item" key={idx}>
            <input
              type="checkbox"
              checked={el.isChecked}
              onChange={() =>
                editBill({
                  title: el.title,
                  monthMoney: el.monthMoney,
                  isChecked: !el.isChecked
                })
              }
            />
            <span>{idx + 1}</span>
            {el.title} - {el.monthMoney}
          </div>
        );
      })}
      <h4 className="neonEdit" onClick={() => setEditMode(true)}>switch to edit mode</h4>
    </div>
  );
};

export default AddList;
