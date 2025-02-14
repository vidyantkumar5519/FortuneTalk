import * as actionTypes from "../actionTypes";

const initialState = {
  testimonialData: [],

};

const testimonials = (state = initialState, actions) => {
  const { payload, type } = actions;

  switch (type) {
    case actionTypes.SET_TESTIMONIALS: {
      return {
        ...state,
        testimonialData: actions.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default testimonials;
