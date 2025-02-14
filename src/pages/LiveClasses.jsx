import React from 'react'
import CoursesPageComponent from '../pagesComponent/courses/CoursesPageComponent'
import AllClassesComponent from './AllClassesComponent'
import CourseClasses from './CourseClasses'
import CourseDetails from './CourseDetails'
import { Link, useNavigate, useParams } from "react-router-dom";
import rudraAbhishekPooja from "../assets/image/rudraAbhishekPooja.jpg";
import astrologerIcon from "../assets/image/astrologerIcon.jpg";
import numo from "../assets/image/numo.jpg";
import { connect } from 'react-redux'
import * as CoursesAction from '../redux/Actions/courseActions';
import { useEffect } from 'react'
import { format } from 'date-fns';
import { formatTime24To12, showNumber } from '../utils/services'


const LiveClasses = ({ dispatch, liveClass }) => {

  const navigate = useNavigate();
  console.log("liveclass:", liveClass);
  const { id } = useParams();
  console.log(id);
  const formattedName = id

  useEffect(() => {
    dispatch(CoursesAction.getLiveClassList({ courseId: id }));
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
                <h2 className="text-3xl text-[#F27806] font-bold mb-6 -mt-4"> Live Classes</h2>
                <div className="container">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {/* <Card
                      image={rudraAbhishekPooja}
                      name="Tarot Guruji"
                      to='/live-course-details'
                      students="(288 students)"
                      experience="Experience - 10 years"
                      iconImage={astrologerIcon}
                    /> */}

                    {liveClass && liveClass.map((item, index) => (

                      <Card
                        key={item._id}
                        image={item.courseId.image} // Use API data or fallback image
                        name={item.astrologerId.displayName}
                        title={item.className}
                        bgimg={item.courseId.image || "Course Image"}
                        // to="/live-class" state={{ itemData: item }}
                        // students={`(${item.students})`}
                        experience={`Experience - ${item.experience}`}
                        iconImage={item.astrologerId.profileImage || astrologerIcon} // Use API data or fallback image
                        item={item}
                        date={item.date}
                        time={item.time}
                        price={item.price}
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
  liveClass: state.courses.liveClass,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LiveClasses);

const Card = ({ name, title, bgimg, iconImage, item, date, time, price }) => { 
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  const formattedTime = formatTime24To12(time); // This should be safe now

  return (
    <Link to="/live-class" state={{ itemData: item }} className="relative block rounded-[10px] overflow-hidden shadow-2xl">
      <div className="relative w-full h-[250px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 p-4 text-white">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
        </div>
      </div>

      <div className="flex p-2 bg-gradient-to-r from-[#F27806] to-[#E15602] items-center justify-between rounded-b-[10px] border-none shadow-xl bg-[#F8F8F8]">
        <div className="flex items-center space-x-2">
          <img
            src={iconImage}
            alt={name}
            className="max-w-[80px] max-h-[80px] rounded-full border-[5px] border-white"
          />
          <div className="text-white ml-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-lg">{formattedDate}</p>
            <h2 className="text-l">{formattedTime}</h2>
          </div>
        </div>
        <div className="text-white ml-auto">
          <h2 className="text-l">{showNumber(price)}</h2>
          <Link to="/live-class" state={{ itemData: item }}>
            <p className="bg-gray-300 text-custom-#F07708 px-4 py-2 rounded-3xl font-medium inline-block transition-transform duration-300 transform hover:scale-105" style={{ color: "#F07708" }}>
              Connect
            </p>
          </Link>
        </div>
      </div>
    </Link>
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
