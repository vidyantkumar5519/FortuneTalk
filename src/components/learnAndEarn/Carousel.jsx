import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Glide from "@glidejs/glide";
import blog1 from "../../assets/icons/blog1.png";

export default function Carousel() {
  const glideRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Static course list data
  const courseList = [
    {
      _id: '1',
      image: 'https://via.placeholder.com/245x306.png?text=Course+1', // Replace with real image URLs
      title: 'Course 1'
    },
    {
      _id: '2',
      image: 'https://via.placeholder.com/245x306.png?text=Course+2', // Replace with real image URLs
      title: 'Course 2'
    },
    {
      _id: '3',
      image: 'https://via.placeholder.com/245x306.png?text=Course+3', // Replace with real image URLs
      title: 'Course 3'
    },
    {
      _id: '4',
      image: 'https://via.placeholder.com/245x306.png?text=Course+4', // Replace with real image URLs
      title: 'Course 4'
    },
    {
      _id: '5',
      image: 'https://via.placeholder.com/245x306.png?text=Course+5', // Replace with real image URLs
      title: 'Course 5'
    }
  ];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    glideRef.current = new Glide(".glide-03", {
      type: "carousel",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: { perView: 3 },
        640: { perView: 2 },
      },
    }).mount();

    return () => {
      if (glideRef.current) {
        glideRef.current.destroy();
        glideRef.current = null; // Prevent further calls
      }
    };
  }, []);

  // Determine the number of dots to show based on screen size
  const maxDots = screenWidth <= 640 ? Math.min(courseList.length, 3) : courseList.length;

  return (
    <div className="glide-03 relative">
      <div className="overflow-hidden w-full md:w-4/5 mx-auto" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0">
          {courseList.map((course, index) => (
            <li key={index} className="relative border-[9px] border-[#F9F9F9] rounded-3xl mt-2 mb-4 mx-2" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
              {/* <Link to={`/courses-demo/${course._id}`} className="block">
                <img
                  src={course.image}
                  className="m-auto h-[306px] w-[245px] object-cover rounded-3xl"
                  alt={course.title}
                />
                <div className="absolute bottom-0 left-0 flex justify-center w-full">
                  <div className="w-[245px]">
                    <h3 className="bg-black bg-opacity-20 backdrop-blur-md text-white text-lg md:text-2xl text-center px-4 rounded-b-3xl">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </Link> */}
              <div className=" flex  ">
                <div>

                </div>

                <div>
                  <img
                    src={blog1}
                    alt="hi"
                    className="w-full h-full"
                    style={{ borderRadius: "0px" }}
                  />
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4" data-glide-el="controls">
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white/20 text-black transition duration-300 hover:border-black hover:bg-black/30 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir="<" aria-label="prev slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-black">
            <title>prev slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white/20 text-black transition duration-300 hover:border-black hover:bg-black/30 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir=">" aria-label="next slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-black">
            <title>next slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
      <div className="absolute -bottom-14 flex w-full items-center justify-center gap-2" data-glide-el="controls[nav]">
        {Array.from({ length: maxDots }).map((_, index) => (
          <button key={index} className="group p-4" data-glide-dir={`=${index}`} aria-label={`goto slide ${index + 1}`}>
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        ))}
      </div>
    </div>
  );
}
