import React from 'react';

const Contact = () => {
  return (
    <div className='md:w-[400px] w-full flex mx-auto rounded-[25px] shadow-lg'>
      <section className="body-font relative bg-white rounded-[25px] text-black shadow-md">
        <div className="container mx-auto px-4 pt-4">
          <div className="mb-3 flex w-full flex-col text-center">
          <h1 className="title-font mb-3 text-lg  text-[#F17806] sm:text-2xl">Send message</h1>
            <p className="mx-auto text-[#B4B4B4] leading-relaxed">Feel free to reach out to us! Whether you have a question.</p>
          </div>

          <div className="mx-auto md:w-4/5 lg:w-full lg:p-4">
            <div className="-m-2 flex flex-wrap">

              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="peer w-full rounded-lg bg-[#FFF5EC] py-1 px-2 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-gray-600 focus:bg-[#FFF5EC] focus:ring-2 text-center"
                    placeholder="First Name"
                    style={{ textAlign: 'center' }}
                  />
                  <label htmlFor="firstName" className="absolute left-2 -top-5 bg-transparent text-sm leading-7 text-gray-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-500">First Name</label>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="peer w-full rounded-lg bg-[#FFF5EC] py-1 px-2 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-gray-600 focus:bg-[#FFF5EC] focus:ring-2 text-center"
                    placeholder="Last Name"
                    style={{ textAlign: 'center' }}
                  />
                  <label htmlFor="lastName" className="absolute left-2 -top-5 bg-transparent text-sm leading-7 text-gray-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-500">Last Name</label>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="peer w-full rounded-lg bg-[#FFF5EC] py-1 px-2 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-gray-600 focus:bg-[#FFF5EC] focus:ring-2 text-center"
                    placeholder="Mobile No."
                    style={{ textAlign: 'center' }}
                  />
                  <label htmlFor="mobile" className="absolute left-2 -top-5 bg-transparent text-sm leading-7 text-gray-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-500">Mobile No.</label>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded-lg bg-[#FFF5EC] py-1 px-2 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-gray-600 focus:bg-[#FFF5EC] focus:ring-2 text-center"
                    placeholder="Email"
                    style={{ textAlign: 'center' }}
                  />
                  <label htmlFor="email" className="absolute left-2 -top-5 bg-transparent text-sm leading-7 text-gray-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-500">Email</label>
                </div>
              </div>

              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-28 w-full resize-none rounded-lg bg-[#FFF5EC] py-1 px-2 text-base leading-6 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-gray-600 focus:ring-2"
                    placeholder="Message"
                    style={{ textAlign: 'center' }}
                  ></textarea>
                  <label htmlFor="message" className="absolute left-2 -top-5 bg-transparent text-sm leading-7 text-gray-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-500">Message</label>
                </div>
              </div>

              <div className="w-full p-2 text-center">
                <button className="w-full flex items-center justify-center rounded-[20px] bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 mb-2 text-lg text-white focus:outline-none hover:shadow-xl">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
