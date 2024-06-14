import React from 'react'
import { Instagram, Location_2, Massage_2, Phone_2, Tiktok, Time, YouTube } from '../assets/icon'
import logo2 from '../assets/image/logo2.svg'
import Slider from "react-slick";
const Footer = () => {
  
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
      <div className=' footer_bg'>
      <div className=" container" id=' home'>
                    <div className=' d-flex flex-wrap d-none d-xl-flex justify-content-between pt-lg-4 pt-3 pb-lg-5 pb-4'>
                        <div className=' d-flex gap-2 color_emphasis'>
                            <Location_2 />
                            <p className=' mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Massage_2 />
                            <p className=' mb-0 ff-acumin  text-nowrap fs-16 fw-normal lh-24 text-center op-70'>book@dryiceblastingpro.co.uk</p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Phone_2 />
                            <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>01865123456 </p>
                        </div>

                        <div className=' d-flex gap-2 color_emphasis '>
                            <Time />
                            <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>Mon - Fri: 9am to 5pm</p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className='d-xl-none pt-lg-4 pt-3 pb-lg-5 pb-4 '>
                    <div className=' d-flex gap-2 color_emphasis mx-4'>
                        <Location_2 />
                        <p className=' mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Massage_2 />
                        <p className=' mb-0 ff-acumin  text-nowrap fs-16 fw-normal lh-24 text-center op-70'>book@dryiceblastingpro.co.uk</p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Phone_2 />
                        <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>01865123456 </p>
                    </div>

                    <div className=' d-flex gap-2 color_emphasis mx-4 '>
                        <Time />
                        <p className=' text-nowrap mb-0 ff-acumin fs-16 fw-normal lh-24 text-center op-70'>Mon - Fri: 9am to 5pm</p>
                    </div>
                </Slider>
        <div className=' container'>
        <div className=' row'>
            <div className=' col-12 col-lg-4'>
              <img src={logo2} alt="logo" />
              <p className=' mb-0 ff-acumin fs-16 lh-24 fw-normal mw_558 pb-lg-0 pb-4 color_emphasis op-70 pt-2'>
                IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.
              </p>
            </div>
            <div className=' col-12 col-lg-8'>
              <div className=' row'>
                <div className=' col-6 col-sm-4 d-flex  justify-content-lg-end pe-lg-5 '>
                  <div>
                    <p className=" mb-0 ff-acumin_bold  fw-bold fs-18 lh-27 color_emphasis pb-3">
                      Quick Link
                    </p>
                    <ul className=' m-0 px-0'>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="#home">Home</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="#aboutus">About Us</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis  opacity' href="#services">Services</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis  opacity' href="#blog">Blog</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis  opacity' href="#faq">FAQ’s</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis   opacity' href="#contactus">Contact Us</a></li>

                    </ul>
                  </div>
                </div>
                <div className=' col-6 col-sm-4 d-flex justify-content-lg-end'>
                  <div>
                    <p className=" mb-0 ff-acumin_bold  fw-bold fs-18 lh-27 color_emphasis pb-3">
                      Legal Information
                    </p>
                    <ul className=' m-0 px-0'>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="#">Terms of Service</a></li>
                      <li className=' pb-12'><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="#">Privacy Policy</a></li>
                    </ul>
                    <div className=' d-sm-none d-block'>
                    <p className=" mb-0 ff-acumin_bold  fw-bold fs-18 lh-27 color_emphasis pb-3">
                    Follow us
                    </p>
                    <ul className=' m-0 d-flex gap-1 px-0'>
                      <li className=' d-flex gap-3 align-items-center  '><Instagram/></li>
                      <li className=' d-flex gap-3 align-items-center'><Tiktok/></li>
                      <li className=' d-flex gap-3 align-items-center '><YouTube/></li>
                    </ul>
                  </div>
                  </div>
                </div>
                <div className=' col-6 col-sm-4 d-sm-flex justify-content-lg-end  d-none pt-sm-0 pt-4'>
                  <div>
                    <p className=" mb-0 ff-acumin_bold  fw-bold fs-18 lh-27 color_emphasis pb-3">
                    Follow us
                    </p>
                    <ul className=' m-0 px-0'>
                      <li className=' d-flex gap-3 align-items-center  pb-3 '><Instagram/><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="https://www.instagram.com/" target='blank'>Instagram</a></li>
                      <li className=' d-flex gap-3 align-items-center pb-3'><Tiktok/><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="https://www.tiktok.com/about" target='blank'>Tiktok</a></li>
                      <li className=' d-flex gap-3 align-items-center  pb-3'><YouTube/><a className=' mb-0 ff-acumin fs-16 lh-25 fw-normal color_emphasis opacity' href="https://www.youtube.com/" target=' blank'>YouTube</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="  mb-0 ff-acumin fs-14 lh-19 fw-normal color_emphasis op-70 text-center pt-5 pb-4">
        Copyright©2024(IceBlastPro) All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default Footer