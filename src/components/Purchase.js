import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ACTIONS } from '../context/AppContext';

const Purchase = () => {
    const { balance, cartValue, dispatch } = useContext(AppContext);

    const handlePurchase = () => {
        if (cartValue > balance) {
            alert('No Sufficient Balance');
        } else {
            let newBalance = balance - cartValue;
            dispatch({
                type: ACTIONS.PUR_ITEMS,
                payload: {
                    balance: newBalance
                }
            })
            alert('Purchase Completed');
        }
    }

    return (
        <div style={{marginTop: '5em'}}>
            <button type="button" className="btn btn-outline-danger" onClick={handlePurchase}>Purchase</button>
        </div>
    )
};

export default Purchase;
