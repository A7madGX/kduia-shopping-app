import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
    const { balance,currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            Balance: {currency}{balance}
        </div>
    )
};

export default Balance;
