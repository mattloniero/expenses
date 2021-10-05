import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Expense from './components/Expense';
import TransactionList from './components/TransactionList';
import AddExpense from './components/AddExpense';
import "./App.css";

function App() {
  return (
    <main>
      <Header title="Expenses" />
      <div className="container">
        <Balance title="Balance" />
        <div className="inc-exp-container">
          <Expense />
        </div>
        <TransactionList title="Expenses" />
        <AddExpense title="Add expense" />
      </div>
    </main>
  );
}

export default App;
