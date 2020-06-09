
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk, logger]

const reducer = (action, state = [{ name: "ahsan" }]) => {
    switch (action.type) {
        case "Get_Data":
            return state
        default:
            return state
    }
}

const store = createStore(
    { 
        reducer
    }
    , applyMiddleware(...middlewares)
)

export default store