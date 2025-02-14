import * as actionTypes from '../actionTypes';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  isLogged: false,
  isOtpModalOpen: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null
      };

    case actionTypes.SET_CUSTOMER_DATA:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null
      };

    case actionTypes.OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case actionTypes.SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.OPEN_OTP_MODAL:
      return {
        ...state,
        isOtpModalOpen: true
      };

    case actionTypes.CLOSE_OTP_MODAL:
      return {
        ...state,
        isOtpModalOpen: false
      };

    case 'LOGOUT_USER':
      return {
        ...initialState,
        user: null,
        token: null,
        isLogged: false
      };

    default:
      return state;
  }
};

export default authReducer;