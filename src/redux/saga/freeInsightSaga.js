import * as actionTypes from "../actionTypes";
import { call, put, race, takeEvery, takeLeading } from "redux-saga/effects";
import Swal from "sweetalert2";
import { ApiRequest } from "../../utils/apiRequest";
import { horo_chart } from "../../utils/Constants";
import { Colors } from "../../assets/styles";

function* getHoroChart(actions) {
  try {
    const { payload } = actions;

    const response = yield ApiRequest.getRequest({
      url: api_url + horo_chart,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.HORO_CHART,
        payload: response?.banners,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

function* uploadAppHoroChartData(actions) {
  try {
    const { payload } = actions;
    console.log(payload);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const response = yield ApiRequest.postRequest({
      url: api_url + add_banner,
      header: "form",
      data: payload,
    });

    if (response.success) {
      Swal.fire({
        icon: "success",
        title: "Banner added successfull",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to add banner",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    console.log(response);

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}


export default function* freeInsightSaga() {
  yield takeLeading(actionTypes.GET_APP_BANNERS, uploadAppHoroChartData);
  yield takeLeading(actionTypes.GET_APP_BANNERS, getHoroChart);
}
