import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { ACTIONS } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const addItem = () => {
        dispatch({
            type: ACTIONS.ADD_ITEM,
            payload: {
                name: props.name,
                quantity: 1
            }
        })
    }
    const removeItem = () => {
        dispatch({
            type: ACTIONS.DEL_ITEM,
            payload: {
                name: props.name
            }
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{currency}{props.unitPrice}</td>
            <td>{currency}{props.quantity * props.unitPrice}</td>
            <td><button onClick={addItem}>ADD</button></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={removeItem}></FaTimesCircle></td>
        </tr>
    )
};

export default ExpenseItem;
