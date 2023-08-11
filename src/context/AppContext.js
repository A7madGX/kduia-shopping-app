import React, { createContext, useReducer } from 'react';

export const ACTIONS = {
    ADD_ITEM: 'add_item',
    RED_ITEM: 'red_item',
    DEL_ITEM: 'del_item',
    ADD_LOC: 'add_loc',
    PUR_ITEMS: 'pur_items'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            state.expenses.map((item) => {
                if (item.name === action.payload.name) {
                    item.quantity = item.quantity + action.payload.quantity;
                    item.itemsPrice = item.quantity * item.unitPrice;
                    console.log(item.quantity);
                }
                return item;
            })
            action.type = 'DONE';
            return {...state}
        
        case ACTIONS.RED_ITEM:
            state.expenses.map((item) => {
                if (item.name === action.payload.name) {
                    item.quantity = (item.quantity < action.payload.quantity ) ? 0 : item.quantity - action.payload.quantity;
                    item.itemsPrice = item.quantity * item.unitPrice;
                }
                return item;
            })
            action.type = 'DONE';
            return {...state}
        
        case ACTIONS.DEL_ITEM:
            state.expenses.map((item) => {
                if (item.name === action.payload.name) {
                    item.quantity = 0;
                    item.itemsPrice = 0;
                }
                return item;
            })
            action.type = 'DONE';
            return {...state}

        case ACTIONS.ADD_LOC:
            state.currency = action.payload.currency
            action.type = 'DONE';
            return {...state}

        case ACTIONS.PUR_ITEMS:
            return {...resetState , balance: action.payload.balance, currency: state.currency}
    
        default:
            return state;
    }

}

const InitialState = {
    balance: 5000,
    expenses: [
        {name: 'Shirt', quantity: 0, unitPrice: 500, itemsPrice: 0},
        {name: 'Jeans', quantity: 0, unitPrice: 300, itemsPrice: 0},
        {name: 'Dress', quantity: 0, unitPrice: 400, itemsPrice: 0},
        {name: 'Dinner Set', quantity: 0, unitPrice: 600, itemsPrice: 0},
        {name: 'Bags', quantity: 0, unitPrice: 200, itemsPrice: 0},
    ],
    currency: '£'
}
const resetState = {
    balance: 0,
    expenses: [
        {name: 'Shirt', quantity: 0, unitPrice: 500, itemsPrice: 0},
        {name: 'Jeans', quantity: 0, unitPrice: 300, itemsPrice: 0},
        {name: 'Dress', quantity: 0, unitPrice: 400, itemsPrice: 0},
        {name: 'Dinner Set', quantity: 0, unitPrice: 600, itemsPrice: 0},
        {name: 'Bags', quantity: 0, unitPrice: 200, itemsPrice: 0},
    ],
    currency: ''
}


export const AppContext = createContext();

const AppProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, InitialState);
    let cartValue = 0;
    if (state.expenses) {
        cartValue = state.expenses.reduce((total, item) => {
            return (total + item.itemsPrice)
        }, 0)
    }

    return (
        <AppContext.Provider 
        value={{
            dispatch,
            balance: state.balance,
            cartValue: cartValue,
            expenses: state.expenses,
            currency: state.currency
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;