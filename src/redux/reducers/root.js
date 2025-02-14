import { combineReducers } from "redux";
// import {CLEAN_STORE} from '../actionTypes/userActionTypes';
import userReducer from '../userSlice';
import astrologer from "./astrologer";
import auth from "./auth";
import banners from "./banner";
import courses from "./courses";
import customer from "./customer";
import dashboard from "./dashboard";
import experites from "./experties";
import fortunestore from "./fortunestore";
import history from "./history";
import language from './language';
import notification from './notification';
import recharge from "./recharge";
import remedies from "./remedies";
import reports from "./reports";
import review from "./review";
import skills from "./skills";
import testimonials from "./testimonials";

const rootReducer = combineReducers({
  dashboard,
  review,
  customer,
  astrologer,
  experites,
  skills,
  remedies,
  banners,
  notification,
  history,
  reports,
  language,
  recharge,
  courses,
  testimonials,
  auth,
  fortunestore,
  user: userReducer,
});

// const appReducer = (state, action) => {
//   if (action.type == CLEAN_STORE) {
//     state = undefined; 
//   }
//   return rootReducer(state, action);
// };

export default rootReducer;
