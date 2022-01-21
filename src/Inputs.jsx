import React, { useState, useContext } from "react";
import { Context } from './Context';


const Inputs = () => {
  const [item, setItem] = useState("Phone");
  const [cost, setCost] = useState(75);

    const {updateObject} = useContext(Context);
    
  let clearForm = () => {
    setItem("");
    setCost("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="item"
        value={item}
        onChange={(e) => setItem(e.target.value)
        }
      />
      <input
        type="number"
        placeholder="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        
      />
      <button
        onClick={() => {
          updateObject({
            title: item,
            monthMoney: cost,
            isChecked: true 
          });
          clearForm();
        }}
      >
        add
      </button>
    </div>
  );
};

export default Inputs;
