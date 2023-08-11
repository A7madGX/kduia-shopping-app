import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Items Price</th>
                    <th scope="col">Add</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((item) => {
                    return <ExpenseItem key={item.name} name={item.name} quantity={item.quantity} unitPrice={item.unitPrice}/>
                })}
            </tbody>
        </table>
    )
};

export default ExpenseList;
