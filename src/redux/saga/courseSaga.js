import * as actionTypes from "../actionTypes";
import { call, put, select, takeLeading } from "redux-saga/effects";
import { ApiRequest } from "../../utils/apiRequest";
import {
  api_url,
  book_demo_class,
  check_customer_demo_class_booked,
  get_all_demo_class,
  get_class_by_live_class_id,
  get_completed_live_courses,
  get_course_banner,
  get_course_list,
  get_current_live_courses,
  get_demo_class_by_id,
  get_demo_class_list,
  get_initiated_payment_of_live_class,
  get_live_class_detail_by_id,
  get_live_class_list,
  get_registered_live_class,
  get_single_demo_class_by_id,
  get_single_live_class_by_id,
  get_status_for_registered_demo,
  get_teachers_list,
  get_workshop_list,
  get_workshop_list_without_id,
  is_registered_for_live_class,
  live_class_of_class,
  live_course_payment,
  payment_for_registration,
  register_demo_class_for_web,
  register_for_live_class,
  register_live_class_for_web,
  web_api_url,
} from "../../utils/Constants";
import { Trophy } from "lucide-react";
import Swal from "sweetalert2";
import { delay } from 'redux-saga/effects'; // Import delay for the timeout
// import { showToastMessage } from '../../utils/services'
// import { navigate } from '../../utils/navigationServices'
// import { razorpayPayment } from '../../utils/razorpay'

