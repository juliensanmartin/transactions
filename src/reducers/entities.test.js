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

const reducerTest = (reducer, initial, action, desired) => {
  const after = reducer(deepFreeze(initial), deepFreeze(action))
  expect(after).toEqual(desired)
}

describe('categories', () => {
  it('CATEGORIES_POPULATED populate categories', () => {
    const initial = []
    const action = {
      type: CATEGORIES_POPULATED,
      payload: {
        categories: payloadCategories
      }
    }
    reducerTest(categories, initial, action, action.payload.categories)
  })
})

describe('transactions', () => {
  it('TRANSACTIONS_POPULATED populate categories', () => {
    const initial = []
    const action = {
      type: TRANSACTIONS_POPULATED,
      payload: {
        transactions: payloadTransactions
      }
    }
    reducerTest(transactions, initial, action, action.payload.transactions)
  })
})
