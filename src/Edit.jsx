import React from "react";
import { useAppContext } from "./Context";
import './Edit.css';

const Edit = () => {
  const { bills, setEditMode, editBill, deleted } = useAppContext()

  return (
    <div className="edit">
      {bills.map((bill, idx) => {
        return (
          <div className="item" key={idx}>
            <span>{bill.title}</span>
            <input
              type="number"
              value={bill.monthMoney}
              onChange={(e) =>
                editBill({
                  title: bill.title,
                  monthMoney: e.target.value,
                  isEdit: bill.isEdit
                })
              }
            />
            <button onClick={() => deleted(bill)}>delete</button>
          </div>
  
        );
      })}
      <h4 className="neon" onClick={() => setEditMode(false)}>switch to normal mode</h4>
    </div>
  );
};

export default Edit;
