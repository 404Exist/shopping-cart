import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"
import store from '../store';

export const addToCart = (dispatch, product) => {
  let payload = [...store.getState().cart.items];
  let isExistInCart = payload.find(item => item.id === product.id);
  if (!isExistInCart) payload.push({...product, qty: 1});
  else isExistInCart.qty++;
  dispatch({
    type: ADD_TO_CART,
    payload
  })
  localStorage.setItem('cart', JSON.stringify(payload));
}
export const removeFromCart = (dispatch, id) => {
  let payload = [...store.getState().cart.items].filter(item => item.id !== id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload
  })
  localStorage.setItem('cart', JSON.stringify(payload));
}
