import {
    GET_ALL_PRODUCTS, GET_ALL_SERVICES, SEARCH_BY_NAME,
} from "../actions";

const initialState = {
        products: [],
        productsToShow:[],
        services: []
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