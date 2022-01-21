import React, { useState, useEffect, useContext } from "react";

const Context = React.createContext();

const AppProvider = ({ children }) => {

    const [bills, setBills] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedOpt, setSelectedOpt] = useState('Monthly')

    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('myBill')) || []);
    }, [setBills])

    let editBill = (billToEdit) => {
        const newBill = bills.filter((el) => el.title !== billToEdit.title)
        let updateEdit = [
            ...newBill,
            billToEdit
        ];
        localStorage.setItem('myBill', JSON.stringify(updateEdit));
        setBills(updateEdit);
    }

    let deleted = (billToDelete) => {
        let newBillsAfterDelete = bills.filter(bill => bill.title !== billToDelete.title);
        localStorage.setItem('myBill', JSON.stringify(newBillsAfterDelete));
        setBills(newBillsAfterDelete);
    }

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
        updateObject,
        editMode,
        setEditMode,
        selectedOpt,
        setSelectedOpt,
        editBill,
        deleted
    }}>
        {children}
    </Context.Provider>;
};


export {
    Context,
    AppProvider
}