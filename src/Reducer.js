// const initialState = {
//  products: [],
//  cart: []
// };

// function reducer(state = initialState, action) {
//  switch(action.type) {
//    case 'SET_PRODUCTS':
//      return {
//        ...state,
//        products: action.payload
//      };
//    case 'ADD_TO_CART':
//      return {
//        ...state,
//        cart: [...state.cart, action.payload]
//      };
//    case 'REMOVE_FROM_CART':
//      const index = state.cart.findIndex(item => item.id === action.payload.id);
//      let newCart = [...state.cart];
//      if (index >= 0) {
//        newCart.splice(index, 1);
//      }
//      return {
//        ...state,
//        cart: newCart
//      };
//    default:
//      return state;
//  }
// }

// export default reducer;