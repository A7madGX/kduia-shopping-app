import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ACTIONS } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (cur) => {
        dispatch({
            type: ACTIONS.ADD_LOC,
            payload: {
                currency: cur
            }
        })
    }

    return (
        <div className='alert alert-secondary'>
            Location: 
            <select 
            name='locations' 
            onChange={(e) => {changeLocation(e.target.value)}}
            style={{marginLeft: '1em'}}
            >
                <option value={'£'}>Uk</option>
                <option value={'₹'}>India</option>
                <option value={'€'}>Europe</option>
                <option value={'CAD'}>Canada</option>
            </select>
        </div>
    )
};

export default Location;