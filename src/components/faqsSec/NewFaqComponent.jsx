import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import rectick from "../../assets/image/rectick.png";


const FAQAccordion = ({ expanded, onToggle, panelId, question, answer }) => (
  <Accordion 
    expanded={expanded === panelId} 
    onChange={onToggle(panelId)} 
    className="mb-4 border border-black rounded-xl hover:border-[#F27806] transition-all duration-300"
  >
    <AccordionSummary
      expandIcon={
        <span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806] hover:bg-[#F27806] hover:text-white transition-all duration-300">
          {expanded === panelId ? '-' : '+'}
        </span>
      }
      aria-controls={`${panelId}-content`}
      id={`${panelId}-header`}
      className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
    >
      {question}
    </AccordionSummary>
    <AccordionDetails className="px-4 py-3 text-gray-700 border-t border-gray-200">
      {answer}
    </AccordionDetails>
  </Accordion>
);

FAQAccordion.propTypes = {
  expanded: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  panelId: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const faqData = [
  {
    id: 'panel1',
    question: "How many students are there in a Batch?",
    answer: "There are only 5-10 students in a batch. So, that each student can get personal attention."
  },
  {
    id: 'panel2',
    question: "How will I solve my doubts?",
    answer: "All your doubts will be solved in the class itself. You can ask your doubts with your faculty."
  },
  {
    id: 'panel3',
    question: "How are the classes conducted?",
    answer: "Our class is conducted through our own Website."
  },
  {
    id: 'panel4',
    question: "What if I miss the class?",
    answer: "Recording of your live class gets uploaded after the class gets over, so that you can revise it any time."
  },
  {
    id: 'panel5',
    question: "Do you provide certificate and is your certificate Valuable?",
    answer: "Yes, You will be provided a certificate after the successful completion of the course (including examination), which is Valuable and recognizable all across the world."
  }
];

const NewFaqComponent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90%]">
        <header className="text-center mb-12">
          <h2 className="text-[38px] font-bold text-black flex items-center justify-center gap-2">
            Understanding Astrology
            <img 
              src={rectick} 
              alt="check" 
              className="h-8 w-8 object-contain"
              loading="lazy"
            />
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {faqData.map(({ id, question, answer }) => (
              <FAQAccordion
                key={id}
                expanded={expanded}
                onToggle={handleChange}
                panelId={id}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFaqComponent;
