import { createSelector } from 'reselect'

const getTransactions = state => state.entities.transactions
const getCategories = state => state.entities.categories
const getAccounts = state => state.entities.accounts

// const getVisibleMarkers = createSelector(
//   [ getCar2GoVisibility, getEvoVisibility, getBusVisibility, getMobiVisibility, getModoVisibility, getVisibleCars ],
//   (car2goVisible, evoVisible, busVisibility, mobiVisibility, modoVisibility, markers) => {
//     let result = markers
//     if (!car2goVisible) {
//       result = reject(result, {type:'Car 2 Go'})
//     }
//     if (!evoVisible) {
//       result = reject(result, {type:'Evo'})
//     }
//     if (!busVisibility) {
//       result = reject(result, {type:'Bus'})
//     }
//     if (!mobiVisibility) {
//       result = reject(result, {type:'Mobi Bike'})
//     }
//     if (!modoVisibility) {
//       result = reject(result, {type:'Modo'})
//     }
//     return result
//   }
// )

export {
  getTransactions,
  getCategories,
  getAccounts
}
