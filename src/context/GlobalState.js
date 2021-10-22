import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Movie Ticket', amount: -12 },
        { id: 2, text: 'Paycheck', amount: 4100 },
        { id: 3, text: 'Lunch', amount: -18 },
        { id: 4, text: 'Dividends', amount: 50 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions that make calls to the reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}