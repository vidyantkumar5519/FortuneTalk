import React from 'react';

const TestimonialsCards = ({ img, description, name, time, rating }) => {
    const renderStars = (rating) => {
        const maxRating = 5;
        return Array.from({ length: maxRating }, (_, index) => (
            <span
                key={index}
                className={`inline-block ${index < rating ? 'text-[#F27806]' : 'text-gray-300'}`} // Updated color
                style={{ fontSize: '2.5rem' }} // Increased font size
            >
                &#9733; {/* Star character */}
            </span>
        ));
    };

    return (
        <div
            className="testimonial-card bg-white rounded-3xl mt-3 mb-3 flex flex-col"
            style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                height: '400px', // Set a fixed height
            }}
        >
            <div className="flex items-center justify-center mb-2 p-4">
                {renderStars(rating)}
            </div>
            <div className="flex-grow">
                <p className="text-gray-600 text-sm p-4">{description}</p>
            </div>
            <div className="mt-2">
                <div className="flex items-center w-full h-full p-2 bg-gradient-to-r from-[#F27806] to-[#E15602] justify-between rounded-b-3xl border-none shadow-xl bg-[#F8F8F8]">
                    <div className="mt-2 flex items-center text-white px-2 rounded-md">
                        <img src={img} alt={name} className="w-12 h-12 object-cover rounded-full mr-4" />
                        <div>
                            <p className="font-semibold text-2xl">{name}</p>
                            <p className="text-xs">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCards;
