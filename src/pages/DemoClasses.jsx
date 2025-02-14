import React, { useEffect } from 'react'
import CoursesPageComponent from '../pagesComponent/courses/CoursesPageComponent'
import AllClassesComponent from './AllClassesComponent'
import CourseClasses from './CourseClasses'
import CourseDetails from './CourseDetails'
import { Link, useParams, useNavigate } from "react-router-dom";
import rudraAbhishekPooja from "../assets/image/rudraAbhishekPooja.jpg";
import astrologerIcon from "../assets/image/astrologerIcon.jpg";
import numo from "../assets/image/numo.jpg";
import * as CoursesAction from '../redux/Actions/courseActions';
import { format } from 'date-fns';
import { connect } from 'react-redux'
import { formatTime24To12, formatTimeFromDateString } from '../utils/services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const DemoClasses = ({ dispatch, demoClass }) => {

  const navigate = useNavigate();

  console.log(formatTime24To12("17:30"));

  const { id } = useParams();
  const formattedName = id


  useEffect(() => {
    dispatch(CoursesAction.getDemoClass({ courseId: id }));
  }, [dispatch]);


  return (
    <>
      <AllClassesComponent courseId={id} />
      <div class="relative h-[700px]">

        <div class="absolute inset-0 h-1/2 bg-white"></div>

        <div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

        <div class="absolute inset-0">
          {/* <CourseClasses/> */}

          <div className=" mx-auto">
            <div>
              <section className=" pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
                <h2 className="text-3xl text-[#F27806] font-bold mb-6 -mt-4 text-center lg:text-left">
                  Demo Classes
                </h2>
                <div className="container">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

                    {demoClass && demoClass.map((item, index) => (

                      <Card
                        key={item._id}
                        image={item.image} // Use API data or fallback image
                        name={item.astrologerId.displayName}
                        title={item.className}
                        bgimg={item.image || "Course Image"}
                        to={`/course-details`}
                        // students={`(${item.students})`}
                        experience={`Experience - ${item.experience}`}
                        iconImage={item.astrologerId.profileImage || astrologerIcon} // Use API data or fallback image
                        item={item}
                        date={item.date}
                        time={item.time}
                      />
                    ))}

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => ({
  demoClass: state.courses.demoClass,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });


export default connect(mapStateToProps, mapDispatchToProps)(DemoClasses);

const Card = ({ name, to, title, bgimg, iconImage, experience, item, time, date }) => {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  const timeDate = new Date(time);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[timeDate.getDay()];
  const formattedTime = formatTimeFromDateString(item.time);

  return (
    <>
      <Link to={to} state={{ itemData: item }} className="relative block rounded-[10px] overflow-hidden shadow-2xl m-4 sm:m-4 lg:m-0">
        {/* Tilted Rectangle */}
        <div
          className="absolute w-[310px] md:w-[320px] top-0 -left-[95px] md:-left-[90px] md:top-2  text-center transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-1 py-0 md:px-0 md:py-0 shadow-lg transition-transform duration-200 transform hover:scale-105"
          style={{
            transform: 'rotate(-30deg)',
            zIndex: 20,
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: '700',
            fontSize: '25px',
            textShadow: '1px 1px 2px black' // Adjusted for blurred shadow
          }}
        >
          Free<br />
          <span style={{ display: 'block', marginTop: '-12px', textShadow: '1px 1px 2px black' }}>Demo Class</span>
        </div>


        {/* Background Image with Opacity Overlay */}
        {/* <div className="relative w-full h-[250px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="relative z-10 pt-2 px-3 bg-black bg-opacity-70 text-white">
            <h3 className="text-lg font-semibold mb-4 text-center" style={{ zIndex: 10 }}>{title}</h3>
          </div>
        </div> */}

        <div className="relative w-full h-[250px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 pt-2 px-3 bg-black bg-opacity-70 text-white">
            <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex p-2 bg-gradient-to-r from-[#F27806] to-[#E15602] items-center justify-between rounded-b-[10px] border-none shadow-xl bg-[#F8F8F8]">
          <div className="flex items-center space-x-2">
            <img
              src={iconImage}
              alt={name}
              className="max-w-[50px] max-h-[50px] sm:max-w-[80px] sm:max-h-[80px] rounded-full border-[5px] border-white"
            />
            <div className="text-white ml-2">
              <h2 className="text-xl font-small sm:font-bold">{name}</h2>
              <p className="text-xs sm:text-lg">{formattedDate}, {dayOfWeek}</p>
            </div>
          </div>
          <div className="text-white ml-auto">
            <h2 className="text-l flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              {formattedTime}
            </h2>
            <Link to="/course-details" state={{ itemData: item }}>
              <p className="bg-gray-300 text-custom-#F07708 px-4 py-2 rounded-3xl font-medium inline-block transition-transform duration-300 transform hover:scale-105" style={{ color: "#F07708" }}>
                Connect
              </p>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};





<span className="flex ml-auto items-center gap-4 rounded text-sm text-slate-500">
  <span
    className="flex gap-1 text-amber-400"
    role="img"
    aria-label="Rating: 4 out of 5 stars"
  >
    <span aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </span>
  </span>
</span> 