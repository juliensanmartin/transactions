import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import entities from '../reducers/entities'

const appReducer = combineReducers({
	entities
})

const enhancer = compose(
	applyMiddleware(
		thunk,
		createLogger({
        level: 'info',
        collapsed: true
    })
	)
)

const store = createStore(appReducer, enhancer)

export default store
