import { CREATE_ORDER, CLEAR_ORDER } from "../actions/types"

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {...state, order: action.payload}
    case CLEAR_ORDER:
      return {order: false}
    default:
      return state;
  }
}