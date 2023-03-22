import {
    GET_ALL_PRODUCTS, 
    GET_ALL_SERVICES, 
    SEARCH_BY_NAME,
    GET_PRODUCT_DETAIL,
    CLEAR_DETAIL
} from "../actions";

const initialState = {
    products: [],
    productsToShow: [],
    services: [],
    productDetail: {}
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                productsToShow: payload
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                productsToShow: payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                productDetail: {}
            }
        case GET_ALL_SERVICES:
            return {
                ...state,
                services: payload
            }
        default: return {
            ...state
        }
    }
}