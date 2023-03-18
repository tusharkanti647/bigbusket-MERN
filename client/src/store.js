import { createStore, applyMiddleware } from 'redux';
//import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from './redux/reducers/mainReducer';

//import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

// const store = createStore(
//     rootreducer,
//     composeWithDevTools(applyMiddleware(...middleware));
// )

const store = createStore(
    rootreducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );

  export default store;