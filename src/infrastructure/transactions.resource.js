export const getTransactions = () => {
  return fetch('http://demo7235469.mockable.io/transactions')
    .then(response => response.json())
    .then(responseJson => responseJson)
}
