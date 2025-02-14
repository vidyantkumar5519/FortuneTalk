// fortunestoreReducer.js
import * as actionTypes from '../actionTypes';

const initialState = {
    productCategoryList: [],
    productAllCategoryList: [],
    isLoading: false,
};

const fortunestore = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_PRODUCT_CATEGORY_LIST:
            return {
                ...state,
                productCategoryList: payload, 
                isLoading: false, 
            };
        case actionTypes.SET_PRODUCT_ALL_CATEGORY_LIST:
            return {
                ...state,
                productAllCategoryList: payload, 
                isLoading: false, 
            };    
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

export default fortunestore;
