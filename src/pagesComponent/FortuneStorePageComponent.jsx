import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ProductActions from '../redux/Actions/fortunestoreActions'; // Adjust path if necessary
import { Link } from "react-router-dom";
import poojaKit from "../assets/image/poojaKit.png";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";

const FortuneStorePageComponent = () => {
  const dispatch = useDispatch();
  const productCategories = useSelector(state => state.fortunestore.productAllCategoryList);
  const isLoading = useSelector(state => state.fortunestore.isLoading);
  const error = useSelector(state => state.fortunestore.error);

  useEffect(() => {
    dispatch(ProductActions.getProductAllCategoryList()); // Correct action to fetch categories
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>; // Use isLoading instead of loading
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="w-full lg:w-[90%] mx-auto">
        <img src={poojaKit} alt="" className="my-6 rounded-3xl" />
        <div>
          <section className="bg-gray-2 pb-5 pt-10 dark:bg-dark lg:pb-10 lg:pt-[80px]">
            <div className="container">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {productCategories.map((card) => ( // Use productCategories instead of data
                  <FortuneStoreCard
                    key={card._id}
                    image={card.image}
                    title={card.title}
                    // btnHref={`/products/${card._id}`}
                    btnHref={`/products/${card.title}`}
                  />
                ))}
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

const FortuneStoreCard = ({ image, title, btnHref }) => {
  return (
    <div className="relative w-full lg:w-[280px] container rounded-[34px]" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] lg:h-[300px] object-cover rounded-[34px] border-8 border-white"
      />
      <div className="absolute inset-x-0 rounded-b-3xl bottom-0 border-x-8 border-b-8 border-white flex justify-center mx-auto items-center bg-black bg-opacity-50 backdrop-blur-lg backdrop-filter">
        <Link
          to={btnHref}
          className="inline-block rounded-xl justify-center text-center drop-shadow-xl shadow-[#000000] size-9 w-full px-5 py-2 h-10 items-center text-white text-xl font-bold text-body-color transition"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default FortuneStorePageComponent;
