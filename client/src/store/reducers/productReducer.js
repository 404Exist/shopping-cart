import { GET_PRODUCTS, SIZE_FILTER, SORT_FILTER } from "../actions/types"

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload, savedProducts: action.payload}
    case SIZE_FILTER:
      return {...state, products: action.payload.products, size: action.payload.size}
    case SORT_FILTER:
      return {...state, products: action.payload.products, sort: action.payload.sort}
    default:
      return state;
  }
}