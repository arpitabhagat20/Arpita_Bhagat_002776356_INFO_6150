import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/type";
  
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");
  
  const initialState = token
    ? { isLoggedIn: true, token, type  }
    : { isLoggedIn: false, token: null, type: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          token: payload.token,
          type: payload.type,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          token: null,
          type: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          token: null,
          type: null,
        };
      default:
        return state;
    }
  }