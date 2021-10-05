import React from 'react'

const TransactionList = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList
