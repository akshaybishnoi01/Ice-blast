import React from "react";
import minus from "../assets/image/minicon.svg";
import plus from "../assets/image/plus.svg";


const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
    return (
        <>
            <div className="accordion_small_box">
                <div
                    className=" d-flex flex-column flex-lg-row   justify-content-lg-between gap_40"
                    onClick={toggleAccordion}
                >
                  <div className=" d-flex justify-content-between">
                  <p className=" mb-0 ff-acumin_bold fw-bold color_lightwh fs-28 lh-39">{title}</p>
                  <div className=" d-lg-none d-block">{isOpen ? <img src={minus} alt="minus" /> :  <img src={plus} alt="plus" />}</div>
                  </div>
                    {isOpen && <div className=" mb-0 ff-acumin fw-normal fs-16 lh-25 color_lightwh op-70 max-w-551">{content}</div>}

                    <div className=" d-lg-block d-none">{isOpen ? <img src={minus} alt="minus" /> :  <img src={plus} alt="plus" />}</div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
