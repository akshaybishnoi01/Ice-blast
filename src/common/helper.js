import React, { useState } from 'react'
import Accordion from './Accordion';


const Helper = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <div className='   w-100'>
                <div class=" mt-50 d-flex flex-column  gap-3  w-100 ">
                    <div class="bg-sky  br-14 cur-pointer">
                        <Accordion 
                            title="Engine Bay Perfection from £375 "
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 0}
                            toggleAccordion={() => toggleAccordion(0)}
                        />
                    </div>
                    <div class="bg-cho br-14 cur-pointer">
                        <Accordion
                            title="Underbelly Deep-Clean from £750"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 1}
                            toggleAccordion={() => toggleAccordion(1)}
                        />
                    </div>
                    <div class="bg-lightylw  br-14  cur-pointer">
                        <Accordion
                            title="Ultimate Undercarriage & Engine Bay Overhaul from £1,125"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 2}
                            toggleAccordion={() => toggleAccordion(2)}
                        />
                    </div>
                    <div class="bg-ylw  br-14 cur-pointer mb-5">
                        <Accordion
                            title="Need Something Else?"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 3}
                            toggleAccordion={() => toggleAccordion(3)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Helper
