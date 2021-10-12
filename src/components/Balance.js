import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

const Balance = (props) => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = (amounts.reduce((acc, item) => (acc += item), 0)).toFixed(2);
    return (
        <div className="balance">
            <h2 className="balance-title">{props.title}</h2>
            <div className="balance-total">${total}</div>
        </div>
    )
}

export default Balance
