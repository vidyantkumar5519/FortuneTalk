import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Loader from "../components/loading/Loader";
import * as AstrologerActions from "../redux/Actions/astrologerActions";
import Zodiac from "../components/zodiac/Zodiac";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import HeroHoro from "../components/horoscope/HeroHoro";
import FaqComponent from "../components/faqsSec/FaqComponent";
import ZodiacHoro from "../components/horoscope/ZodiacHoro";
import HoroscopeSlider from "../components/horoslider/HoroscopeSlider";
import ChatCallCard from "../components/chatCallCard/ChatCallCard";
import { ZODIAC_SIGNS, getAllHoroscopePredictions } from "../services/horoscopeService";

const Horoscope = ({ dispatch, astrologerListData }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [horoscopePredictions, setHoroscopePredictions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch astrologer list
        dispatch(AstrologerActions.getAllAstrologer());
        
        // Fetch horoscope predictions
        const predictions = await getAllHoroscopePredictions();
        setHoroscopePredictions(predictions);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HeroHoro />
      <ZodiacHoro />
      <HoroscopeSlider />
      <ChatCallCard />

      <div className="w-[90%] mx-auto my-8">
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Daily Horoscope Predictions
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {ZODIAC_SIGNS.map((sign) => (
            <div key={sign} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold capitalize mb-2">{sign}</h3>
              <p>{horoscopePredictions[sign]?.description || 'No prediction available'}</p>
            </div>
          ))}
        </div>

        <p> Other names for the horoscope frequently used in English include natal chart, astrological chart, Astro-chart, celestial map, sky-map, star-chart, cosmogram, vita sphere, radical chart, and radii. The horoscope represents a map of the sky superimposed on the Earth. Most often, it will also include information on the locations of important stars and constellations and how big or little they are concerning one another. We may use the horoscope to find out one's significant life events' times and locations and the positions of other planets in the solar system. Astrologers and fortune tellers frequently use it to forecast future trends for specific people or groups.</p>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Does a Horoscope work?
        </h2>
        <p> Yes, horoscopes or rashifal are founded on actual science, but it's a little more sophisticated than that to think that they can foretell the future with any degree of accuracy. The capacity of astrology to foretell one's future is something many people believe in, but many others don't believe it works at all, including many skeptics. Where does the truth stand, then? Should we believe in horoscopes? A legitimate science underlies astrology; therefore, yes. However, various aspects must be considered to accurately forecast someone's destiny, chief among which is their birth charts and the planets' proximity at that precise time.</p>
    
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Astrology and Horoscope
        </h2>
        <p> A predictive science, astrology has theories, claims, and conclusions that have inspired and helped individuals gain an understanding of many facets of their lives for all time. Among these are your love life, job, business, financial well-being, and many other factors. These factors influence our lives in one way or another, and we typically want them to go in a favorable direction. But we can't always do it, can we? Life is full of highs and lows, and occasionally you may find yourself in a period where all you want is to get out. That is a situation, however, in which astrology and astrologers may be able to save you.</p>
        <br/>
        <br/>
        <p> Astrologers hold that the motion of celestial bodies, such as stars and planets, impacts human behavior and personality. An illustration of the Sun, Moon, planets, and stars at a specific moment is called a horoscope. It may be applied to forecast upcoming trends for people or organizations. A horoscope is based on the alignment of the stars and planets concerning Earth at a specific period. Astrology is the idea that celestial bodies like stars and planets, which move, impact human behavior and personality. </p>
        <br/>
        <br/>
        <p> A Vedic astrologer would explain how the movement and changing of the planets is the root cause of all the events in our lives if you ask them what motivates them. These 'Navgrahas,' as we refer to them in astrology, move through the houses of the Kundli. One day, Jupiter may be in your Kundli's second house, the house of finances. Still, on the other, it may have moved to the seventh house, which is the home of partnerships, relationships, and other gooey characteristics. The brightest astrologers have researched how this shift affects the events in life.  </p>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Horoscope and Zodiac
        </h2>
        <p> We may also describe a person's personality using their zodiac sign. Knowing someone's zodiac sign might help you better understand them because each sign has unique traits. Aries, Leo, and Sagittarius are fire signs, Taurus, Virgo, and Capricorn are earth signs, and the other signs of the zodiac are air signs (Gemini, Libra, and Aquarius). Each group has distinctive traits that affect our attitudes, actions, and social relationships. Astrologers contend that the constellations and planets shape our personality in our sky at the moment of birth. They also think that because every sign has a unique set of traits, you may better comprehend them by learning about them.</p>
        <br/>
        <br/>
        <p> The zodiac is a group of 12 constellations that runs along the ecliptic, the Sun's apparent path as it round the Earth. There are 12 signs in the zodiac, each of which represents a distinct archetype or personality type. The signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, and Scorpio. Aquarius Pisces Capricorn Sagittarius. According to astrology, everyone is born under a particular sign, which impacts our personality, moral character, and life path. A horoscope is an astrological chart that displays the heavenly bodies' positions on Earth at a specific period. Astrologers utilize it to make predictions based on historical tendencies.</p>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Types of Zodiac Signs in Horoscope
        </h2>
        <p> The signs are divided into four groups, with three signs in each, based on the qualities observed: Fire, Water, Earth, and Air. The fire signs (Aries, Leo, and Sagittarius) are fearless, aggressive, inventive, and brave; nonetheless, they tend to burn too brightly and have a short tolerance. Cancer, Scorpio, and Pisces are the three water signs, and they are compassionate, wise, and in tune with their subconscious. Sometimes, people may experience emotional overload. Gemini, Libra, and Aquarius are the three air signs, and they are talkative, intelligent, and keen, with a propensity for imagination and speculative excess. Taurus, Virgo, and Capricorn are the earth signs, and they are grounded and practical, sensual, and drawn to material possessions. They are sometimes obstinate and rigid.</p>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
        Fire Sun Signs
        </h2>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
       Aries, Leo, and Sagittarius
        </h2>
        <p> As we've never stopped utilizing fire parallels in modern culture, identifying fire indicators is one of the easiest chores. In both good and bad circumstances, people are still described as 'fiery.' The impacts of fire, a chemical that has the ability to both give and take life, are obvious. Fire may illuminate the night, heat your home, or completely destroy an entire city. In humans, fire symptoms are often overt and obvious. Because of its link to the process of creation, spiritual traditions regard fire as a passionate, rebellious force. In traditional Chinese culture, fire is referred to as Huo, yang energy. It is associated with vitality and force, as well as impatience and rage.</p>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
      Water Sun Signs
        </h2>
        <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
     Cancer, Scorpio, and Pisces
        </h2>
      <p> In astrology, the Moon and water are connected. At their most basic, both speak to emotion, intuition, and memory. If the fire signs indicate solar or martian energy, the water signs are deep and lunar, the air signs are amorphous and mercurial, and the earth signs are productive and Venusian. Cancer, Scorpio, and Pisces are water signs that are sensitive and intuitive. In Chinese culture, water is referred to as Wuxing. It is also the most yin, being the most feminine, mild, receptive, and veiled of the five elements.</p>
      <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
    Air Sun Signs
        </h2>
      <h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
   Gemini, Libra, and Aquarius
        </h2>
<p> Intellectual and communicative air signals. They are specialists in the brief, the things of our world that lack physical form. Air signs are susceptible to overindulging in utter imagination since they are boundless by space and may travel everywhere, from locations to individuals. Air signals are especially susceptible to their self-projections since air lacks shape and a solid body. The zodiac calendar places Gemini first and Aquarius last, making Gemini the most experienced sign. Gemini has a baby, an innocent variation on air; Libra has a teenager who wants to try everything, and Aquarius has an elderly soul who is irritable. </p>
<h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
Earth Sun Signs
        </h2>
<h2
          className="text-[#000] text-[32px] mt-10"
          style={{
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
Taurus, Virgo, and Capricorn
        </h2>
        <p> People born under the sign of the Earth are the most practical and grounded on the planet. They are known for being unwavering, realistic, and consistent. They are useful and reliable, and you can always count on them. Furthermore, they are honest and will tell you if your relationship is stale. They truly make the finest friends. It takes a lot of effort to upset them since they take their time becoming furious. Despite their popularity, earth signs are far from uninteresting. They are highly sensuous and like amassing material possessions, especially when rewarding themselves for all their hard work. </p>

      </div>
      <FaqComponent />
      <Zodiac/>
      <Footer />
  


    </>
  );
};

const mapStateToProps = (state) => {
  return {
    astrologerListData: state.astrologerListData, 
  };
};

export default connect(mapStateToProps)(Horoscope);
