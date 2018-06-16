import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import fetchMiddleware from 'middleware/fetch-middleware';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, fetchMiddleware),
  );

  return store;
}

export default configureStore