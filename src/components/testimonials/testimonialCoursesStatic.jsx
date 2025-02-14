import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialsCards from './testimonialCard';
import moment from 'moment';
import PropTypes from 'prop-types';
import TestimonialsCoursesCards from './testimonialCoursesCard';
import Ronak from '../../assets/image/Yogesh.jpeg';
import sakshi from '../../assets/image/Sakshi.jpeg';
import sujeet from '../../assets/image/Ashish.jpeg';
import nilesh from '../../assets/image/nilesh.jpeg';
import Sunidhi from '../../assets/image/Sunidhi.jpeg';
import soniya from '../../assets/image/soniya.png';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
};

// Static testimonials array
const staticTestimonials = [
  {
    id: 1,
    image: Ronak,
    description: "Fortunetalk ke through Vedic Astrology course kiya aur mera life ka perception badal gaya! 🌟 Ab main apni life ke challenges ko aur acchi tarah samajh pa raha hoon.🙌",
    name: 'Ronak',
    createdAt: '2024-10-01T12:00:00Z',
    title:"Vedic Astrology Course",
    rating: 5

  },
  {
    id: 2,
    image: sakshi,
    description: "Tarot Card Reading course bohot informative tha! 🃏✨ Fortunetalk ne mujhe apne intuition ko aur better utilize karna sikhaya. Ab main confidently readings kar rahi hoon! 🔮😊",
    name: 'Sakshi',
    createdAt: '2024-09-15T12:00:00Z',
    title:"Tarot Card Reading Course",
    rating: 5
  },
  {
    id: 3,
    image: sujeet,
    description: "Numerology course ne numbers ke magic ko samjhaya! 🔢💫 Ab main apne aur doosron ke life ka numerology ke through deep analysis kar sakta hoon. Thank you, Fortunetalk! 🙏",
    name: 'Ashish',
    createdAt: '2024-09-10T12:00:00Z',
    title:"Numerology Course",
    rating: 5
  },
  {
    id: 4,
    image:nilesh,
    description: "Fortunetalk ka Vastu Shastra course leke ghar ki energy ko transform kar diya! 🏡🔮 Ghar aur office ke vastu tips ne bohot positive impact dala. Bahut fayda hua! 💯",
    name: "Nilesh",
    createdAt: '2024-08-25T12:00:00Z',
    title:"Vastu Shastra Course",
    rating: 5
  },
  {
    id: 5,
    image: Sunidhi,
    description: "Astrology ka certification program kiya Fortunetalk se, aur mera professional career astrology field mein start ho gaya! 📜🌟 Amazing faculty aur in-depth content! 🌙✨",
    name: "Sunidhi",
    title:"Astrology Certification Program",
    createdAt: '2024-08-25T12:00:00Z',
    rating: 5
  },
  {
    id: 6,
    image: soniya,
    description: "Tarot ke practical workshop se meri readings aur bhi accurate ho gayi hain! 💫🃏 Thank you Fortunetalk for the guidance and hands-on experience.🎉",
    name: "Soniya",
    title:"Tarot Card Reading Practical Workshop",
    createdAt: '2024-08-25T12:00:00Z',
    rating: 5
  },
];

const TestimonialCoursesStatic = () => {
  const [loading, setLoading] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const itemsPerSlide = 3;

  useEffect(() => {
    setLoading(false); // Since we're using static data, no need for loading state
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div 
      className="carousel-container-wrapper mx-4 my-6"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {staticTestimonials && (
        <Carousel
          swipeable={true}
          draggable={true}
          dots={false} // Disable built-in dots
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={autoPlay}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={'desktop'}
          arrows={false}
          renderButtonGroupOutside={true}
          slidesToSlide={itemsPerSlide} // Ensure 3 items slide at once
        >
          {staticTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="carousel-item p-4 flex flex-col">
              <TestimonialsCoursesCards
                img={testimonial.image}
                description={testimonial.description}
                name={testimonial.name}
                title={testimonial.title}
                time={testimonial.createdAt ? moment(testimonial.createdAt).format("DD-MM-YYYY") : ''}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </Carousel>
      )}
      {/* Dots section removed */}
    </div>
  );
};

TestimonialCoursesStatic.propTypes = {
  testimonialData: PropTypes.array.isRequired,
};

export default TestimonialCoursesStatic;
