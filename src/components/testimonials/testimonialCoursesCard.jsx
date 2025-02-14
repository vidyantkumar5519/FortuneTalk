import React from 'react';

const TestimonialsCoursesCards = ({ img, description, name, time, rating, title }) => {
    const renderStars = (rating) => {
        const maxRating = 5;
        return Array.from({ length: maxRating }, (_, index) => (
            <span
                key={index}
                className={`inline-block ${index < rating ? 'text-[#F27806]' : 'text-gray-300'}`}
                style={{ fontSize: '2rem' }} // Adjusted font size for mobile
            >
                &#9733;
            </span>
        ));
    };

    return (
        <div
            className="testimonial-card bg-white rounded-3xl mt-3 mb-5 flex flex-col"
            style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                minHeight: '330px', // Set a minimum height
            }}
        >
            <div className="flex items-center justify-center mb-1 p-2">
                {renderStars(rating)}
            </div>
            <p className="font-semibold text-xl text-center p-2">{title}</p>
            <div className="flex-grow flex items-center justify-center"> {/* Centered content */}
                <p className="text-gray-600 text-sm p-2 text-center">{description}</p>
            </div>
            <div className="mt-2">
                <div className="flex items-center w-full p-2 bg-gradient-to-r from-[#F27806] to-[#E15602] justify-between rounded-b-3xl">
                    <div className="flex items-center text-white px-2">
                        <img src={img} alt={name} className="w-10 h-10 object-cover rounded-full mr-3" />
                        <div>
                            <p className="font-semibold text-lg">{name}</p>
                            <p className="text-xs">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCoursesCards;
