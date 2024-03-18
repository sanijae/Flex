import {REGISTER_USER,LOGIN_USER,GET_USER,UPDATE_USER,DELETE_USER,LOGOUT_USER,ERROR} from '../types'
const initialState = {
    isAuthenticated: false,
    user: {}
  };
  
  const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case REGISTER_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload
        };
      case LOGIN_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload
        };
      case UPDATE_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload
        };
      case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
      case DELETE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
      case ERROR:
        return {
          ...state,
          error: action.payload
        };
      case LOGOUT_USER:
        return {
          ...state,
          isAuthenticated: false,
          user: {}
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  