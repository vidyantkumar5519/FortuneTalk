import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import * as ProductActions from "../../redux/Actions/fortunestoreActions.js";

  const Card = () => {
  const dispatch = useDispatch();
  const productCategoryList = useSelector(state => state.fortunestore?.productCategoryList || []);
  const isLoading = useSelector(state => state.fortunestore?.isLoading || false);

  useEffect(() => {
      dispatch(ProductActions.getProductCategoryList());
  }, [dispatch]);

  return (
      <section className="bg-gray-2 pb-5 pt-1 dark:bg-dark lg:pb-10 lg:pt-[80px]">
          <div className="container">
              <div className="mt-0 mb-10 flex items-center">
                  <span className="text-[#F17806] mx-auto justify-center text-[42px] leading-10">Fortune Store</span>
              </div>
              <div className="text-[#F17806] flex justify-end cursor-pointer">
                  <Link to="/fortune-store">View all</Link>
              </div>
              {isLoading ? (
                  <p>Loading...</p>
              ) : (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {productCategoryList.length > 0 ? (
                          productCategoryList.map((card) => (
                              <SingleCard
                                  key={card._id}
                                  image={card.image}
                                  btnHref={`/products/${card.title}`}
                                  buttonText={card.title}
                              />
                          ))
                      ) : (
                          <p>No products available</p>
                      )}
                  </div>
              )}
          </div>
      </section>
  );
};

const SingleCard = ({ image, buttonText, btnHref }) => {
  return (
      <div className="transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden bg-white duration-300 rounded-[34px]" style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}>
              <img src={image} alt={buttonText} className="w-[354px] h-[300px] rounded-[34px] border-8 border-white" />
          </div>
          <div className="mt-[-10px] flex justify-center items-center z-[10]">
              {buttonText && (
                  <Link to={btnHref} className="inline-block rounded-xl bg-white border w-[260px] text-xl drop-shadow-xl shadow-[#000000] px-8 py-2 items-center text-center text-[#9B9696] font-bold text-body-color transition">
                      {buttonText}
                  </Link>
              )}
          </div>
      </div>
  );
};


const mapStateToProps = (state) => {
  // console.log("state", state); // Log the state for debugging
  return {
    productCategoryList: state.fortunestore ? state.fortunestore.productCategoryList : [], // Safely access productCategoryList
  };
};

export default connect(mapStateToProps)(Card);

