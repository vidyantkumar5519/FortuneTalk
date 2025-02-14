import React from 'react';
import searchIcon from '../assets/image/searchIcon.png';
import livestreamingBanner from '../assets/image/livestreamingBanner.png';
import SecureFooter from '../components/footer/SecureFooter';
import Footer from '../components/footer/Footer';


const PricingPolicies = () => {
    return (
        <>
            <div className="flex justify-center items-start">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-auto rounded-b-xl text-center">
                    <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 px-8 shadow-md rounded-b-xl">
                      Pricing Policies
                    </h3>
                </div>
            </div>
            

            <div className='mt-12 flex'>
                <h2 className='text-[#F17806] mx-auto justify-center text-[42px] leading-10 px-4 sm:px-8'>
                FortuneTalk Pricing Policy
                </h2>
            </div>

            <div className='m-3 md:m-8 p-3 md:p-8  leading-7'>
                <p>At fortunetalk.online we have customised pricing according to the services rendered by us. The details are provided to you beforehand according to the effort, efficiency and the output of the service. Typically, the range of transactions on our Android and iOS applications varies from INR 500 to 1500 per user per session.</p>
                <br />
                <p>
                    <b>Schedule of payment</b> Some of our services can be utilised for fixed durations. In such cases, it is clearly mentioned within the description of these services. The period of usage in these cases vary from 1 month to 6 months.
                </p>
                <br />

                <p>
                    <b>Price Matching</b> At fortunetalk.online we are committed to offering you the best possible prices. We will be glad to meet our competitor's pricing if you ever find a service that we offer, in the similar interest and providing same professionalism and features, available from a similar service provider.
                </p>
                <br />

                <p>
                   Our prices do not vary according to the market needs, competitor pricing etc.
                </p>
                <br />
                <p>
                    <b>Sale Adjustment</b> If a service that you have purchased is reduced in price within one weeks of your booking date, we will not be able to adjust the sale price for you. Please note that we cannot make sale adjustment. If you have booked a slot for a date, generally, we cannot reschedule the slot to another date. This will result in the cancellation of the booking/order(s). Please refer cancellation policies for more details.
                </p>
                <br />

                <p>
                    <b>Pricing Errors</b> We work hard to ensure the accuracy of pricing. Despite our efforts, pricing errors may still occur. If a service’s price is higher than the price displayed, we will cancel your booking and notify you of the cancellation.
                </p>
                <br />

                <p>
                Our service is offered for sale by Fortunetalk (Formerly Astrovedha Shastra Pvt. Ltd) for your personal needs.
                </p>
                <br />

                <p>
               Therefore, we reserve the right to refuse to sell to any person whom we believe may be misusing the service.
                </p>
                <br />
            

               
            </div>

            <Footer />
        </>
    );
}


export default PricingPolicies;
