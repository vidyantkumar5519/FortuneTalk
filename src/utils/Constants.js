// export const base_url = "http://165.232.182.110:4000/";
// export const api_url = "http://165.232.182.110:4000/api/";

// Production Server
export const base_url = "http://97.74.83.200:4000/";
export const api_url = "http://97.74.83.200:4000/api/";
export const web_api_url = "http://97.74.83.200:4000/api/web/";

// Domain Server
// export const base_url = "https://api.fortunetalk.co.in/";
// export const api_url = "https://api.fortunetalk.co.in/api/";
// export const web_api_url = "https://api.fortunetalk.co.in/api/web/";

// Testing Server
// export const base_url = "http://97.74.83.200:8000/";
// export const api_url = "http://97.74.83.200:8000/api/";
// export const web_api_url = "http://97.74.83.200:8000/api/web/"

// Local Server
// export const base_url = "http://localhost:8000/";
// export const api_url = "http://localhost:8000/api/";
// export const web_api_url = "http://localhost:8000/api/web/";

//third party
export const third_party_api_url = "https://json.astrologyapi.com/v1/";

export const get_dashboard = "admin/get_dashboard";

// Login api
export const customer_login = "web/customers/customer_login";
export const customer_otp_verify = "web/customers/customer_otp_verify";

//Customer
export const add_skill = "admin/skill";
export const get_skills = "admin/get-skill";
export const update_skill = "admin/update-skill";
export const delete_skill = "admin/delete-skill";

export const add_subSkill = "admin/sub-skill";
export const get_subSkill = "admin/get-sub-skill";
export const update_subSkill = "admin/update-sub-skill";
export const delete_subSkill = "admin/delete-sub-skill";

export const add_remedy = "admin/add-remedy";
export const get_remedy = "admin/view-remedy";
export const update_remedy = "admin/update-remedy";
export const delete_remedy = "admin/delete-remedy";

export const add_expertise = "admin/add-expertise";
export const get_expertise = "admin/get-all-expertise";
export const update_expertise = "admin/update-expertise";
export const delete_expertise = "admin/delete-expertise";

export const add_main_expertise = "admin/add-main-expertise";
export const get_main_expertise = "admin/get-all-main-expertise";
export const update_main_expertise = "admin/update-main-expertise";
export const delete_main_expertise = "admin/delete-main-expertise";

export const add_review = "admin/add-review";
export const get_review = "admin/get-all-review";
export const update_review = "admin/update-review";
export const delete_review = "admin/delete-review";
export const verify_review = "admin/verify-review";

export const add_astrologer = "admin/add-astrologer";
export const update_astrologer = "admin/update-astrologer";

export const create_recharge_plan = "admin/create_recharge_plan";
export const get_recharge_plans = "admin/get-all-recharge-plans";
export const update_recharge_plans = "admin/update-recharge-plan";
export const delete_recharge_plans = "admin/delete-recharge-plan";
export const update_recharge_plan_status = "admin/update-recharge-plan-status";

export const add_first_recharge_offer = "admin/add-first-recharge";
export const get_first_recharge_offer = "admin/get-first-recharge";
export const update_first_recharge_offer = "admin/update-first-recharge-offer";
export const delete_first_recharge_offer = "admin/delete-first-recharge-offer";

export const get_all_astrologers = "admin/get-all-astrologers";
export const verify_astrologer = "astrologer/verify-astrologer-profile";
export const delete_astrologer = "admin/delete-astrologer-account";
export const change_call_status = "astrologer/change-call-status";
export const change_chat_status = "astrologer/change-chat-status";
export const get_enquired_astrologer = "astrologer/get-enquired-astrologer";
export const change_enquiry_status = "astrologer/change_enquiry_status";

export const get_all_users = "admin/get-all-user";
export const add_notifications = "admin/add-notifications";
export const get_all_notifications = "admin/get-all-notifications";

