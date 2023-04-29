// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import Reducer from './Reducer';


// export default function Store(props) {
//  const store = createStore(Reducer);
//  return (
//    <Provider Store={Store}>
//      {props.children}
//    </Provider>
//  );
// }

import { createStore } from 'redux';

const initialState = {
  cart: [],
 
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        
      };
    default:
      return state;
  }
}

const Store = createStore(rootReducer);

export default Store;
