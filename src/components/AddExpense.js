import React, { useState, useContext } from 'react'
 
import { GlobalContext } from '../context/GlobalState';

const AddExpense = (props) => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const [expenseType, setExpenseType] = useState('expense');
    const { addTransaction } = useContext(GlobalContext);
    function handleOnSubmit(e) {
        e.preventDefault();
        let newAmount = 0;
        if (expenseType === 'expense') {
            newAmount = (amount * -1);
        } else if (expenseType === 'income') {
            newAmount = +amount;
        }
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: newAmount
        }
        setAmount(0);
        setText('');
        setExpenseType('expense')
        addTransaction(newTransaction);
    }
    function handleOnChange(e) {
        setExpenseType(e.target.value);
    }
    return (
        <>
            <h3 className="section-header">{props.title}</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Note</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="radios-horizontal">
                    <div className="form-control">
                        <label htmlFor="expense-transaction">Expense</label>
                        <input type="radio" check="true" name="expenseType" value="expense" onChange={(e) => handleOnChange(e)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="income-transaction">Income</label>
                        <input type="radio" name="expenseType" value="income" onChange={(e) => handleOnChange(e)} />
                    </div>
                </div>
                <button className="btn">Submit Expense</button>
            </form>
        </>
    )
}

export default AddExpense
