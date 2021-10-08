import React from 'react';
import Header from './components/Header';
import Expense from './components/Expense';
import TransactionList from './components/TransactionList';
import AddExpense from './components/AddExpense';
import "./App.css";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header title="Expenses" />
      <div className="container">
        
        <div className="inc-exp-container">
          <Expense />
        </div>
        <TransactionList title="Expenses" />
        <AddExpense title="Add expense" />
      </div>
    </GlobalProvider>
  );
}

export default App;
