import * as actionTypes from "../actionTypes";

const initialState = {
  appHoroChartData: null,
};

const horoChart = (state = initialState, actions) => {
  const { payload, type } = actions;

  switch (type) {
    case actionTypes.SET_APP_BANNERS: {
      return {
        ...state,
        appHoroChartData: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default horoChart;
