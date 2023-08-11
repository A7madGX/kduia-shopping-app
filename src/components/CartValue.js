import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { cartValue,currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            Cart Value: {currency}{cartValue}
        </div>
    )
};

export default CartValue;
