import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import guruji from '../../assets/guruji.png';
import saurav from '../../assets/saurav.png';
import soniya from '../../assets/soniya.png';
import live from '../../assets/live.gif';

const LiveStreaming = () => {


  return (
    <>
      <div className='mt-12 flex'>
        <h2 className='text-[#F17806] mx-auto mb-8 justify-center text-[42px] leading-10'>Live Streaming</h2>
      </div>

      <div className='relative w-[90%] lg:w-4/5 mx-auto '>
        <div className='bg-white '>
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
            <SingleCard image={guruji}/>
            <SingleCard image={saurav}/>
            <SingleCard image={soniya}/>
            <SingleCard image={guruji}/>
            <SingleCard image={saurav}/>
            
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default LiveStreaming;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden shadow-1 rounded-3xl duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img src={image} alt="" className='w-full h-full object-cover border-8 border-[#F9F9F9] shadow-xl' />
    </div>
  );
};
