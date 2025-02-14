import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import { ApiRequest } from "../../utils/apiRequest";
import { api_url, customer_login, customer_otp_verify } from "../../utils/Constants";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

function* onCutomerLogin(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    console.log({
      phoneNumber: payload?.phoneNumber,
    });
    const response = yield ApiRequest.postRequest({
      url: api_url + customer_login,
      header: "application/json",
      data: {
        phoneNumber: payload?.phoneNumber,
      },
    });
    if (response?.success) {
      yield call(payload.setIsOtpModalOpen, true)
      yield put({ type: 'OPEN_OTP_MODAL' });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}



function* onOtpVerification(action) {
  try {
    const { data, otpData, setIsOtpModalOpen, onClose, onLoginSuccess } = action.payload;
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    console.log({
      phoneNumber: otpData?.phoneNumber,
      countryCode: otpData?.callingCode,
      webToken: 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    },);
    const response = yield ApiRequest.postRequest({
      url: api_url + customer_otp_verify,
      header: "application/json",
      data: {
        phoneNumber: otpData?.phoneNumber,
        countryCode: otpData?.callingCode,
        webToken: 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
      },
    });

    if (response.success) {
      yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: response.data.customer });

      // localStorage.setItem("accessToken", response.data?.accessToken);
      // localStorage.setItem("refreshToken", response.data?.refreshToken);
      yield localStorage.setItem("customerData", JSON.stringify(response.data?.customer));
      console.log(response.message);
      yield call(setIsOtpModalOpen, false)
      yield call(onClose, false)
      yield call(onLoginSuccess)

      Swal.fire({
        icon: "success",
        title: "OTP Verified Successfully",
        text: response.message || "Invalid credentials or server error",
        showConfirmButton: false,
        timer: 2000,
      });

      // yield put({ type: 'CLOSE_OTP_MODAL' });
      yield call(redirect, "/");

    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong OTP",
        text: response.message || "Invalid credentials or server error",
        showConfirmButton: false,
        timer: 2000,
      });
      yield put({ type: actionTypes.OTP_FAILURE, error: response.message });
    }


  } catch (error) {
    console.error('Error logging in:', error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Server Error",
      showConfirmButton: false,
      timer: 2000,
    });
    yield put({ type: actionTypes.OTP_FAILURE, error: error.message });
  } finally {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}


export default function* authSaga() {
  yield takeLatest(actionTypes.ON_CUSTOMER_LOGIN, onCutomerLogin);
  yield takeLatest(actionTypes.ON_OTP_VERIFICATION, onOtpVerification);
}