export const get_all_customers = "admin/get-all-customers";
export const ban_customer = "admin/change-banned-status";
export const online_offline_customer = "admin/set-customer-online";
export const update_customer = "admin/update-customer-data";
export const delete_customer = "admin/delete-customer";
export const customer_chat_history = "customers/customers-chat-history";
export const customer_call_history = "customers/customers-call-history";
export const customer_payment_history = "admin/customers-payment-list";

export const add_customer_recharge = "admin/recharge-customer-wallet";

export const add_banner = "admin/add-banners";
export const get_banners = "admin/get-banners";
export const get_app_banners = "admin/get-app-banners";
export const update_banner = "admin/update-banners";
export const delete_banner = "admin/delete-banners";

export const send_customer_notification = "admin/send_customer_notification";
export const get_customer_notification = "admin/get-customer-notification";
export const send_astrologer_notification =
  "admin/send_astrologer_notification";
export const get_astrologer_notification = "admin/get-astrologer-notification";

export const get_chat_history = "admin/get_chat_history";
export const get_admin_earnig_history = "admin/get_admin_earnig_history";
export const get_call_history = "admin/get_call_history";
export const get_wallet_payments = "admin/get_wallet_payments";

export const create_language = "admin/create_language";
export const get_language = "admin/get_language";
export const update_language = "admin/update_language";
export const delete_language = "admin/delete_language";

// courses
export const live_course_payment = "live/create_orders";
export const get_course_banner = "banner/course-banner";
export const get_course_list = "admin/active_course";
export const get_demo_class_list =
  "app/course/customer/demo_class_by_course_id";
export const get_live_class_list =
  "app/course/customer/live_class_by_course_id";
export const get_workshop_list = "course/customer/workshop_by_course_id";
export const get_all_demo_class = "course/customer/demo_class";
export const get_demo_class_by_id = "course/customer/demo_class_by_id";

export const register_for_live_class = "course/customer/register_live_class";

export const get_workshop_list_without_id = "course/customer/workshop";
export const get_teachers_list = "course/customer/astrologer_by_course";
export const book_demo_class = "course/customer/booked_demo_class";
export const get_single_demo_class_by_id = "course/customer/demo_class_by_id";
export const get_single_live_class_by_id = "course/customer/live_class_by_id";
export const live_class_of_class = "course/customer/class_by_live_class_id";
export const is_registered_for_live_class =  "course/customer/check_customer_live_class_registration";
export const check_customer_demo_class_booked = "course/customer/check_customer_demo_class_booked";
export const get_current_live_courses = "course/current/course";
export const get_completed_live_courses = "course/completed/live-class";
export const get_registered_live_class = "course/customer/get_registered_live_class";
export const get_live_class_detail_by_id = "course/customer/live_class_detail_by_id";
export const get_class_by_live_class_id = "course/customer/class_by_live_class_id";
export const get_initiated_payment_of_live_class = "course/customer/get_initiated_payment_of_live_class";
export const payment_for_registration = "course/payment_for_registration";
export const get_status_for_registered_demo = "course/customer/get_status_for_registered_demo";

// Testimonials
export const get_testimonials = "app/testimonials";

// Fortune Talk
export const get_product_category_list = "web/ecommerce/fortunestore/category";
export const get_product_all_category_list = "web/ecommerce/fortunestore/allCategory";

// Blogs
export const get_blogs_list = "web/blog"
export const get_all_blogs_list = "web/blog/all_blog"


// Register in live course

export const register_live_class_for_web = "web/course/customer/register_live_class_for_web";

// Register in demo course

export const register_demo_class_for_web = "web/course/customer/booked_demo_class_for_web";

// Razor Pay
export const create_razorpay_order = "app/customers/create_razorpay_order";
export const razorpay_key = "rzp_live_X53W4ZL3ZwqaIA";

export const get_all_country = "https://api.countrystatecity.in/v1/countries";

// Thisd Party api
export const horo_chart = "horo_chart/D1";
