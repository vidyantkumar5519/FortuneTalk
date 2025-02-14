import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (  
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-4 border border-black rounded-xl">
        <AccordionSummary
          expandIcon={<span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806]">{expanded === 'panel1' ? '-' : '+'}</span>}
          aria-controls="panel1-content"
          id="panel1-header"
          className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
        >
          How many students are there in a Batch?
        </AccordionSummary>
        <AccordionDetails>
          There are only 5-10 students in a batch. So, that each student can get personal attention.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="mb-4 border border-black rounded-xl">
        <AccordionSummary
          expandIcon={<span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806]">{expanded === 'panel2' ? '-' : '+'}</span>}
          aria-controls="panel2-content"
          id="panel2-header"
          className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
        >
          How will I solve my doubts?
        </AccordionSummary>
        <AccordionDetails>
          All your doubts will be solved in the class itself. You can ask your doubts with your faculty.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="mb-4 border border-black rounded-xl">
        <AccordionSummary
          expandIcon={<span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806]">{expanded === 'panel3' ? '-' : '+'}</span>}
          aria-controls="panel3-content"
          id="panel3-header"
          className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
        >
          How are the classes conducted?
        </AccordionSummary>
        <AccordionDetails>
          Our class is conducted through our own Website.
        </AccordionDetails>
      </Accordion>
 
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="mb-4 border border-black rounded-xl">
        <AccordionSummary
          expandIcon={<span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806]">{expanded === 'panel4' ? '-' : '+'}</span>}
          aria-controls="panel4-content"
          id="panel4-header"
          className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
        >
          What if I miss the class?
        </AccordionSummary>
        <AccordionDetails>
          Recording of your live class gets uploaded after the class gets over, so that you can revise it any time.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="mb-4 border border-black rounded-xl">
        <AccordionSummary
          expandIcon={<span className="text-xl flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#F27806] text-[#F27806]">{expanded === 'panel5' ? '-' : '+'}</span>}
          aria-controls="panel5-content"
          id="panel5-header"
          className="list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4"
        >
          Do you provide certificate and is your certificate Valuable?
        </AccordionSummary>
        <AccordionDetails>
          Yes, You will be provided a certificate after the successful completion of the course (including examination), which is Valuable and recognizable all across the world.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
