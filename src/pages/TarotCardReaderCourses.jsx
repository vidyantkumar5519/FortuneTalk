import React from "react";
import { Link,useParams } from "react-router-dom";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";
import rudraAbhishekPooja from "../assets/image/rudraAbhishekPooja.jpg";
import astrologerIcon from "../assets/image/astrologerIcon.jpg";
import LearnAndEarnPageComponent from "../pagesComponent/LearnAndEarnPageComponent";

const AstrologersListPageComponent = () => {
    const { name } = useParams();
    const formattedName = name
    .split('-') // Split by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); 
  return (
    <>
    <LearnAndEarnPageComponent type={'courses'}/>
      <div className=" mx-auto">
        <div>
          <section className=" pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
    <h2 className="text-3xl text-[#F27806] font-bold mb-6 -mt-4">{formattedName} Courses</h2>
            <div className="container">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <Card
                  image={rudraAbhishekPooja}
                    name="Tarot Guruji"
                    to='/course-details'
                    students="(288 students)"
                    experience="Experience - 10 years"
                    iconImage={astrologerIcon}
                />
                <Card
                  image={rudraAbhishekPooja}
                    name="Tarot Guruji"
                    to='/course-details'
                    students="(288 students)"
                    experience="Experience - 10 years"
                    iconImage={astrologerIcon}
                />
                <Card
                  image={rudraAbhishekPooja}
                    name="Tarot Guruji"
                    to='/course-details'
                    students="(288 students)"
                    experience="Experience - 10 years"
                    iconImage={astrologerIcon}
                />
                <Card
                  image={rudraAbhishekPooja}
                    name="Tarot Guruji"
                    to='/course-details'
                    students="(288 students)"
                    experience="Experience - 10 years"
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

const Card = ({
  name,
  to,
  students,
    iconImage,
    experience
}) => {
  return (
    <>
     <Link to={to}>
     <div className=" relative rounded-[10px] overflow-hidden shadow-2xl">
        
        <div className="flex p-3 bg-gradient-to-r from-[#F27806] to-[#E15602] items-center justify-start w-full rounded-t-[10px] border-none shadow-xl bg-[#F8F8F8]">
            <div>
                <img src={iconImage} alt="" className="max-w-[162px] max-h-[162px] rounded-3xl border-[5px] border-white" />
            </div>
          <div className="m-4 space-y-4">
            <div className="flex items-center space-x-2">
                <h2 className="text-white text-xl font-bold">{name}</h2>
                <p className="text-white text-sm">{students}</p>
            </div>
        
            <p className="text-white text-lg font-medium">{experience}</p>
            
          </div>
        </div>

        <div className="p-4 bg-[#F9F9F9] ">
            <h3 className="text-lg">Master your Psychic Ability and Learn to Give Accurate Professional Level Tarot Card Readings</h3>
            <p className="text-base text-[#B4B4B4] py-2">COMES WITH A SAL JADE CERTIFICATE OF COMPLETION FROM THE ACCREDITED COLLEGE: THE PSYCHIC HEALING ACADEMY Also features free monthly bonus Tarot seminars  educational announcements   tarot readings to improve your skills with 10,000 other students in the course!</p>
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
