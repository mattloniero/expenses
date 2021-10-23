import React from 'react';
import Header from './components/Header';
import Expense from './components/Expense';
import TransactionList from './components/TransactionList';
import AddExpense from './components/AddExpense';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faHandHoldingUsd, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

import { GlobalProvider } from './context/GlobalState';

library.add(faDollarSign, faHandHoldingUsd, faTimes)

function App() {
  return (
    <GlobalProvider>
      <Header title="Expenses" />
      <Expense />
      <div className="container">
        <AddExpense title="Add expense" />
        <TransactionList title="Expenses" />
      </div>
    </GlobalProvider>
  );
}

export default App;
