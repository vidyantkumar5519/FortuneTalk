import React from "react";
import { Link } from "react-router-dom";
import spellCandle from "../assets/image/spellCandle.png";
import careerSpell from "../assets/image/careerSpell.png";
import blackMagic from "../assets/image/blackMagic.png";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";

const spellsData = [
  { image: spellCandle, titleLeft: "Love Honey Spell", titleRight: "₹ 501 /-", btnHref: "/love-honey-spell" },
  { image: careerSpell, titleLeft: "Career Spell", titleRight: "₹ 501 /-", btnHref: "/career-spell" },
  { image: spellCandle, titleLeft: "Love Honey Spell", titleRight: "₹ 501 /-", btnHref: "/love-honey-spell-2" },
  { image: careerSpell, titleLeft: "Career Spell", titleRight: "₹ 501 /-", btnHref: "/career-spell-2" },
  { image: spellCandle, titleLeft: "Love Honey Spell", titleRight: "₹ 501 /-", btnHref: "/love-honey-spell-3" },
  { image: careerSpell, titleLeft: "Career Spell", titleRight: "₹ 501 /-", btnHref: "/career-spell-3" },
];

const Spell = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-center my-6">
          <img src={blackMagic} alt="" className="rounded-3xl w-full h-auto max-w-[90%] lg:max-w-[90%] lg:h-[288px] object-cover" />
        </div>
        <section className="bg-gray-2 pb-5 w-full lg:w-[90%] mx-auto pt-6 dark:bg-dark lg:pb-8 lg:pt-[60px]">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {spellsData.map((spell, index) => (
                <div className="px-2 sm:px-0" key={index}>
                  <FortuneStoreCard
                    image={spell.image}
                    titleLeft={spell.titleLeft}
                    titleRight={spell.titleRight}
                    btnHref={spell.btnHref}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <GetInTouch />
      <SecureFooter />
    </>
  );
};

const FortuneStoreCard = ({ image, titleLeft, titleRight, btnHref }) => {
  return (
    <div className="relative overflow-hidden flex justify-center rounded-[34px] shadow-lg shadow-[#9B9696]"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
      <div className="relative w-full lg:w-auto container rounded-[34px]">
        <img
          src={image}
          alt=""
          className="w-full h-[300px] lg:h-[300px] object-cover rounded-[34px] shadow-2xl border-4 border-white shadow-[#9B9696]"
        />
        <div className="absolute inset-x-0 rounded-b-[34px] bottom-0 border-x-4 border-b-4 border-white flex justify-center mx-auto items-center bg-black bg-opacity-50 backdrop-blur-lg backdrop-filter">
          <Link
            to={btnHref ? btnHref : "#"}
            className="inline-block rounded-xl drop-shadow-xl shadow-[#000000] w-full px-6 py-3 h-10 items-center text-white text-body-color transition"
          >
            <div className="flex justify-between px-2 items-center">
              <p className="text-sm font-semibold">{titleLeft}</p>
              <p className="text-sm font-medium">{titleRight}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spell;
