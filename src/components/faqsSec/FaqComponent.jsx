import React from "react";
import ic1 from "../../assets/image/ic1.png";
import ic3 from "../../assets/image/ic3.png";
import ic2 from "../../assets/image/ic2.png";
import ic4 from "../../assets/image/ic4.png";
import rectick from "../../assets/image/rectick.png";
import AccordionUsage from "../../pages/FaqSection";

const FaqComponent = () => {
  return (
    <div>
    <div className="mt-12 flex flex-col items-center justify-center mx-auto max-w-7xl">
  <h2
    className="text-[#000] mx-auto text-center text-[42px] leading-10 p-3 flex items-center justify-center gap-2"
    style={{
      fontFamily: "Inter",
      fontSize: "38px",
      fontWeight: "700",
    }}
  >
    Understanding Astrology
    <span>
      <img src={rectick} alt="Image" className="h-8"/>
    </span>
  </h2>
 
</div>

<div>
  
<div className='w-[90%] mx-auto my-8'>
<div
            className="mt-4 mb-4"
            style={{
              fontFamily: "Inter",
              fontSize: "26px", // Reduced font size
              fontWeight: "600",
            }}
          >
            Frequently Asked Questions
          </div>
          <AccordionUsage />
        </div>
</div>
</div>
  );
};

export default FaqComponent;
