import React from 'react';
import './App.css';

import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransactionHisory} from './components/TransactionHistory'
import {AddTansaction} from './components/AddTransaction'

import {GlobalProvider} from './components/context/GlobalState'

function App() {
  return (
    <GlobalProvider >
     <Header/>
     <div className="container">
       <Balance/>
       <AccountSummary/>
       <TransactionHisory />
       <AddTansaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
