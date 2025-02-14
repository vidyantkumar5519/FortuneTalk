import * as actionTypes from "../actionTypes";

export const setLoading = () => ({
  type: actionTypes.SET_IS_LOADING,
  payload: true
});

export const setCustomerData = (userData) => ({
  type: actionTypes.SET_CUSTOMER_DATA,
  payload: userData
});

export const setError = (error) => ({
  type: actionTypes.OTP_FAILURE,
  payload: error
});

export const setLoggedIn = () => ({
  type: actionTypes.SET_IS_LOGGED,
  payload: true
});

export const onCutomerLogin = (payload) => ({
  type: actionTypes.ON_CUSTOMER_LOGIN,
  payload
});

export const onOtpVerification = (payload) => ({
  type: actionTypes.ON_OTP_VERIFICATION,
  payload
});
