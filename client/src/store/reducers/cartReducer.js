import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types"

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || []
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, items: action.payload}
    case REMOVE_FROM_CART:
      return {...state, items: action.payload}
    default:
      return state;
  }
}