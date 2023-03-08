import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_RESET,
    AUTH_LOGOUT,
    AUTH_REGISTER_FAILURE,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_RESET,
    AUTH_REGISTER_SUCCESS,
    AUTH_GETOTP_REQUEST,
    AUTH_GETOTP_SUCCESS,
    AUTH_GETOTP_FAILURE,
    AUTH_GETOTP_RESET,
} from "./actionTypes";
import Cookies from "js-cookie";

const initialState = {
    userLogin: { loading: false, error: false, message: "" },
    userRegister: { loading: false, error: false, message: ""},
    userLogout: { loading: false, error: false, message: "" },
    data: {
        isAuthenticated: Cookies.get("token") ? true : false,
        token: Cookies.get("token") || null,
        user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
    },
};

export default function authReducer(state = initialState, { type, payload }) {
    
    switch (type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, userLogin: { loading: true, error: false }};
        case AUTH_LOGIN_SUCCESS:
           
            return {
                ...state,
                userLogin: { loading: false, error: false, message: payload },
            };
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                userLogin: { loading: false, error: true, message: payload.message },
            };
        case AUTH_LOGIN_RESET:
            return {
                ...state,
                userLogin: { loading: false, error: false, message: "" },
            };
        case AUTH_GETOTP_REQUEST:
            return { ...state, userLogin: { loading: true, error: false } };
        case AUTH_GETOTP_SUCCESS:
            console.log(payload, "payload");
            Cookies.set("token", payload.data);
            Cookies.set(
                "user",
                JSON.stringify({
                    name: payload.firstName,
                    email: payload.email,
                    _id: payload._id,
                })
            );
            return {
                ...state, userLogin: { loading: false, error: false, message: payload.message },
                data: {
                    isAuthenticated: true,
                    token: payload.data,
                    user: payload.user,
                }
            };
        case AUTH_GETOTP_FAILURE:
            return { ...state, userLogin: { loading: false, error: true, message: payload.message } };
        case AUTH_GETOTP_RESET:
            return { ...state, userLogin: { loading: false, error: false, message: "" } };
        case AUTH_LOGOUT:
            Cookies.remove("token");
            Cookies.remove("user");
            return {
                ...state,
                data: {
                    isAuthenticated: false,
                    token: null,
                    user: null,
                },
            };
        case AUTH_REGISTER_REQUEST:
            return {
                ...state,
                userRegister: { loading: true, error: false },
            };
        case AUTH_REGISTER_SUCCESS:
            Cookies.set("token", payload.token);
            Cookies.set(
                "user",
                JSON.stringify({
                    name: payload.firstName,
                    email: payload.email,
                    _id: payload._id,
                })
            );
            return {
                ...state,
                userRegister: { loading: false, error: false, message: payload},
                data: {
                    isAuthenticated: true,
                    token: payload.token,
                    user: payload.user,
                }
            };
        case AUTH_REGISTER_FAILURE:
            return {
                ...state,
                userRegister: { loading: false, error: true, message: payload.message },
            };

        case AUTH_REGISTER_RESET:
            return {
                ...state,
                userRegister: { loading: false, error: false, message: "" },
            };

        default:
            return state;
    }
}