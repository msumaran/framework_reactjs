import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {loadState, saveState} from './localstorage'



const middleware = [thunk];


const initialData = loadState()

// const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ) );

// export default store;

const store = createStore(
  rootReducer,
  initialData,
  compose(
    applyMiddleware(...middleware)
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe( function () {
  saveState(store.getState())
})
export default store;