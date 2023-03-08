import {
    AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS,
    AUTH_GETOTP_REQUEST, AUTH_GETOTP_SUCCESS, AUTH_GETOTP_FAILURE, AUTH_GETOTP_RESET
} from "./actionTypes";
import axios from "axios";

export const authRegister = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_REGISTER_REQUEST });
        const res = await axios.post("https://masaidigital.onrender.com/user/signup", data);
        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: AUTH_REGISTER_FAILURE,
            payload: {
                message: error,
            },
        });
    }
}


export const authVerify = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_GETOTP_REQUEST });
        const res = await axios.post("https://masaidigital.onrender.com/user/verify", data);
        dispatch({ type: AUTH_GETOTP_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: AUTH_GETOTP_FAILURE, payload: { message: error.response.data.message } });
    }
}


export const authLogin = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await axios.post("https://masaidigital.onrender.com/user/login", data);
        console.log(res.data);
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data.message });
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error.response.data.message } });
    }
}

export const authLogout = () => (dispatch) => {
    dispatch({ type: AUTH_LOGOUT });
}