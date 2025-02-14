import React from "react";
import { Link } from "react-router-dom";
import gemstoneImage1 from "../assets/image/gemstoneImage1.png"; // Ensure your image path is correct
import GetInTouch from "../components/getInTouch/GetInTouch";
import Footer from "../components/footer/Footer";

const gemstones = [
  { titleLeft: "15 Ratti Amethyst", titleRight: "₹ 501 /-", btnHref: "/ratti-amethyst", image: gemstoneImage1 },
  { titleLeft: "10 Ratti Ruby", titleRight: "₹ 800 /-", btnHref: "/ratti-ruby", image: gemstoneImage1 },
  { titleLeft: "20 Ratti Sapphire", titleRight: "₹ 1200 /-", btnHref: "/ratti-sapphire", image: gemstoneImage1 },
  { titleLeft: "5 Ratti Emerald", titleRight: "₹ 300 /-", btnHref: "/ratti-emerald", image: gemstoneImage1 },
  { titleLeft: "12 Ratti Topaz", titleRight: "₹ 450 /-", btnHref: "/ratti-topaz", image: gemstoneImage1 },
  // Add more gemstones as needed
];

const GemstonePageComponent = () => {
  return (
    <>
      <div className="mx-auto">
        <div>
          <section className="pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-3">
            <div className="container w-full">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4"> {/* Added horizontal padding for small screens */}
                {gemstones.map((gemstone, index) => (
                  <FortuneStoreCard
                    key={index}
                    image={gemstone.image}
                    titleLeft={gemstone.titleLeft}
                    titleRight={gemstone.titleRight}
                    btnHref={gemstone.btnHref}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default GemstonePageComponent;

const FortuneStoreCard = ({ image, titleLeft, titleRight, btnHref }) => {
  return (
    <div className="relative overflow-hidden flex justify-center rounded-[34px] bg-white shadow-lg shadow-gray-500" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
      <div className="relative w-full lg:w-auto container">
        <img
          src={image}
          alt=""
          className="w-full h-[250px] lg:h-[300px] rounded-[34px] border-8 border-white"
        />
        <div className="absolute inset-x-0 rounded-b-[34px] bottom-0 border-x-8 border-b-8 border-white flex justify-center mx-auto items-center bg-black bg-opacity-50 backdrop-blur-lg backdrop-filter">
          <Link 
            to={btnHref ? btnHref : "#"}
            className="inline-block rounded-xl drop-shadow-xl shadow-[#000000] w-full px-2 py-2 h-22 items-center text-white text-body-color transition"
          >
            <div className="flex justify-between px-4 items-center">
              <p className="text-lg font-medium">{titleLeft}</p>
              <p className="text-md font-medium">{titleRight}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
