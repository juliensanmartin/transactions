This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Scripts

## Installation

`npm install`

## Run

`npm start`

Then go to `http://localhost:3000` to see the App

## Tests

`npm test`

# Architecture

## Stack

React
Redux
Reselect
Lodash

For the test:
Jest
Enzyme

## Flow

React dumb component (UI) => (props) => React smart component - containers (connected to redux store) => (react-redux, dispatch action)
=> Redux Action => Endpoints => (payload) => Redux Action => (dispatch action with payload and type) => Reducers => (populate the store)
=> Selectors (filter result based on store) => (selected data) => React smart component - containers => (react-redux, connect, mapStateToProps) => React dumb component re-rendering (UI)

## Folder hierarchy

### /actions
Contains actions related to endpoint as well as actions related to ui interactions
`selectors.js` => interface between redux sotre and react smart component

### /components
Contains all the React components : the one with `containers` are smart component connected to redux store, the other one are responsible of interacting with the user

### /infrastructure
Endpoints used by the app

### /reducers
Reducers functions

### /store
Top level redux store composed of all the reducers
