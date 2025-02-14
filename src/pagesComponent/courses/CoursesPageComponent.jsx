import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCourseList } from '../../redux/Actions/courseActions';
import Loader from '../../components/loading/Loader';
import SecureFooter from "../../components/footer/SecureFooter";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const CoursesPageComponent = () => {
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourseList());
  }, [dispatch]);

  if (!courseList) {
    return <Loader />;
  }

  return (
    <>
      <div className="mx-auto">
        <section className="bg-gray-2 pb-5 w-full lg:w-[90%] mx-auto pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {courseList?.map((course, index) => (
                <FortuneStoreCard
                  key={index}
                  image={course.image}
                  title={course.title}
                  btnHref={`/courses-demo/${course._id}`}
                />
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

const FortuneStoreCard = ({ image, title, btnHref }) => {
  return (
    <Link to={btnHref ? btnHref : "#"} className="relative overflow-hidden flex justify-center rounded-3xl shadow-lg shadow-[#9B9696] w-[90%] mx-auto">
      <div className="relative w-full lg:w-auto container rounded-[34px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] lg:h-[350px] object-cover rounded-[34px] shadow-2xl border-8 border-white shadow-[#9B9696]"
        />
        {/* <div className="absolute inset-x-0 rounded-b-3xl bottom-0 border-x-8 border-b-8 border-white flex justify-center mx-auto items-center bg-black bg-opacity-20 backdrop-blur-lg backdrop-filter">
          <h3 className="text-xl text-center font-semibold text-white px-7 py-2">
            {title}
          </h3>
        </div> */}
        <div className="absolute inset-x-0 rounded-b-3xl bottom-0 border-x-8 border-b-8 border-white flex justify-center mx-auto items-center backdrop-blur-sm backdrop-filter">
          <h3 className="text-xl text-center font-semibold text-white px-7 py-2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CoursesPageComponent;
