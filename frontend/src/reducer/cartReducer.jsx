import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    LOAD_CART, SAVE_LOCAL, LOAD_LOCAL, INCREMENT, DECREMENT
} from '../types/cartTypes'

const initialState = {
    products: [],
    qty: 0,
    price: 0,
}


export const cartReducer = (state = initialState, action) => {
    const {type, payload} = action
    let result, key, prepData, amount;
    switch (type) {
        case ADD_TO_CART:
            result = state.products.find((product, index) => {
                key = index
                return product?.product?.id === payload.product?.id && product?.inventory?.id === payload.inventory?.id
            })
            if (result) {
                prepData = state.products
                prepData[key].qty += 1;
                prepData[key].variant = payload.variant
                return {
                    ...state,
                    products: prepData,
                    qty: state.qty + payload.qty,
                    price: state.price + parseFloat(payload.inventory.sale_price)
                }
            } else {
                return {
                    ...state,
                    products: [...state.products, payload],
                    qty: state.qty + payload.qty,
                    price: state.price + parseFloat(payload.inventory.sale_price)
                }
            }
        case REMOVE_FROM_CART:
            result = state.products.find((product, index) => {
                key = index
                return product?.product?.id === payload.product?.id && product?.inventory?.id === payload.inventory?.id
            })
            if (result) {
                prepData = state.products
                amount = parseFloat(result.inventory.sale_price) * result.qty
                prepData.splice(key,1)
                return {
                    ...state,
                    products: prepData,
                    qty: state.qty - result.qty,
                    price: state.price - amount,
                }
            }
            return {...state}

        case INCREMENT:
            result = state.products.find((product, index) => {
                key = index
                return product?.product?.id === payload.product?.id && product?.inventory?.id === payload.inventory?.id
            })
            if (result) {
                prepData = state.products
                prepData[key].qty += 1;
                return {
                    ...state,
                    products: prepData,
                    qty: state.qty + 1,
                    price: state.price + parseFloat(result.inventory.sale_price),
                }
            } else {
                return {...state}
            }
        case DECREMENT:
            result = state.products.find((product, index) => {
                key = index
                return product?.product?.id === payload.product?.id && product?.inventory?.id === payload.inventory?.id
            })
            if (result) {
                prepData = state.products
                prepData[key].qty -= 1;
                return {
                    ...state,
                    products: prepData,
                    qty: state.qty - 1,
                    price: state.price - parseFloat(result.inventory.sale_price)
                }
            } else {
                return {...state}
            }


        case SAVE_LOCAL:
            return localStorage.setItem("shoppingCart", JSON.stringify(state))
        case LOAD_LOCAL:
            let local = localStorage.getItem("shoppingCart")
            return {local}
        default:
            return state
    }
}