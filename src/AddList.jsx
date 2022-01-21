import React, { useContext } from 'react';
import { Context } from './Context';

const AddList = () => {

    const {bills} = useContext(Context)

    return (
        <div>
            {bills.map((el, idx) => {
                return <div key={idx}>
                    <span>{idx + 1}</span>{el.title} - {el.monthMoney}
                </div>
            })}
            
  </div>
    )
}

export default AddList;