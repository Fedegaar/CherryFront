import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL"
export const GET_ALL_SERVICES = "GET_ALL_SERVICES"

export const getAllProducts = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/allproducts`)
            console.log(response.data, "SOY LA DATA")
            return dispatch ({type: GET_ALL_PRODUCTS, payload:response.data})
        } catch (e) {
            console.log(e)
        }   
    }
}

export const searchByName = (name) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/search?name=` + name)
            return dispatch ({type: SEARCH_BY_NAME, payload:response.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProductDetail = (_id) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/product/`+ _id)
            console.log("HOLIS",response)
            return dispatch ({type: GET_PRODUCT_DETAIL, payload: response.data}) 
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllServices = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/allservices`)
            console.log(response.data, "SOY LA DATA")
            return dispatch ({type: GET_ALL_SERVICES, payload:response.data})
        } catch (e) {
            console.log(e)
        }   
    }
}