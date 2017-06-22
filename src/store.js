import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers';

const attachStateToAction = store => next => action =>
  next({...action, state: store.getState()})

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    attachStateToAction
  )
)

export default store
