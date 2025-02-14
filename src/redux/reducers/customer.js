import * as actionTypes from "../actionTypes";

const initialState = {
  customerListData: null,
  customerData: null,
};

const customer = (state = initialState, actions) => {
  const { payload, type } = actions;

  switch (type) {
    case actionTypes.SET_ALL_CUSTOMER: {
      return {
        ...state,
        customerListData: payload,
      };
    }
    case actionTypes.SET_CUSTOMER_DATA: {
      return {
        ...state,
        customerData: payload,
      };
    }
    case 'LOGOUT_USER': {
      return {
        ...initialState
      };
    }

    default: {
      return state;
    }
  }
};

export default customer;
