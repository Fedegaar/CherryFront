import {
    GET_ALL_PRODUCTS, SEARCH_BY_NAME,
} from "../actions";

const initialState = {
        products: [],
        productsToShow:[]
    }

export default function reducer (state = initialState, {type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                productsToShow: payload
            }
        case SEARCH_BY_NAME:
            return{
                ...state,
                productsToShow: payload
            }
        default: return {
                ...state
        }
    }
}