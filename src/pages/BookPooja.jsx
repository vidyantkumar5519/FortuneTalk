import React from "react";
import { Link } from "react-router-dom";
import poojaKit from "../assets/image/poojaKit.png";
import marriageImage from "../assets/image/marriageimage.png";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";

const BookPooja = () => {
    return (
      <>
        <div className=" mx-auto">
          <img src={poojaKit} alt="" className="my-6 rounded-3xl mx-auto w-full lg:w-[90%] h-auto lg:h-[288px] object-cover" />
          <div>
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border">
            <h3 className="text-[#848484] text-center text-lg py-4 shadow-xl font-semibold">Book a Pooja</h3>
        </div>
            <section className="bg-gray-2 pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
              <div className="container">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <FortuneStoreCard
                  image={marriageImage}
                  titleLeft="Attract Love and Get Married"
                  descLeft="with Vivah Badha Dosh Nivaran Puja"
                  titleRight="₹ 6750 /-"
                  btnHref="/astrologers-list"
                />
                <FortuneStoreCard
                  image={marriageImage}
                  titleLeft="Attract Love and Get Married"
                  descLeft="with Vivah Badha Dosh Nivaran Puja"
                  titleRight="₹ 6750 /-"
                  btnHref="/astrologers-list"
                />
                <FortuneStoreCard
                  image={marriageImage}
                  titleLeft="Attract Love and Get Married"
                  descLeft="with Vivah Badha Dosh Nivaran Puja"
                  titleRight="₹ 6750 /-"
                  btnHref="astrologers-list"
                />
                <FortuneStoreCard
                  image={marriageImage}
                  titleLeft="Attract Love and Get Married"
                  descLeft="with Vivah Badha Dosh Nivaran Puja"
                  titleRight="₹ 6750 /-"
                  btnHref="/astrologers-list"
                />
                
                </div>
              </div>
            </section>
          </div>
        </div>
        <GetInTouch/>
        <SecureFooter/>
      </>
    );
  };
  

export default BookPooja;


const FortuneStoreCard = ({ image, titleLeft, descLeft, titleRight, btnHref }) => {
  return (
    <div className="relative overflow-hidden flex justify-center rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <div className="relative w-full lg:w-auto container">
        <img
          src={image}
          alt=""
          className="w-full lg:w-[613px] h-[250px] lg:h-[300px] object-cover rounded-[34px] border-8 border-white shadow-md shadow-[#9B9696]"
        />
        <div className="absolute inset-x-0 rounded-b-3xl bottom-0 border-x-8 border-b-8 border-white flex justify-center mx-auto items-center bg-black bg-opacity-50 backdrop-blur-lg backdrop-filter">
          <Link
            to={btnHref ? btnHref : "#"}
            className="inline-block rounded-xl drop-shadow-xl shadow-[#000000] w-full px-4 py-2 h-auto items-center text-white text-body-color transition"
          >
            <div className="flex justify-between px-2 items-center">
              <div className="flex-col">
                <p className="text-lg font-semibold">{titleLeft}</p>
                <p className="text-sm font-normal">{descLeft}</p>
              </div>
              <p className="text-md font-medium">{titleRight}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

