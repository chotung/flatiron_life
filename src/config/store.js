import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import eventReducer from '../features/event/reducer'

//keys access store state
const rootReducer  =  combineReducers({
  player: playerReducer,
  map: mapReducer,
  event: eventReducer,
})


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
