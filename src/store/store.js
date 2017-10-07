import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import entities from '../reducers/entities'
import ui from '../reducers/ui'

const appReducer = combineReducers({
	entities, ui
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
