import React, { useContext } from 'react';
import { Context } from './Context';

const Total = () => {
    const { bills, selectedOpt } = useContext(Context);

    const changeOpt = (cost) => {
        const monthlyCost = Number.parseFloat(cost);
        switch (selectedOpt) {
            case 'Dayly':
                return monthlyCost * 12 / 365;
            case 'Monthly':
                return monthlyCost;
            case 'Yearly':
                return monthlyCost * 12;
             default:
                return 0;
        }
    }
    

    return (
        <div style={{marginBottom: '1rem'}}>
           <div>
                {bills.reduce((acc, val) => {
                    return val.isChecked ?
                        changeOpt(val.monthMoney) + acc : acc;

                        
                }, 0).toFixed(2)}
                </div>
        </div>
    )
}

export default Total;