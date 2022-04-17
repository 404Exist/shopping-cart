import { GET_PRODUCTS, SIZE_FILTER, SORT_FILTER } from "./types"
import store from '../store';

export const getProducts = (dispatch) => {
    fetch('/api/products').then(res => res.json()).then(data => {
      dispatch({
        type: GET_PRODUCTS,
        payload: data
      })
    })
}

export const sizeFilter = (dispatch, size) => {
  const { savedProducts } = store.getState().products;
  let filterdProducts = [...savedProducts].filter(product => product.sizes.includes(size));
  if (size === "ALL") filterdProducts = [...savedProducts];
  dispatch({
    type: SIZE_FILTER,
    payload: {
      size,
      products: filterdProducts
    }
  })
}

export const sortFilter = (dispatch, sort) => {
  const { products } = store.getState().products;
  let sortedProducts = [...products].sort((a, b) => {
    if (sort === "latest") return a.id < b.id ? 1 : -1;
    if (sort === "lowest") return a.price - b.price;
    return b.price - a.price;
  });
  dispatch({
    type: SORT_FILTER,
    payload: {
      sort,
      products: sortedProducts
    }
  })
}