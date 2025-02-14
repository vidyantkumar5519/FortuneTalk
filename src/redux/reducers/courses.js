import * as actionTypes from '../actionTypes'

const initialState = {
    courseBanner: null,
    courseList: null,
    demoClass: null,
    liveClass: null,
    workshop: null,
    teachersList: null,
    liveClassOfClass:null,
    demoClassBooked:null,
    workshopWithoutId:null,
    allDemoClass:null,
    registerDemoclass:null,
    isRegisterForLive:null,
    singleDemoClass : null,
    singleLiveClass : null,
    currentLiveCourse:null,
    completedLiveCourse:null,
    registeredLiveClass: null,
    liveClassRegistorClass: null,
    liveClassDetails: null,
    subClassData: null,
    currentCouresesData: null,
    demoRegistrationStatus: null,
    demoClassByIdData: null,
}

const courses = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case actionTypes.GET_COURSE_BANNER: {
            return {
                ...state,
                courseBanner: payload
            }
        }
        case actionTypes.GET_COURSES_LIST: {
            return {
                ...state,
                courseList: payload
            }
        }
        case actionTypes.SET_DEMO_CLASS: {
            return {
                ...state,
                demoClass: payload
            }
        }
        case actionTypes.SET_LIVE_CLASS: {
            return {
                ...state,
                liveClass: payload
            }
        }
        case actionTypes.GET_WORKSHOP: {
            return {
                ...state,
                workshop: payload
            }
        }
        case actionTypes.GET_TEACHERS_LIST: {
            return {
                ...state,
                teachersList: payload
            }
        }
        case actionTypes.GET_TEACHERS_LIST: {
            return {
                ...state,
                teachersList: payload
            }
        }
        case actionTypes.LIVE_CLASS_OF_CLASS: {
            return {
                ...state,
                liveClassOfClass: payload
            }
        }
        case actionTypes.CHECK_CUSTOMER_DEMO_CLASS_BOOKED: {
            return {
                ...state,
                demoClassBooked: payload
            }
        }
        case actionTypes.GET_WORKSHOP_WITHOUT_ID: {
            return {
                ...state,
                workshopWithoutId: payload
            }
        }
        case actionTypes.GET_ALL_DEMO_CLASSS: {
            return {
                ...state,
                allDemoClass: payload
            }
        }
        case actionTypes.BOOKED_DEMO_CLASS: {
            return {
                ...state,
                registerDemoclass: payload
            }
        }
        case actionTypes.IS_REGISTER_FOR_LIVE_CLASS: {
            return {
                ...state,
                isRegisterForLive: payload
            }
        }
        case actionTypes.GET_SINGLE_DEMO_CLASS: {
            return {
                ...state,
                singleDemoClass: payload
            }
        }
        case actionTypes.GET_SINGLE_LIVE_CLASS: {
            return {
                ...state,
                singleLiveClass: payload
            }
        }
        case actionTypes.GET_CURRENT_LIVE_COURSE_HISTORY: {
            return {
                ...state,
                currentLiveCourse: payload
            }
        }
        case actionTypes.GET_COMPLETED_LIVE_COURSE_HISTORY: {
            return {
                ...state,
                completedLiveCourse: payload
            }
        }
        case actionTypes.GET_REGISTERED_LIVE_CLASS: {
            return {
                ...state,
                registeredLiveClass: payload
            }
        }
        case actionTypes.SET_LIVE_CLASS_DETAILS: {
            return {
                ...state,
                liveClassDetails: payload
            }
        }
        case actionTypes.SET_CLASS_BY_LIVE_CLASS_ID: {
            return {
                ...state,
                subClassData: payload
            }
        }
        case actionTypes.SET_INITIATED_PAYMENT_OF_LIVE_CLASS: {
            return {
                ...state,
                currentCouresesData: payload
            }
        }
        case actionTypes.SET_STATUR_FOR_REGISTERED_DEMO: {
            return {
                ...state,
                demoRegistrationStatus: payload
            }
        }
        case actionTypes.SET_DEMO_CLASS_BY_ID: {
            return {
                ...state,
                demoClassByIdData: payload
            }
        }
        default: {
            return state
        }
    }
}

export default courses