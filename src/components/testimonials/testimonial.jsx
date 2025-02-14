import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialsCards from './testimonialCard';
import * as TestimonialActions from '../../redux/Actions/testimonialActions';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
};

const TestimonialSliders = ({ testimonialData, dispatch }) => {
  const [loading, setLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const itemsPerSlide = 3;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        await dispatch(TestimonialActions.getTestimonials());
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div 
      className="carousel-container-wrapper mx-4 my-6"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {testimonialData && (
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
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="carousel-item p-4 flex flex-col">
              <TestimonialsCards
                img={testimonial.image}
                description={testimonial.description}
                name={testimonial.name}
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

TestimonialSliders.propTypes = {
  testimonialData: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  testimonialData: state.testimonials.testimonialData,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialSliders);
