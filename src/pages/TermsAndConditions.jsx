import React from 'react';
import searchIcon from '../assets/image/searchIcon.png';
import livestreamingBanner from '../assets/image/livestreamingBanner.png';
import SecureFooter from '../components/footer/SecureFooter';
import Footer from '../components/footer/Footer';


const TermsAndConditions = () => {
    return (
        <>
            <div className="flex justify-center items-start">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-auto rounded-b-xl text-center">
                    <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 px-8 shadow-md rounded-b-xl">
                        Terms And Conditions
                    </h3>
                </div>
            </div>

            <div className='mt-12 flex'>
                <h2 className='text-[#F17806] mx-auto justify-center text-[42px] leading-10 px-4 sm:px-8'>
                FortuneTalk Terms and Conditions
                </h2>
            </div>

            <div className='m-3 md:m-8 p-3 md:p-8  leading-7'>
                <p>Welcome to Fortune Talk, a counseling platform offering personalized insights and guidance. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully before using our website or services.</p>
                <br />
                <p>
                    <b>1. Acceptance of Terms:</b> By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <br />

                <p>
                    <b>2. Privacy Policy:</b> Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our practices.
                </p>
                <br />

                <p>
                    <b>3. User Eligibility:</b>Our services are intended for individuals who are at least 18 years old or the legal age of majority in their jurisdiction. If you are under the age of 18, you may use our services only with the involvement of your parent or guardian.
                </p>
                <br />

                <p>
                    <b>4. Counseling Guidance:</b>  Our services provide counseling insights and guidance based on the information you provide. These insights are for informational purposes only. We do not provide medical, financial, legal, or professional (business) advice. Always consult appropriate professionals for such matters.
                </p>
                <br />

                <p>
                    <b>5. Intellectual Property:</b> All content on our website, including text, graphics, images, logos, and software, is the property of FortuneTalk and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify any content without our written consent.
                </p>
                <br />

                <p>
                <b>6. Prohibited Activities:</b>  You agree not to:
                </p>
                <br />

                <p>
                    <b>Use our services for any unlawful or unauthorized purpose.</b>
                    Impersonate any person or entity or falsely state or misrepresent your affiliation. <br />
Interfere with or disrupt the operation of our services. <br />
Engage in any activity that could compromise the security of our website or user's data. <br />
Limitation of Liability: We strive to provide reliable counseling insights, but we do not guarantee the accuracy, completeness, or reliability of the information provided. You use our services at your own risk.
                </p>
                <br />

                <p>
                <b>Indemnification:</b>
 You agree to indemnify and hold Fortune Talk and its affiliates, employees, and partners harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of our services, violation of these Terms, or infringement of any rights.
                  
                </p>
                <br />
                <p>
                <b> Changes to Terms:</b>
                We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after changes have been made constitutes your acceptance of the revised terms.
                </p>
                <br />
                <p>
                <b> Cancellation:</b>
                We reserve the right to suspend or to cancel your access to our services at anytime, with or without cause. (If you will find using any abusive word or any unacceptable activities like- nudity, sexuality etc.)
                </p>
                <br />
                <p>
                <b> Governing Law:</b>
                These Terms and Conditions are governed by the laws of [Jurisdiction], without regard to its conflict of laws principles.
                </p>
                <br />
               
                <p>
                Thank you for choosing Fortune Talk for your counseling journey. If you have any questions or concerns about these terms, please contact us at 
                    <span > <a href="mailto:Contact@fortunetalk.co.in" class="text-blue-500 underline">contact@fortunetalk.co.in</a>. </span>
                </p>

            </div>

            {/* old  */}
            {/* <div className='m-3 md:m-8 p-3 md:p-8  leading-7'>
                <p>Welcome to Fortune Talk, an astrology company offering personalized astrological insights and guidance. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully before using our website or services.</p>
                <br />
                <p>
                    <b>1. Acceptance of Terms:</b> By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <br />

                <p>
                    <b>2. Privacy Policy:</b> Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our practices.
                </p>
                <br />

                <p>
                    <b>3. User Eligibility:</b> Our services are intended for individuals who are at least 18 years old or the legal age of majority in their jurisdiction. If you are under the age of 18, you may use our services only with the involvement of a parent or guardian.
                </p>
                <br />

                <p>
                    <b>4. Astrological Guidance:</b> Our services provide astrological insights and guidance based on the information you provide. These insights are for entertainment and informational purposes only. We do not provide medical, financial, legal, or professional advice. Always consult appropriate professionals for such matters.
                </p>
                <br />

                <p>
                    <b>5. Accuracy of Information:</b>You agree to provide accurate and complete information, especially your birth date, time, and place, for accurate astrological readings. We are not responsible for any incorrect information provided by you that may affect the accuracy of the insights provided.
                </p>
                <br />

                <p>
                    <b>6. Intellectual Property:</b>All content on our website, including text, graphics, images, logos, and software, is the property of Fortune Talk and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify any content without our written consent.
                </p>
                <br />

                <p>
                    <b>7. Prohibited Activities:</b>You agree not to:
                    Use our services for any unlawful or unauthorized purpose. Impersonate any person or entity or falsely state or misrepresent your affiliation. Interfere with or disrupt the operation of our services. Engage in any activity that could compromise the security of our website or users' data.
                </p>
                <br />

                <p>
                    <b>8. Limitation of Liability:</b>We strive to provide accurate and reliable astrological insights, but we do not guarantee the accuracy, completeness, or reliability of the information provided. You use our services at your own risk.
                </p>
                <br />
                <p>
                    <b>9. Indemnification:</b>You agree to indemnify and hold Fortune Talk and its affiliates, employees, and partners harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of our services, violation of these Terms, or infringement of any rights.
                </p>
                <br />
                <p>
                    <b>10. Changes to Terms:</b>We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after changes have been made constitutes your acceptance of the revised terms.
                </p>
                <br />
                <p>
                    <b>11. Termination:</b>We reserve the right to suspend or terminate your access to our services at any time, with or without cause.
                </p>
                <br />
                <p>
                    <b>12. Governing Law:</b>
                </p>These Terms and Conditions are governed by the laws of [Jurisdiction], without regard to its conflict of laws principles.
                <br />
                <br />

                <p>
                    Thank you for choosing Fortune Talk for your astrological journey. If you have any questions or concerns about these terms, please contact us at
                    <span > <a href="mailto:Contact@fortunetalk.co.in" class="text-blue-500 underline">contact@fortunetalk.co.in</a>. </span>
                </p>

            </div> */}

            <Footer />
        </>
    );
}


export default TermsAndConditions;
