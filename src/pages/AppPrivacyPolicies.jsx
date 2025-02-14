import React from 'react';
import SecureFooter from '../components/footer/SecureFooter';
import AppNav from '../components/navbar/AppNav';


const AppPrivacyPolicies = () => {
    return (
        <>
          <AppNav/>
            <div className="flex justify-center items-start">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-auto rounded-b-xl text-center">
                    <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 px-8 shadow-md rounded-b-xl">
                        Privacy Policy
                    </h3>
                </div>
            </div>
            <div className='m-3 md:m-8 p-3 md:p-8  leading-7'>
                <p>Welcome to Fortune Talk, a Counsellor company dedicated to providing personalized Counsellor insights and guidance. This Privacy Policy outlines how we collect, use, disclose, and protect the personal information of our users. By accessing or using our services, you agree to the terms described in this policy.</p>
                <br />
                <p>
                1. Information We Collect: We collect the following types of information to provide and improve our services: Personal Information: When you create an account, we may collect your name, email address, date of birth, and other relevant personal details. Birth Information: To provide accurate Counsellor insights, so that our counsellor can relate to you more accurately and can under you and your thoughts in better way.
                <br />
                <b> Usage Data:</b> We may collect information about how you interact with our website and services, including log data, device information (Device id) so that you don’t face any issue while connecting with the counsellor usage patterns.
                </p>
                <br />

                <p>
                2. How We Use Your Information:
                <br />
                We use your information for the following purposes:
                <br />
                <b> Counsellor Services:</b> We use your birth information to generate personalized Counsellor.
                <br />
                <b> Communication: </b> We analyse usage data to improve our services, user experience, and develop new features.
                <br />
                <b> Improvement: </b> We analyse usage data to improve our services, user experience, and develop new features.
                <br />
                <b> Customer Support: </b>  Your information helps us assist you effectively when you reach out to our customer support team.
                </p>
                <br />

                <p>
                <b>  3. Data Security: </b> We take security seriously and employ measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of data transmission over the internet is entirely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <br />

                <p>
                <b>  4. Data Sharing and Disclosure: </b> We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following cases: Service Providers: We may share information with trusted service providers who assist us in delivering our services, but only for the purposes outlined in this policy. Legal Requirements: We may disclose your information if required by law, subpoena, or other legal processes.
                </p>
                <br />

                <p>
                <b>  5. Your Choices: Account Settings: </b> You can review and update your account information at any time by logging into your account. Opting Out: You can unsubscribe from our marketing communications by following the instructions in the emails we send you. Cookies: You can manage your cookie preferences through your browser settings.
                </p>
                <br />

                <p>
                <b> 6. Children's Privacy: </b> Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
                </p>
                <br />

                <p>
                <b> 7. Changes to this Privacy Policy: </b> We may update this Privacy Policy from time to time. We will notify you of significant changes through email or by posting a notice on our website. Your continued use of our services after the changes means you accept the updated policy.
                </p>
                <br />

                <p>
                <b> 8. Contact Us: </b> If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at  <span > <a href="mailto:Contact@fortunetalk.co.in" class="text-blue-500 underline">contact@fortunetalk.co.in</a>. </span>
                </p>
                <br />

                <p>
                By using Fortune Talk's services, you agree to the terms outlined in this Privacy Policy. Thank you for entrusting us with your Counsellor journey.
                </p>
                <br />

            </div>
            <SecureFooter />
        </>
    );
}


export default AppPrivacyPolicies;
