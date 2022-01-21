import React, { useContext } from 'react';
import { Context } from './Context';

const Edit = () => {

    const { bills, setEditMode,  editBill } = useContext(Context);

    return (<div>
        
        {bills.map((bill, idx) => {
            return <div key={idx}>
                
                <span>{bill.title}</span>&nbsp;
                <input type="number"
                    value={bill.monthMoney}/>
                <button onChange={(e) => editBill({
                    title: bill.title,
                    monthMoney: e.target.value,
                    isEdit: bill.isEdit
            })}>delete</button>
            </div>
             
        })}
        <h4 onClick={() => setEditMode(false)}>switch to normal mode</h4>
    </div>)
}

export default Edit;