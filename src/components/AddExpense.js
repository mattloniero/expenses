import React from 'react'

const AddExpense = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" />
                </div>
                <button class="btn">Submit Expense</button>
            </form>
        </>
    )
}

export default AddExpense
