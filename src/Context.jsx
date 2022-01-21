import React, { useState, useEffect, useContext } from "react";

const Context = React.createContext();

const AppProvider = ({ children }) => {

    const [bills, setBills] = useState([]);

    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('myBill')) || []);
    }, [setBills])

    let updateObject = (bill) => {
        let newArr =
            [
                ...bills,
                bill
            ];
        localStorage.setItem('myBill', JSON.stringify(newArr));
        setBills(newArr);
    }

    return <Context.Provider value={{
        bills,
        updateObject
    }}>
        {children}
    </Context.Provider>;
};


export {
    Context,
    AppProvider
}