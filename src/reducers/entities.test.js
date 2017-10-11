import deepFreeze from 'deep-freeze'

import {
  TRANSACTIONS_POPULATED,
  ACCOUNTS_POPULATED,
  CATEGORIES_POPULATED,
  TRANSACTION_INFO_POPULATED
} from '../actions/types'

import {
  transactions,
  categories,
  accounts,
  transactionsDateRange
} from './entities'

const payloadTransactions = [
  {
    accountId:"9c6afa54-0301-4df6-a1ad-b965b9abf325",
    transactionDate:"2016-03-18",
    description:"Overdraft Protection Fee - Pay as you go MAR/16/2016",
    amount:-5,
    withdrawal:5,
    runningBalance:2027.46,
    category:"BANK_FEE",
    transactionId:"d7853016-b74b-4afa-9dd7-6cf6a414b39e"
  },
  {
    accountId:"9c6afa54-0301-4df6-a1ad-b965b9abf325",
    transactionDate:"2016-03-18",
    description:"CANADA FED",
    amount:160,
    deposit:160,
    runningBalance:2032.46,
    category:"TAXES_GOVERNMENT_BENEFITS",
    transactionId:"1e24af8f-3ca0-4be0-9c2d-a639c9751f7f"
  }
]

const payloadCategories = [
  "ACCOMMODATIONS",
  "BANK_FEE",
  "BEAUTY",
  "CHARITY",
  "CHILDREN",
  "CLOTHING",
  "CONVENIENCE_STORE",
  "DEPARTMENT_STORE",
  "EDUCATION",
  "ELECTRONICS",
  "ENTERTAINMENT",
  "FINANCIAL_PRODUCT",
  "FITNESS",
  "GIFTS",
  "GROCERY",
  "HEALTH",
  "HOME",
  "INCOME",
  "PET",
  "PHARMACY",
  "RESTAURANT",
  "TAXES_GOVERNMENT_BENEFITS",
  "THRIFT_SHOP",
  "TRANSFER",
  "TRANSPORTATION",
  "UTILITIES_BILLS"
]

const accountsPayload = [
  {
    accountId:"4163ef9a-4181-4fdd-aa24-76fd2097c30c",
    institutionName:"Worldwide Savings Bank",
    accountName:"HIGH INTEREST TFSA SAVINGS ACCOUNT",
    transitNumber:"54685",
    accountNumber:"123456781",
    balance:67,
    balanceUpdated:"2017-02-22"
  },
  {
    accountId:"6408eb5b-e410-4b35-a549-f96d24c2df2a",
    institutionName:"Worldwide Savings Bank",
    accountName:"COMPANION SAVINGS ACCOUNT",
    transitNumber:"54685",
    accountNumber:"123456780",
    balance:14.1,
    balanceUpdated:"2017-02-22"
  }
]

const transactionsDateRangePayload = {
  end: "2016-03-18",
  start: "2015-12-21"
}

const reducerTest = (reducer, initial, action, desired) => {
  const after = reducer(deepFreeze(initial), deepFreeze(action))
  expect(after).toEqual(desired)
}

describe('categories', () => {
  it('CATEGORIES_POPULATED populate categories', () => {
    const initial = []
    const action = {
      type: CATEGORIES_POPULATED,
      categories: payloadCategories
    }
    reducerTest(categories, initial, action, action.categories)
  })
})

describe('transactions', () => {
  it('TRANSACTIONS_POPULATED populate categories', () => {
    const initial = []
    const action = {
      type: TRANSACTIONS_POPULATED,
      transactions: payloadTransactions
    }
    reducerTest(transactions, initial, action, action.transactions)
  })
})

describe('accounts', () => {
  it('ACCOUNTS_POPULATED populate accounts', () => {
    const initial = []
    const action = {
      type: ACCOUNTS_POPULATED,
      accounts: accountsPayload
    }
    reducerTest(accounts, initial, action, action.accounts)
  })
})

describe('transactionsDateRange', () => {
  it('TRANSACTION_INFO_POPULATED populate accounts', () => {
    const initial = []
    const action = {
      type: TRANSACTION_INFO_POPULATED,
      transactionsDateRange: transactionsDateRangePayload
    }
    reducerTest(transactionsDateRange, initial, action, action.transactionsDateRange)
  })
})
