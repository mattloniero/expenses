import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className="expense-item" key={props.transaction.id}>
            <div className={props.transaction.amount < 0 ? `minus` : `plus`}>{props.transaction.amount < 0 ? <FontAwesomeIcon icon="hand-holding-usd" /> : <FontAwesomeIcon icon="dollar-sign" /> }</div>
            <div className="expense-item--note">{props.transaction.text}</div>
            <div className="expense-item--amount">${Math.abs(props.transaction.amount)}</div>
            <button className="delete-btn" onClick={() => deleteTransaction(props.transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
