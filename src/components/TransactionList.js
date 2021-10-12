import React, {useContext } from 'react'
import Transaction from "./Transaction";

import { GlobalContext } from '../context/GlobalState';

const TransactionList = (props) => {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3 className="section-header">{props.title}</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} />
                    ))
                }
                
            </ul>
        </>
    )
}

export default TransactionList
