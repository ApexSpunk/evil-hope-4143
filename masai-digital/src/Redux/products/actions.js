import axios from "axios"
import Cookies from "js-cookie"
import {
    GET_PRODUCT, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR,
    GET_PRODUCTS, GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR,
    ADD_PRODUCT, ADD_PRODUCT_LOADING, ADD_PRODUCT_ERROR,
    UPDATE_PRODUCT, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_ERROR,
    DELETE_PRODUCT, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_ERROR,
    
} from "./actionTypes";

export const getProducts = (params) => async (dispatch) => {
    let query = ''
    params && Object.keys(params).forEach(key => {
        query += `${key}=${params[key]}&`
    })
    try {
        dispatch({ type: GET_PRODUCTS_LOADING })
        const response = await axios.get(`https://masaidigital.onrender.com/products?${query}`)
        dispatch({ type: GET_PRODUCTS, payload: response.data.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: error })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_LOADING })
        const response = await axios.get(`https://masaidigital.onrender.com/products/${id}`);
        dispatch({ type: GET_PRODUCT, payload: response.data.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_ERROR, payload: error })
    }
}

export const addProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: ADD_PRODUCT_LOADING })
        const response = await axios.post('https://masaidigital.onrender.com/products', product, {
            headers: {
                'token': Cookies.get('token')
            }
        });
        dispatch({ type: ADD_PRODUCT, payload: response.data.data })
    } catch (error) {
        dispatch({ type: ADD_PRODUCT_ERROR, payload: error })
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_LOADING })
        const response = await axios.patch(`https://masaidigital.onrender.com/products/${id}`, product, {
            headers: {
                'token': Cookies.get('token')
            }
        });
        dispatch({ type: UPDATE_PRODUCT, payload: response.data.data })
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_ERROR, payload: error })
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_LOADING })
        const response = await axios.delete(`https://masaidigital.onrender.com/products/${id}`, {
            headers: {
                'token': Cookies.get('token')
            }
        });
        dispatch({ type: DELETE_PRODUCT, payload: response.data.data })
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_ERROR, payload: error })
    }
}

// export const getProductsBySearch = (search) => async (dispatch) => {
//     try {
//         dispatch({ type: GET_PRODUCTS_BY_SEARCH_LOADING })
//         const response = await axios.get(`https://masaidigital.onrender.com/products?q${search}`);
//         dispatch({ type: GET_PRODUCTS_BY_SEARCH, payload: response.data.data })
//     } catch (error) {
//         dispatch({ type: GET_PRODUCTS_BY_SEARCH_ERROR, payload: error })
//     }
// }

// export const getProductsByFilter = (filter) => async (dispatch) => {
//     try {
//         dispatch({ type: GET_PRODUCTS_BY_FILTER_LOADING })
//         const response = await axios.get(`https://masaidigital.onrender.com/products?${filter}`);
//         dispatch({ type: GET_PRODUCTS_BY_FILTER, payload: response.data.data })
//     } catch (error) {
//         dispatch({ type: GET_PRODUCTS_BY_FILTER_ERROR, payload: error })
//     }
// }

// export const getProductsByCategory = (category) => async (dispatch) => {
//     try {
//         dispatch({ type: GET_PRODUCTS_BY_CATEGORY_LOADING })
//         const response = await axios.get(`https://masaidigital.onrender.com/products?category=${category}`);
//         dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: response.data.data })
//     } catch (error) {
//         dispatch({ type: GET_PRODUCTS_BY_CATEGORY_ERROR, payload: error })
//     }
// }