import React, { useState, useContext } from "react";
import { Context } from './Context';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  background: blue;
  color: black;
  border: 2px solid white;
  @media (min-width: 768px) { 
    padding: 1rem 2rem;
    width: 11rem;
  }
  
  @media (min-width: 1024px) { 
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }
  :hover {
    color: red;
  }
`

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
      <Button danger
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
      </Button>
    </div>
  );
};

export default Inputs;
