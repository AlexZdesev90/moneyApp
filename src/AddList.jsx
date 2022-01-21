import React, { useContext } from 'react';
import { Context } from './Context';

const AddList = () => {

    const { bills, setEditMode, editBill } = useContext(Context);

    return (
        <div>
            
            {bills.map((el, idx) => {
                return <div key={idx}>
                    <input type="checkbox"
                        checked={el.isChecked}
                        onChange={() => editBill({
                            title: el.title,
                            monthMoney: el.cost,
                            isChecked: !el.isChecked
                        })}/>
                    <span>{idx + 1}</span>{el.title} - {el.monthMoney}
                </div>
            })}
            <h4 onClick={() => setEditMode(true)}>switch to edit mode</h4>
            
  </div>
    )
}

export default AddList;