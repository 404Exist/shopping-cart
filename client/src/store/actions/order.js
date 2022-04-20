import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "./types"

export const createOrder = (dispatch, order) => {
  fetch('/api/orders', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  }).then(res => res.json()).then(payload => {
    dispatch({
      type: CREATE_ORDER,
      payload
    });
    localStorage.clear('cart');
    dispatch({type: CLEAR_CART});
  }).catch(err => console.log(err))
  
}
export const clearOrder = (dispatch) => {
  dispatch({type: CLEAR_ORDER})
}
