import React from 'react';
import searchIcon from '../assets/image/searchIcon.png';
import livestreamingBanner from '../assets/image/livestreamingBanner.png';
import SecureFooter from '../components/footer/SecureFooter';
import Footer from '../components/footer/Footer';


const ReturnRefundPolicies = () => {
    return (
        <>
            <div className="flex justify-center items-start">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-auto rounded-b-xl text-center">
                    <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 px-8 shadow-md rounded-b-xl">
                        Return & Refund Policies
                    </h3>
                </div>
            </div>

     

            <div className='mt-12 flex'>
                <h2 className='text-[#F17806] mx-auto justify-center text-[42px] leading-10 px-4 sm:px-8'>
               Fortune Talk Return, Refund & Cancellation Policy
                </h2>
            </div>


            <div className='m-3 md:m-8 p-3 md:p-8  leading-7'>
                <p>No refund shall be processed on the order of any reports under any circumstances if the order has reached the “processing” (Assigned to an Astrologer) stage. The risk and liability of placing an order in haste and careless manner totally lies with the User and the Website is not responsible for any refund once the processing stage has started.</p>
                <br />
                <ul class="list-disc pl-5">
                    <li>
                        No refund shall be processed once the Order has been placed and executed. However, if the User intends to cancel a successfully placed order before execution, the User is required to contact the customer care team within 1 (one) hour of making the payment, where after it is totally at the discretion of the Website whether to issue a refund.
                    </li>
                    <br />

                    <li>
                        Any technical delay or glitch reported on the Website during the processing of the request, which includes generating reports by the service provider i.e. Astrologer, shall not be eligible for claiming a refund. The User agrees that the timelines are approximate and all essential steps would be taken to adhere to the timelines as displayed.
                    </li>
                    <br />

                    <li>
                        No refund shall be processed for the reason that incorrect information or data has been provided by you. The User agrees to be careful while providing any information to the Website and must recheck the information filled before clicking on “Submit”. The User can request a change in the incorrect information or data entered provided the request for such change has been made with the customer care within 1 (one hour) of execution of the service rendered by the service provider.
                    </li>
                    <br />

                    <li>
                        No refund shall be processed for the return of any damaged product. The User undertakes and agrees that by ordering any product as displayed on the Website, the Registered User shall be fully responsible for any damage caused to the product, post its delivery. For orders made via “Cash on Delivery” method of payment, the User shall be charged for the cost of the product as displayed by the Website and the shipping/custom/courier charges as applicable, if the product is returned.
                    </li>
                    <br />

                    <li>
                        Refund on a pro-rata basis may be considered for any delay in the activation of the subscription services and any damage that may be caused to the product while in transit shall be dealt with by the Website and its agencies.
                    </li>
                    <br />

                    <li>
                        You agree that the display picture for the products listed for purchase by the User are for reference purpose only and the Website will try to deliver the product ordered in an as-is condition as displayed on the Website. The User is advised to exercise discretion in such a case and no refund shall be issued on such grounds.
                    </li>
                    <br />

                    <li>
                        The services offered and the products sold are strictly not meant to replace any philosophical, emotional, or medical treatment. The Website holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology, by the gems represented and sold on the Website. The placing of an order for buying such products or taking the services is solely at the discretion and will of the User and the Website does not have any responsibility upon the products sold. The User is advised to exercise discretion in such a case and no refund shall be issued on such grounds.
                    </li>

                    <li>
                        No refund shall be processed for providing a wrong contact number for the purpose of availing the “Call with Astrologer” feature. The User once opted for this feature is advised to keep the Contact Number in full coverage area and must answer the call when received. No refund shall be processed for any call which gets connected.
                    </li>
                    <br />

                    <li>
                        The refunds, if any, shall be processed after deduction of the transaction charges levied by the Bank and/or the Payment Gateway, to & fro cost of the shipping and/or courier charges (With regard to the purchase of a product listed on the Website), customs duty (if levied), and/or any other charges that may have been incurred by the Website during processing and/or delivering the service, as applicable.
                    </li>
                    <br />

                    <li>
                        In case the Website or Payment gateway’s webpage, that is linked to the Website, is experiencing any server-related issues like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:
                    </li>
                    <br />

                    <li>
                        In case the Bank Account appears to be debited, ensure that you do not make the payment twice and immediately thereafter contact the Website via customer care to confirm payment.
                    </li>
                    <br />

                    <li>
                        In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.
                    </li>
                    <br />

                    <li>
                        However, a refund for multiple payments, if any, even after the above precaution against the same order shall be refunded in full without deduction of the transaction charges as mentioned above. The Website shall only retain the cost of one single order as intended to be placed by the User.
                    </li>
                    <br />

                    <li>
                        If there are orders that the Website is unable to accept and must cancel, the Website at its sole discretion reserves the right to refuse or cancel any order for any reason whatsoever. Some situations may result in the order being cancelled and include, without limitation, non-availability of the service, inaccuracy, error in pricing information, or other problems as identified. If the User’s order is cancelled after charges being paid against the said service, the said amount paid for booking shall be refunded.
                    </li>
                    <br />

                </ul>
                <br />

            </div>

            <Footer />
        </>
    );
}


export default ReturnRefundPolicies;
