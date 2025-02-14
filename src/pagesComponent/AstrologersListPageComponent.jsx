import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";
import rudraAbhishekPooja from "../assets/image/rudraAbhishekPooja.jpg";
import astrologerIcon from "../assets/image/astrologerIcon.jpg";

const AstrologersListPageComponent = () => {
  return (
    <>
      <div className=" mx-auto">
        <div>
          <section className=" pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
            <div className="container">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <FortuneStoreCard
                  image={rudraAbhishekPooja}
                    name="Akshay Kumar"
                    date="05 September 2023"
                    time="7 pm (Evening)"
                    poojaType="Rudra Abhishek Pooja"
                    iconImage={astrologerIcon}
                />
                <FortuneStoreCard
                  image={rudraAbhishekPooja}
                    name="Akshay Kumar"
                    date="05 September 2023"
                    time="7 pm (Evening)"
                    poojaType="Rudra Abhishek Pooja"
                    iconImage={astrologerIcon}
                />
                <FortuneStoreCard
                  image={rudraAbhishekPooja}
                    name="Akshay Kumar"
                    date="05 September 2023"
                    time="7 pm (Evening)"
                    poojaType="Rudra Abhishek Pooja"
                    iconImage={astrologerIcon}
                />
                <FortuneStoreCard
                  image={rudraAbhishekPooja}
                    name="Akshay Kumar"
                    date="05 September 2023"
                    time="7 pm (Evening)"
                    poojaType="Rudra Abhishek Pooja"
                    iconImage={astrologerIcon}
                />
                
              </div>
            </div>
          </section>
        </div>
      </div>
      <GetInTouch />
      <SecureFooter />
    </>
  );
};

export default AstrologersListPageComponent;

const FortuneStoreCard = ({
  image,
  name,
  date,
  time,
  poojaType,
    iconImage,
}) => {
  return (
    <>
      <div className=" relative rounded-t-[10px] overflow-hidden shadow-lg">
        <img
          className="w-full h-auto lg:h-[332px]"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="absolute inset-x-0 top-0 p-4">
          <p className="text-lg text-white font-semibold">
            {poojaType}
          </p>
        </div>
        <div className="flex p-3 bg-gradient-to-r from-[#EE7105] to-[#E25803] items-center justify-start w-full rounded-b-[10px] border-none shadow-xl bg-[#F8F8F8]">
            <div>
                <img src={iconImage} alt="" className="max-w-[100px] max-h-[88px] rounded-3xl border-2 border-white" />
            </div>
          <div className="m-3">
            <h2 className="text-white text-lg">{name}</h2>
            <p className="text-white text-sm">{date}</p>
          </div>
          <div className="mx-6 flex flex-col flex-shrink-0 ml-auto ">
            {" "}
            {/* flex-shrink-0 prevents the button from shrinking */}
            <p className="text-white text-sm my-2">{time}</p>
            <button className="flex rounded-[26px] bg-gradient-to-r from-[#F4F4F4] mx-auto to-[#D9D9D9] border-0  px-6 py-1 text-center text-sm text-orange-500 focus:outline-none hover:shadow-xl tracking-wide">
              <Link to='rudra-abhishek-pooja'>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
