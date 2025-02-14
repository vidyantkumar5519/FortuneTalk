import { call, put, race, takeEvery } from "redux-saga/effects";
import {
  api_url,
  get_review,
  get_testimonials,
} from "../../utils/Constants";
import { ApiRequest } from "../../utils/apiRequest";
import * as actionTypes from "../actionTypes";


function* getTestimonials() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    console.log(api_url + get_review);
    const response = yield ApiRequest.getRequest({
      url: api_url + get_testimonials,
    });

    if (response.success) {
      yield put({
        type: actionTypes.SET_TESTIMONIALS,
        payload: response.data.reverse(),
      });
    }
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}


export default function* testimonialsSaga() {
  yield takeEvery(actionTypes.GET_TESTIMONIALS, getTestimonials);
 
}
