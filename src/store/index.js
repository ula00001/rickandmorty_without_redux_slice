import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charList from '../reducers/charList';
import singleChar from '../reducers/singleChar';
import randomChar from '../reducers/randomChar';
import ReduxThunk from 'redux-thunk';

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    })
  }

  return next(action);
}

const store = createStore(
  combineReducers({ charList: charList, singleChar: singleChar, randomChar: randomChar }),
  compose(applyMiddleware(ReduxThunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


);

export default store;