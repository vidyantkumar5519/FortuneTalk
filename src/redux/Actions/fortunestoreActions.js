import * as actionTypes from "../actionTypes"

export const getProductCategoryList = payload => ({
    type: actionTypes.GET_PRODUCT_CATEGORY_LIST,
    payload
})

export const setProductCategoryList = (payload) => ({
    type: actionTypes.SET_PRODUCT_CATEGORY_LIST,
    payload,
});

// for all product category of fortune store 
export const getProductAllCategoryList = payload => ({
    type: actionTypes.GET_PRODUCT_ALL_CATEGORY_LIST,
    payload
});

export const setProductAllCategoryList = (payload) => ({
    type: actionTypes.SET_PRODUCT_ALL_CATEGORY_LIST,
    payload,
});