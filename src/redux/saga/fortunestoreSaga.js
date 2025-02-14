import * as actionTypes from "../actionTypes";
import { put, takeLeading } from "redux-saga/effects";
import { ApiRequest } from "../../utils/apiRequest";
import {
    api_url,
    get_product_category_list,
    get_product_all_category_list
} from "../../utils/Constants";

function* getProductCategoryList() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

        const response = yield ApiRequest.getRequest({
            url: api_url + get_product_category_list,
        });

        console.log('API Response:', response); // Log the response

        if (response?.success) {
            yield put({
                type: actionTypes.SET_PRODUCT_CATEGORY_LIST, // Set the product category list
                payload: response.data || [], // Use response.data or an empty array
            });
        } else {
            yield put({
                type: actionTypes.SET_PRODUCT_CATEGORY_LIST,
                payload: [], // Ensure an empty array is sent if no data
            });
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log('Error fetching product categories:', e); // Log the error
    }
}


function* getProductAllCategoryList() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

        const response = yield ApiRequest.getRequest({
            url: api_url + get_product_all_category_list,
        });

        console.log('API Response:', response); 

        if (response?.success) {
            yield put({
                type: actionTypes.SET_PRODUCT_ALL_CATEGORY_LIST, 
                payload: response.data || [], 
            });
        } else {
            yield put({
                type: actionTypes.SET_PRODUCT_ALL_CATEGORY_LIST,
                payload: [], 
            });
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log('Error fetching product all categories:', e); 
    }
}

export default function* fortunestoreSaga() {
    yield takeLeading(actionTypes.GET_PRODUCT_CATEGORY_LIST, getProductCategoryList);
    yield takeLeading(actionTypes.GET_PRODUCT_ALL_CATEGORY_LIST, getProductAllCategoryList);
}
