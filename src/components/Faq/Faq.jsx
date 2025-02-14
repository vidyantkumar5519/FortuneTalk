import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faMinusCircle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// Initialize FontAwesome library
library.add(faPlusCircle, faMinusCircle, faCheckSquare);

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How many students are there in a Batch?",
            answer: "Each batch consists of 20-30 students to ensure personalized attention."
        },
        {
            question: "How will I solve my doubts?",
            answer: "You can solve your doubts through our dedicated doubt-solving sessions and online forums."
        },
        {
            question: "How are the classes conducted?",
            answer: "Classes are conducted online through live sessions and recorded videos."
        },
        {
            question: "What if I miss the class?",
            answer: "If you miss a class, you can access the recorded session later at your convenience."
        },
        {
            question: "Do you provide certificate and is your certificate Valuable?",
            answer: "Yes, we provide a certificate upon completion of the course, which is recognized in the industry."
        }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white flex flex-col items-center p-4 ">
            <div className="w-full max-w-7xl">
                <h1 className="text-3xl font-bold text-center mt-8 mb-4">
                    Understanding Astrology <FontAwesomeIcon icon={faCheckSquare} className="text-orange-500" />
                </h1>
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-black px-6 rounded-2xl py-6 shadow-lg">
                            <div className="flex justify-between items-center cursor-pointer text-lg" onClick={() => toggleAnswer(index)}>
                                <span>{faq.question}</span>
                                <FontAwesomeIcon icon={openIndex === index ? faMinusCircle : faPlusCircle} className="text-orange-500" />
                            </div>
                            {openIndex === index && (
                                <div className="mt-2">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;