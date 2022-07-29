import React, { useState } from "react";
import { useAppContext } from "./Context";
import styled from "styled-components";
import './Inputs.css';

const Button = styled.div`
  position:absolute;
  right: 0px;
  top: 47px;
  color: lightcyan;
  font-weight: 600;
  width: 30px;
  height: 40px;  
  cursor: pointer; 
  text-align: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  :hover {
    color: rebeccapurple;
  }
`;


const Inputs = () => {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState(null);
  
  const { updateObject } = useAppContext();
  
  const validate = () => {
    const costValid = cost && Number.parseFloat(cost);
    const itemValid = item && item.split("").find(char => char !== " ");
    return costValid && itemValid;
  }

  let clearForm = () => {
    setItem("");
    setCost("");
  };

  return (
    <div className="container_inputs">
      <input
        type="text"
        placeholder="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <Button
        onClick={() => {
          if (validate()) {
            updateObject({
              title: item,
              monthMoney: cost,
              isChecked: true
            });
            clearForm();
          }
        }}
      >ADD
      </Button>
    </div>
  );
};

export default Inputs;
