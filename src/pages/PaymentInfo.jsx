import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navgrahaPooja from "../assets/image/navgrahaPooja.png";
import editText from "../assets/image/edit-text.png";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useRazorpay from "react-razorpay";
import {
  api_url,
  create_razorpay_order,
  razorpay_key,
} from "../utils/Constants";
import { ApiRequest } from "../utils/apiRequest";
import Swal from "sweetalert2";
import { useCallback } from "react";
import * as CoursesActions from "../redux/Actions/courseActions";
import { connect } from "react-redux";

const CustomRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: "#4A4A4A", // Dark gray color for selected state
  },
  "&.Mui-checked:hover": {
    backgroundColor: "rgba(74, 74, 74, 0.1)", // Optional hover effect
  },
}));

const LivePaymentInformation = ({ dispatch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModalType, setOpenModalType] = useState(null);
  const openRegistrationModal = () => setOpenModalType("registration");
  const openInstallmentModal = () => setOpenModalType("installment");
  const closeModal = () => setOpenModalType(null);
  const [isInstallment, setIsInstallment] = useState(false);
  const { itemData } = location.state || {}; // Retrieve the passed data
  console.log(itemData?.courseId);

  const [installment, setInstallment] = useState(null);

  //  Razorpay Section

  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(
    async ({ price, type }) => {
      try {
        const orderResponse = await ApiRequest.postRequest({
          url: api_url + create_razorpay_order,
          header: "json",
          data: {
            amount: price,
            // amount: 1,
          },
        });

        console.log("rayzorPayResponse  ====>>>", orderResponse);

        if (!orderResponse?.success) {
          // showToastMessage({ message: 'Payment Failed' })
          Swal.fire({
            title: "Payment Failed!",
            text: "Sorry, we're currently experiencing difficulties completing your payment.",
            icon: "error",
          });
          return;
        }

        const options = {
          key: razorpay_key,
          amount: orderResponse?.data?.amount,
          // amount: 100,
          currency: "INR",
          name: "FortuneTalk",
          description: "Astrology",
          image: "https://example.com/your_logo",
          order_id: orderResponse?.data?.id,
          handler: (res) => {
            console.log(res);
            console.log(type);
            if (type == "registration") {
              const payload = {
                data: {
                  registrationId: itemData?.result?._id,
                },
                navigate,
              };
              dispatch(CoursesActions.onRegisteredForLiveClass(payload));
            }
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzpay = new Razorpay(options);

        rzpay.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzpay.open();
      } catch (e) {
        console.error(e);
      }
    },
    [Razorpay, dispatch]
  );

  const price = itemData?.price || 0;
  const gstAmount = (price * 0.18).toFixed(2);
  const totalPrice = (parseFloat(price) + parseFloat(gstAmount)).toFixed(2);
  const registrationFees = "1000"; // String with comma
  const registrationFeesNumber = parseFloat(registrationFees.replace(/,/g, '')); // Remove comma and convert to number
  const registrationGst = (registrationFeesNumber * 0.18).toFixed(2);
  const totalRegistration = (registrationFeesNumber + parseFloat(registrationGst)).toFixed(2);
  const fullPayment = (price - 1000).toFixed(2);
  const fullGstAmount = (price * 0.18).toFixed(2);
  const fullAmount = (parseFloat(fullPayment) + parseFloat(fullGstAmount)).toFixed(2);

  const handleProceed = () => {
    setIsInstallment(true);
  };

  const handleBack = () => {
    setIsInstallment(false);
  };

  return (
    <>
      <div className="bg-[#FFF0E0]">
        <div className="bg-white">
          <h3 className="text-[#F27806] text-center text-2xl font-bold py-5">
            Payment Information
          </h3>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-8 mb-4 md:w-4/5 mx-auto border-[6px] border-[#F27806] bg-[#F8F8F8] rounded-3xl">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <img
                src={itemData?.courseId?.image}
                alt=""
                className="w-full h-full mt-10 md:w-[438px] justify-center items-center md:h-[274px] mx-auto rounded-3xl"
              />
              <h3 className="text-[#F27806] my-4 text-center text-2xl font-bold">
                {itemData?.courseId?.title}
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full bg-[#F8F8F8] h-full rounded-r-3xl">
              <div className="flex flex-col px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between pt-8">
                    <p className="text-base leading-none text-gray-800 font-semibold">
                      Course fees <br />
                      <span className=" font-normal" > (includes ₹ 1000 registration fees)</span>
                    </p>
                    {/* <p className="text-xl font-bold leading-none text-gray-800">₹ 11,000</p> */}
                    {!itemData?.result?.registrationPaymentStatus ? (
                      <p className="text-xl font-bold leading-none text-gray-800">
                        {itemData?.price}
                      </p>
                    ) : (
                      <p className="text-xl font-bold leading-none text-gray-800">
                        {itemData?.price - 1000}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      GST 18%
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ₹ {gstAmount}
                    </p>
                  </div>
                </div>
                <div>
                  <hr className="my-4 border-2 border-[#D9D9D9]" />
                  <div className="flex items-center justify-between">
                    <p className="text-xl leading-normal text-gray-800">
                      Total Balance
                    </p>
                    <p className="text-xl font-bold leading-normal text-right text-gray-800">
                      {" "}
                      ₹ {totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3">
          {!itemData?.result?.registrationPaymentStatus ? (
            <button
              className="flex rounded-3xl mx-auto bg-[#F27806] border-0 px-6 py-2 text-center text-xl text-white focus:outline-none hover:shadow-xl tracking-wide"
              onClick={openRegistrationModal}
            >
              Proceed for Registration Payment
            </button>
          )
          :
          (
            <button
            className="flex rounded-3xl mx-auto bg-[#F27806] border-0 px-6 py-2 text-center text-xl text-white focus:outline-none hover:shadow-xl tracking-wide mt-2"
            onClick={openInstallmentModal}
          >
            Proceed for Course Fees Payment
          </button>
          )}

         
        </div>

        {/* Registration fee Modal */}
        {openModalType === "registration" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#F27806" }}
              >
                Pay Registration Fees
              </h3>
              <p className="mb-1">
                Please pay registration fees for the Live class.
              </p>
              <div className="w-full bg-[#F8F8F8] h-full rounded-r-3xl">
                <div className="flex flex-col px-0 py-0 justify-between overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between pt-8">
                      <p className="text-base leading-none text-gray-800">
                        Registration fees
                      </p>
                      <p className="text-xl  leading-none text-gray-800">
                        ₹ {registrationFees}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8">
                      <p className="text-base leading-none text-gray-800">
                        GST
                      </p>
                      <p className="text-xl  leading-none text-gray-800">
                        ₹ {registrationGst}
                      </p>
                    </div>
                  </div>
                  <div>
                    <hr className="my-4 border-2 border-[#D9D9D9]" />
                    <div className="flex items-center justify-between">
                      <p className="text-xl leading-normal text-gray-800">
                        Total Balance
                      </p>
                      <p className="text-xl font-bold leading-normal text-right text-gray-800">
                        ₹ {totalRegistration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-end mt-5"
                onClick={() =>
                  handlePayment({ price: (totalRegistration), type: "registration" })
                }
              >
                <p className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer">
                  Proceed to pay
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Installment Modal */}

        {openModalType === "installment" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>

              {isInstallment ? (
                <>
                  <button
                    onClick={handleBack}
                    className="absolute top-2 left-2 flex items-center text-base text-[#F27806] hover:text-[#E15602] transition duration-300"
                  >
                    <svg
                      className="w-6 h-6 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back
                  </button>
                  <h4 className="text-xl font-bold mb-4 text-center">
                    Choose Installment Option
                  </h4>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="installment-radio-group"
                      defaultValue="first"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="first"
                        control={<CustomRadio checked={installment == 40} />}
                        label="1st Installment 40%"
                        onClick={() => {
                          if (installment == 40) {
                            setInstallment(null);
                          } else {
                            setInstallment(40);
                          }
                        }}
                      />
                      <FormControlLabel
                        value="second"
                        control={<CustomRadio checked={installment == 60} />}
                        label="2nd Installment 60%"
                        onClick={() => {
                          if (installment == 60) {
                            setInstallment(null);
                          } else {
                            setInstallment(60);
                          }
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                  <div
                    onClick={() => {
                      if (installment) {
                        handlePayment({
                          price: (itemData?.price * installment) / 100 + (((itemData?.price * installment) / 100) * 18 / 100),
                          type: "installment",
                        });
                      }
                    }}
                    className="flex justify-end mt-5"
                  >
                    <p className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer">
                      Confirm Installment Payment
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full bg-[#F8F8F8] h-full rounded-r-3xl">
                  <div className="flex flex-col px-0 py-0 justify-between overflow-y-auto">
                    <div>
                      <div className="flex items-center justify-between pt-8">
                        <p className="text-base leading-none text-gray-800">
                          Course Fees
                        </p>
                        <p className="text-xl  leading-none text-gray-800">
                          ₹ {fullPayment}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-8">
                        <p className="text-base leading-none text-gray-800">
                          GST 18%
                        </p>
                        <p className="text-xl  leading-none text-gray-800">
                          ₹ {fullGstAmount}

                        </p>
                      </div>
                    </div>
                    <div>
                      <hr className="my-4 border-2 border-[#D9D9D9]" />
                      <div className="flex items-center justify-between">
                        <p className="text-xl leading-normal text-gray-800">
                          Total Balance
                        </p>
                        <p className="text-xl leading-normal text-right text-gray-800">
                          ₹ {fullAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <p
                      className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer"
                      onClick={() => handleProceed()}
                    >
                      Pay in installments
                    </p>
                    <div
                      onClick={() =>
                        handlePayment({
                          price: itemData?.price,
                          type: "full payment",
                        })
                      }
                    >
                      <p className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer">
                        Buy Now
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LivePaymentInformation);
