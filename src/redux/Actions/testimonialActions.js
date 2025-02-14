import * as actionTypes from "../actionTypes";

export const getTestimonials = payload =>({
    type: actionTypes.GET_TESTIMONIALS,
    payload
})

export const setTestimonials = payload =>({
    type: actionTypes.SET_TESTIMONIALS,
    payload
})

