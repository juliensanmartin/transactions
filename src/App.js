import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import TransactionsFetch from './components/transactions-fetch.component'
import logo from './transaction.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Transactions Manager</h1>
        </header>
        <Provider store={store}>
          <TransactionsFetch />
        </Provider>
      </div>
    );
  }
}

export default App;
