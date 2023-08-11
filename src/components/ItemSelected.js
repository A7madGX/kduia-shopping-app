import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { ACTIONS } from '../context/AppContext';

const ItemSelected = () => {
    const [name, setName] = useState(null);
    const [action, setAction] = useState(null);
    const [quantity, setQuantity] = useState('');

    const { dispatch } = useContext(AppContext)

    const handleForm = () => {
        if (action === "Reduce") {
            dispatch({
                type: ACTIONS.RED_ITEM,
                payload: {
                    name: name,
                    quantity: parseInt(quantity)
                }
            })
        } else {
                dispatch({
                    type: ACTIONS.ADD_ITEM,
                    payload: {
                        name: name,
                        quantity: parseInt(quantity)
                    }
                })
            }
    }
    
    return (
        <div>
            <h1>Add Items</h1>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Shirt" name="Shirt"> Shirt</option>
                            <option value="Dress" name="Dress">Dress</option>
                            <option value="Jeans" name="Jeans">Jeans</option>
                            <option value="Dinner set" name="Dinner set">Dinner set</option>
                            <option value="Bags" name="Bags">Bags</option>
                    </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                    </select>  
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{size: 10}}
                        onChange={(event) => setQuantity(event.target.value)}>
                    </input>
                    <button className="btn btn-primary" onClick={handleForm} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                    </div>
            </div>
        </div>
    )

};

export default ItemSelected;
