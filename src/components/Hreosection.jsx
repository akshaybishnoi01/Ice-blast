import React from 'react'
import { Checkicon, Dateandtime, Location, Massage, Phone } from '../assets/icon'
import Navbar from './Navbar'
import Slider from "react-slick";
const Hreosection = () => {


    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <>
            <header className=' hero_bg'>
                <div className=" container" id=' home'>
                    <div className=' d-flex flex-wrap d-none d-xl-flex justify-content-between py-2 px-xxl-4'>
                        <div className=' d-flex gap-2 color_emphasis'>
                            <Location />
                            <p className=' mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Massage />
                            <p className=' mb-0 ff-acumin  text-nowrap fs-16 fw-normal lh-24 text-center op-70'>book@dryiceblastingpro.co.uk</p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Phone />
                            <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>01865123456 </p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Dateandtime />
                            <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>Mon - Fri: 9am to 5pm</p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className='d-xl-none py-2 '>
                    <div className=' d-flex gap-2 color_emphasis mx-4'>
                        <Location />
                        <p className=' mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Massage />
                        <p className=' mb-0 ff-acumin  text-nowrap fs-16 fw-normal lh-24 text-center op-70'>book@dryiceblastingpro.co.uk</p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Phone />
                        <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>01865123456 </p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Dateandtime />
                        <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>Mon - Fri: 9am to 5pm</p>
                    </div>
                </Slider>
                <Navbar />
                <div className=' d-flex flex-column justify-content-center align-items-center pt-5 hero_pb'>
                    <h1 className=' mb-0 ff-titling lh-115 fs-96 color_emphasis fw-bold text-center mw_730 pt-sm-4 pt-3'>
                        Automotive Dry Ice Cleaning
                    </h1>
                    <p className=" mb-0 ff-acumin fw-normal color_emphasis fs-20 lh-30 text-center pt-sm-4 pt-3">
                        Discover the ultimate clean for your machine.

                    </p>
                    <p className=" mb-0 ff-acumin fw-normal color_emphasis fs-20 lh-30 text-center pb-40 ">
                        No chemicals, no abrasives and no drama.
                    </p>
                    <button className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-19 comn_btn color_emphasis'>
                        Get Instant Quote
                    </button>
                    <div className=' check_bg mt_49'>
                        <div className=' d-flex flex-wrap gap-4 justify-content-center align-items-center'>
                            <div className=' d-flex align-items-center gap-2'>
                                <Checkicon />
                                <p className=" mb-0 ff-acumin_bold fw-bold color_emphasis fs-16 lh-24">
                                    Non-Abrasive
                                </p>
                            </div>
                            <div className=' d-flex align-items-center gap-2'>
                                <Checkicon />
                                <p className=" mb-0 ff-acumin_bold fw-bold color_emphasis fs-16 lh-24">
                                    No Chemicals
                                </p>
                            </div>
                            <div className=' d-flex align-items-center gap-2'>
                                <Checkicon />
                                <p className=" mb-0 ff-acumin_bold fw-bold color_emphasis fs-16 lh-24">
                                    No Mess
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Hreosection