function* getCourseBanner() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield ApiRequest.getRequest({
      url: api_url + get_course_banner,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_COURSE_BANNER,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getCourseList() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield ApiRequest.getRequest({
      url: api_url + get_course_list,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_COURSES_LIST,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getLiveClassList(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    const response = yield ApiRequest.postRequest({
      url: api_url + get_live_class_list,
      header: "json",
      data: payload,
    });

    if (response?.success) {
      yield put({ type: actionTypes.SET_LIVE_CLASS, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getDemoClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    console.log("payload", payload);

    const response = yield ApiRequest.postRequest({
      url: api_url + get_demo_class_list,
      header: "json",
      data: payload,
    });

    if (response?.success) {
      yield put({ type: actionTypes.SET_DEMO_CLASS, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getDemoClassById(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    console.log("payload", payload);

    const response = yield ApiRequest.postRequest({
      url: web_api_url + get_demo_class_by_id,
      header: "json",
      data: payload,
    });

    if (response?.success) {
      yield put({ type: actionTypes.SET_DEMO_CLASS_BY_ID, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}


function* getLiveClassDetails(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    console.log("payload", payload);

    const response = yield ApiRequest.postRequest({
      url: web_api_url + get_live_class_detail_by_id,
      header: "json",
      data: payload,
    });
     
    console.log("response",response)
    if (response?.success) {
      yield put({ type: actionTypes.SET_LIVE_CLASS_DETAILS, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}
function* getClassByLiveClassId(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    console.log("payload", payload);

    const response = yield ApiRequest.postRequest({
      url: web_api_url + get_class_by_live_class_id,
      header: "json",
      data: payload
    });
     
    console.log("response",response)
    if (response?.success) {
      yield put({ type: actionTypes.SET_CLASS_BY_LIVE_CLASS_ID, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}
function* getInitiatedPaymentOfLiveClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    const customerData = yield select(state => state.customer.customerData)
    console.log("customerData",customerData)


    const response = yield ApiRequest.postRequest({
      url: web_api_url + get_initiated_payment_of_live_class,
      header: "json",
      data: { customerId: customerData?._id },
      
    });
    console.log({ customerId: customerData?._id })
     
    console.log("response",response)
    if (response?.success) {
      yield put({ type: actionTypes.SET_INITIATED_PAYMENT_OF_LIVE_CLASS, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getWorkshopsList(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    const response = yield ApiRequest.postRequest({
      url: api_url + get_workshop_list,
      data: payload,
    });

    if (response?.success) {
      yield put({ type: actionTypes.GET_WORKSHOP, payload: response?.data });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getWorkshopsListWithoutId() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield ApiRequest.getRequest({
      url: api_url + get_workshop_list_without_id,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_WORKSHOP_WITHOUT_ID,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getTeachersList(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    const response = yield ApiRequest.postRequest({
      url: api_url + get_teachers_list,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_TEACHERS_LIST,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* bookDemoClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    // console.log("payload  =====>>>>", payload)

    const response = yield ApiRequest.postRequest({
      url: api_url + book_demo_class,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.BOOKED_DEMO_CLASS,
        payload: response?.data,
      });
      // yield call(showToastMessage, { message: "Class Registered Successfully" })
      // navigate("classOverview", {
      //     id: response?.data?.demoClassId,
      //     title: "Demo",
      //     isRegister: false
      // })
    }
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getSingleDemoClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    // console.log("url: api_url + get_single_demo_class_by_id,", { url: api_url + get_single_demo_class_by_id, })

    const response = yield ApiRequest.postRequest({
      url: api_url + get_single_demo_class_by_id,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_SINGLE_DEMO_CLASS,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getSingleLiveClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    // console.log("url: api_url + get_single_demo_class_by_id,", { url: api_url + get_single_demo_class_by_id, })

    const response = yield ApiRequest.postRequest({
      url: api_url + get_single_live_class_by_id,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_SINGLE_LIVE_CLASS,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* liveClassofClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    // console.log("liveClassofClass ====>>>>", payload)

    const response = yield ApiRequest.postRequest({
      url: api_url + live_class_of_class,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.LIVE_CLASS_OF_CLASS,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* IsDemoClassBooked(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    const response = yield ApiRequest.postRequest({
      url: api_url + check_customer_demo_class_booked,
      data: payload,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.CHECK_CUSTOMER_DEMO_CLASS_BOOKED,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* allDemoClass() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield ApiRequest.getRequest({
      url: api_url + get_all_demo_class,
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_ALL_DEMO_CLASSS,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

// function* registerLiveClass(actions) {
//     try {
//         yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
//         const customerData = yield select(state => state.customer.customerData)
//         const { payload } = actions

//         const rayzorPayResponse = yield razorpayPayment({
//             amount: payload?.amount,
//             email: customerData?.email,
//             contact: payload?.mobileNumber,
//             name: payload?.customerName
//         })

//         // console.log("rayzorPayResponse  ====>>>", rayzorPayResponse)

//         if (rayzorPayResponse) {
//             const response = yield ApiRequest.postRequest({
//                 url: api_url + register_for_live_class,
//                 data: payload
//             })

//             // console.log("resp dmd registerLiveClass", response?.data)

//             if (response?.success) {
//                 yield put({ type: actionTypes.REGISTER_FOR_LIVE_CLASS, payload: response?.data })
//                 // yield call(showToastMessage, { message: "Class Registered Successfully" })
//                 // navigate("liveclassdetails", {
//                 //     id: response?.data?.liveClassId,
//                 //     title: "Live"
//                 // })
//             }
//         }

//         yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
//     } catch (e) {
//         yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
//         console.log(e)
//     }
// }

function* IsRegisterForLiveClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;

    const response = yield ApiRequest.postRequest({
      url: api_url + is_registered_for_live_class,
      data: payload,
    });
    if (response?.success) {
      yield put({
        type: actionTypes.IS_REGISTER_FOR_LIVE_CLASS,
        payload: response?.data,
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

// function* onLiveCoursePayment(actions) {
//     try {
//         yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
//         const customerData = yield select(state => state.customer.customerData)
//         const { payload } = actions

//         const rayzorPayResponse = yield razorpayPayment({
//             amount: parseInt(payload?.amount),
//             email: customerData?.email,
//             name: customerData?.customerName,
//             contact: customerData?.phoneNumber
//         })

//         // console.log("rayzorPayResponse  ====>>>", rayzorPayResponse)

//         if (rayzorPayResponse) {
//             const response = yield ApiRequest.postRequest({
//                 url: api_url + live_course_payment,
//                 data: {
//                     customerId: customerData?._id,
//                     liveId: payload.liveClassId,
//                     amount: parseInt(payload?.amount),
//                     isPartial: payload?.isPartial,
//                     isCompleted: false,
//                     paymentType: payload?.type
//                 }
//             })

//             if (response?.success) {
//                 yield call(showToastMessage, { message: "Payment Successfull" })
//                 navigate("mycourse")
//             }
//         }

//         yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
//     } catch (e) {
//         console.log(e)
//         yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
//     }
// }

function* getCurrentLiveCourse() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const customerData = yield select((state) => state.customer.customerData);

    const response = yield ApiRequest.postRequest({
      url: api_url + get_current_live_courses,
      data: {
        customerId: customerData?._id,
      },
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_CURRENT_LIVE_COURSE_HISTORY,
        payload: response?.data,
      });
    }
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getCompletedLiveCourse() {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const customerData = yield select((state) => state.customer.customerData);

    const response = yield ApiRequest.postRequest({
      url: api_url + get_completed_live_courses,
      data: {
        customerId: customerData?._id,
      },
    });

    if (response?.success) {
      yield put({
        type: actionTypes.GET_COMPLETED_LIVE_COURSE_HISTORY,
        payload: response?.data,
      });
    }
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* getRegisterdLiveClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const customerData = yield select((state) => state.customer.customerData);
    const { payload } = actions;

    // console.log("payload  ====>>" , payload)

    const response = yield ApiRequest.postRequest({
      url: api_url + get_registered_live_class,
      data: {
        customerId: customerData?._id,
        liveClassId: payload.liveClassId,
      },
    });

    if (response?.success) {
    }
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}

function* liveClassRegistration(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    const customerData = yield select((state) => state.customer.customerData);
    console.log(payload);
    console.log(customerData);

    const response = yield ApiRequest.postRequest({
      url: api_url + register_live_class_for_web,
      header: "json",
      data: { ...payload.data, customerId: customerData?._id },
    });

    if (response?.success) {
      // yield put({ type: actionTypes.SET_LIVE_CLASS, payload: response?.data })
      // yield call(payload.navigate, "/live-payment-information" )
      yield call(payload.navigate, "/live-payment-information", {
        state: { itemData: response?.data },
      });

    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}


// function* demoClassRegistration(actions) {
//   try {
//     yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

//     const { payload, onComplete, navigate } = actions.payload;
//     const customerData = yield select((state) => state.customer.customerData);

//     const response = yield ApiRequest.postRequest({
//       url: api_url + register_demo_class_for_web,
//       header: "json",
//       data:  payload,
//     });

//     if (response?.success) {
//       console.log(response?.data?.booking?.demoClassId );

//       yield call(navigate, `/thankyou/${response?.data?.booking?.demoClassId}`, { state: { itemData: response?.data } });
//       return { success: true };
    
//     } else {

//       Swal.fire({
//         title: "Something went wrong!",
//         text: 'Please check all fields again',
//         icon: null, // Remove the icon
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#F27806',
//         background: '#fff',
//         customClass: {
//           title: 'font-bold text-2xl pt-6', // Increase font size and add top padding
//           content: 'text-base',
//         },
//       });

//       return { success: false };
//     }
//   } catch (e) {
//     console.error(e); // Log error for debugging

//     // Show generic error message
//     Swal.fire({
//       title: 'An error occurred!',
//       text: 'Please try again later.',
//       icon: "error",
//       confirmButtonText: 'OK'
//     });
//     return { success: false };
//   } finally {
//     // Ensure loading state is reset
//     yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
//   }
// }


// function* demoClassRegistration(actions) {
//   try {
//     yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

//     const { payload, onComplete, navigate } = actions.payload;
//     const customerData = yield select((state) => state.customer.customerData);

//     const response = yield ApiRequest.postRequest({
//       url: api_url + register_demo_class_for_web,
//       header: "json",
//       data: payload,
//     });

//     if (response?.data?.message =="This user is already registered.") {

//       Swal.fire({
//         title: "This user is already registered.",
//         text: 'kindly click on connect now to connect your demo class ',
//         icon: 'warning',
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#F27806',
//         background: '#fff',
//         customClass: {
//           title: 'font-bold text-2xl pt-6',
//           content: 'text-base',
//         },
//       });

//       return { success: false };
     

//     } else if (response?.success)  {
//       console.log(response?.data?.booking?.demoClassId);

//       yield call(navigate, `/thankyou/${response?.data?.booking?.demoClassId}`, { state: { itemData: response?.data } });
//       return { success: true };

  

//     } else {
//       // Handle general error response
//       Swal.fire({
//         title: "Something went wrong!",
//         text: 'Please check all fields again',
//         icon: null,
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#F27806',
//         background: '#fff',
//         customClass: {
//           title: 'font-bold text-2xl pt-6',
//           content: 'text-base',
//         },
//       });

//       return { success: false };
//     }
//   } catch (e) {
//     console.error(e); // Log error for debugging

//     // Show generic error message
//     Swal.fire({
//       title: 'An error occurred!',
//       text: 'Please try again later.',
//       icon: "error",
//       confirmButtonText: 'OK'
//     });
//     return { success: false };
//   } finally {
//     // Ensure loading state is reset
//     yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
//   }
// }

function* demoClassRegistration(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const { payload, onComplete, navigate } = actions.payload;
    const customerData = yield select((state) => state.customer.customerData);

    const response = yield ApiRequest.postRequest({
      url: api_url + register_demo_class_for_web,
      header: "json",
      data: payload,
    });

    if (response?.data?.message === "This user is already registered.") {
      Swal.fire({
        title: "This user is already registered.",
        text: 'Kindly click on connect now to connect your demo class.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#F27806',
        background: '#fff',
        customClass: {
          title: 'font-bold text-2xl pt-6',
          content: 'text-base',
        },
      });

      yield call(navigate, `/demo-class-details/${response?.data?.booking?.demoClassId}`);
      return { success: false };

    } else if (response?.success) {
      console.log(response?.data?.booking?.demoClassId);

      // Navigate to the thank you page
      yield call(navigate, `/thankyou/${response?.data?.booking?.demoClassId}`, { state: { itemData: response?.data } });

      // Wait for 10 seconds
      yield delay(10000); // 10 seconds in milliseconds

      // Redirect to the demo class details page
      yield call(navigate, `/demo-class-details/${response?.data?.booking?.demoClassId}`);
      return { success: true };

    } else {
      // Handle general error response
      Swal.fire({
        title: "Something went wrong!",
        text: 'Please check all fields again.',
        icon: null,
        confirmButtonText: 'OK',
        confirmButtonColor: '#F27806',
        background: '#fff',
        customClass: {
          title: 'font-bold text-2xl pt-6',
          content: 'text-base',
        },
      });

      return { success: false };
    }
  } catch (e) {
    console.error(e); // Log error for debugging

    // Show generic error message
    Swal.fire({
      title: 'An error occurred!',
      text: 'Please try again later.',
      icon: "error",
      confirmButtonText: 'OK'
    });
    return { success: false };
  } finally {
    // Ensure loading state is reset
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

function* getStatusForRegisteredDemo(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const { payload } = actions;
    const customerData = yield select((state) => state.customer.customerData);

    const response = yield ApiRequest.postRequest({
      url: web_api_url + get_status_for_registered_demo,
      header: "json",
      data: { ...payload.data },
    });

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });

    if (response?.data?.registrationStatus) {
      yield put({ type: actionTypes.SET_STATUR_FOR_REGISTERED_DEMO, payload: response?.data });
      window.location.href = payload.data?.link;
    } else {
      Swal.fire({
        title: "Please register for the demo class.",
        text: 'It seems you have not registered yet.',
        icon: null, // Remove the icon
        confirmButtonText: 'OK',
        confirmButtonColor: '#F27806',
        background: '#fff',
        customClass: {
          title: 'font-bold text-2xl pt-6', // Increase font size and add top padding
          content: 'text-base',
        },
      });
    }

  } catch (e) {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    console.log(e);
  }
}




function* onRegisteredForLiveClass(actions) {
  try {
    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
    const { payload } = actions;
    const response = yield ApiRequest.postRequest({
      url: web_api_url + payment_for_registration,
      header: "json",
      data: {
        ...payload.data,
      },
    });

    if (response?.success) {
      yield call(payload.navigate, "/courses");
      Swal.fire({
        title: "Payment Successful",
        text: response?.message,
        icon: "success",
      });
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
  }
}

export default function* coursesSaga() {
  yield takeLeading(actionTypes.GET_COURSE_BANNER, getCourseBanner);
  yield takeLeading(actionTypes.GET_COURSES_LIST, getCourseList);

  yield takeLeading(actionTypes.GET_DEMO_CLASS, getDemoClass);
  yield takeLeading(actionTypes.GET_LIVE_CLASS, getLiveClassList);
  yield takeLeading(actionTypes.GET_WORKSHOP, getWorkshopsList);
  yield takeLeading(actionTypes.GET_TEACHERS_LIST, getTeachersList);

  yield takeLeading(actionTypes.BOOKED_DEMO_CLASS, bookDemoClass);
  yield takeLeading(actionTypes.GET_SINGLE_DEMO_CLASS, getSingleDemoClass);

  yield takeLeading(actionTypes.LIVE_CLASS_OF_CLASS, liveClassofClass);
  yield takeLeading(
    actionTypes.CHECK_CUSTOMER_DEMO_CLASS_BOOKED,
    IsDemoClassBooked
  );

  yield takeLeading(
    actionTypes.GET_WORKSHOP_WITHOUT_ID,
    getWorkshopsListWithoutId
  );
  yield takeLeading(actionTypes.GET_ALL_DEMO_CLASSS, allDemoClass);

  // yield takeLeading(actionTypes.REGISTER_FOR_LIVE_CLASS, registerLiveClass)
  yield takeLeading(
    actionTypes.IS_REGISTER_FOR_LIVE_CLASS,
    IsRegisterForLiveClass
  );
  yield takeLeading(actionTypes.GET_SINGLE_LIVE_CLASS, getSingleLiveClass);

  // yield takeLeading(actionTypes.LIVE_COURSE_PAYMENT, onLiveCoursePayment)
  yield takeLeading(
    actionTypes.GET_CURRENT_LIVE_COURSE_HISTORY,
    getCurrentLiveCourse
  );
  yield takeLeading(
    actionTypes.GET_COMPLETED_LIVE_COURSE_HISTORY,
    getCompletedLiveCourse
  );

  yield takeLeading(
    actionTypes.GET_REGISTERED_LIVE_CLASS,
    getRegisterdLiveClass
  );
  yield takeLeading(
    actionTypes.REGISTER_LIVE_CLASS_FOR_WEB,
    liveClassRegistration
  );
  yield takeLeading(
    actionTypes.REGISTER_DEMO_CLASS_FOR_WEB, demoClassRegistration );
  yield takeLeading( actionTypes.ON_REGISTERED_FOR_LIVE_CLASS,  onRegisteredForLiveClass);
  yield takeLeading( actionTypes.GET_LIVE_CLASS_DETAILS,  getLiveClassDetails);
  yield takeLeading( actionTypes.GET_CLASS_BY_LIVE_CLASS_ID,  getClassByLiveClassId);
  yield takeLeading( actionTypes.GET_INITIATED_PAYMENT_OF_LIVE_CLASS,  getInitiatedPaymentOfLiveClass);
  yield takeLeading( actionTypes.GET_STATUR_FOR_REGISTERED_DEMO,  getStatusForRegisteredDemo);
  yield takeLeading( actionTypes.GET_DEMO_CLASS_BY_ID,  getDemoClassById);
}
