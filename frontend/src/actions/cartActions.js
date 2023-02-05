import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    LOAD_CART, SAVE_LOCAL, LOAD_LOCAL, INCREMENT, DECREMENT
} from '../types/cartTypes'
import axiosInstance from "../axios/axios";

export const addToCart = (product) => (dispatch) => {
    dispatch({type: ADD_TO_CART, payload: product})
}

export const removeFromCart = (product) => (dispatch) => {
    dispatch({type: REMOVE_FROM_CART, payload: product})
}

export const incrementProduct = (product) => (dispatch) => {
    dispatch({type: INCREMENT, payload: product})
}

export const decrementProduct = (product) => (dispatch) => {
    dispatch({type: DECREMENT, payload: product})
}


export const loadLocal = () => (dispatch) => {
    let data = localStorage.getItem("shoppingCart")
    dispatch({type: LOAD_LOCAL, payload: JSON.parse(data)})
}