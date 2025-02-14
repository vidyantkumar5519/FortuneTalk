import * as actionTypes from "../actionTypes";
import { call, put, race, takeEvery, takeLeading } from "redux-saga/effects";
import Swal from "sweetalert2";
import { ApiRequest } from "../../utils/apiRequest";
import {
  add_banner,
  api_url,
  delete_banner,
  get_app_banners,
  update_banner,
} from "../../utils/Constants";
import { Colors } from "../../assets/styles";

function* uploadAppBanners(actions) {
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

function* uploadWebBanners(actions) {
  try {
    const { payload } = actions;

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

function* getAppBanners(actions) {
  try {
    const { payload } = actions;

    const response = yield ApiRequest.getRequest({
      url: api_url + get_app_banners,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.SET_APP_BANNERS,
        payload: response?.banners,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

function* deleteBanners(actions) {
  try {
    const { payload } = actions;

    const result = yield Swal.fire({
      title: `Are you sure to Delete`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Colors.primaryLight,
      cancelButtonColor: Colors.red,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      console.log( {
        bannersId: payload?._id,
      })
      const response = yield ApiRequest.postRequest({
        url: api_url + delete_banner,
        header: 'json',
        data: {
          bannersId: payload?._id,
        },
      });

      if (response?.success) {
        yield put({ type: actionTypes.GET_APP_BANNERS, payload: null });
        Swal.fire({
          title: "Deleted!",
          text: "Banner has been deleted!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: "Failed to Delete the Banner",
          icon: "error",
        });
      }
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

function* editBanners(actions) {
  try {
    const { payload } = actions;
    console.log(payload);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const response = yield ApiRequest.postRequest({
      url: api_url + update_banner,
      header: "form",
      data: payload,
    });

    if (response.success) {
      Swal.fire({
        icon: "success",
        title: "Banner Updated Successfull",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to Updated banner",
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

export default function* bannerSaga() {
  yield takeLeading(actionTypes.UPLOAD_APP_BANNER, uploadAppBanners);
  yield takeLeading(actionTypes.UPLOAD_WEB_BANNER, uploadWebBanners);
  yield takeLeading(actionTypes.GET_APP_BANNERS, getAppBanners);
  yield takeLeading(actionTypes.DELETE_BANNERS, deleteBanners);
  yield takeLeading(actionTypes.EDIT_BANNERS, editBanners)
}
