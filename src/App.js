import React from 'react';
import Header from './components/Header';
import Expense from './components/Expense';
import TransactionList from './components/TransactionList';
import AddExpense from './components/AddExpense';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

import { GlobalProvider } from './context/GlobalState';

library.add(faDollarSign, faHandHoldingUsd)

function App() {
  return (
    <GlobalProvider>
      <Header title="Expenses" />
      <div className="container">
        <Expense />
        <TransactionList title="Expenses" />
        <AddExpense title="Add expense" />
      </div>
    </GlobalProvider>
  );
}

export default App;
