import * as actionTypes from "../actionTypes";

export const getRemediesData = (payload) => ({
  type: actionTypes.GET_ALL_REMEDIES,
  payload,
});

export const setRemediesData = (payload) => ({
  type: actionTypes.SET_ALL_REMEDIES,
  payload,
});

export const createRemedy = payload =>({
  type: actionTypes.CREATE_REMEDY,
  payload
})

export const updateRemedy = payload =>({
  type: actionTypes.UPDATE_REMEDY,
  payload
})

export const deleteRemedy = payload =>({
  type: actionTypes.DELETE_REMEDY,
  payload
})
