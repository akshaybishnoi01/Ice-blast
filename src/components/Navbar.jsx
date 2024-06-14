import React, { useEffect, useState } from 'react'
import logo from '../assets/image/logo.svg'
const Navbar = () => {
    const [nav, setnav] = useState(true)

    useEffect(() => {
        document.body.style.overflow = nav ? "visible" : "hidden";

        return () => {
            document.body.style.overflow = "";
        }
    }, [nav]);
    return (
        <>
            <nav className="nav_bar">
                <div className=" container mw_1230">
                   <div className=" nav_bg">
                   <div className="  d-flex justify-content-between align-items-center ">
                        <div className=" d-flex align-items-center ">
                            <img src={logo} alt="logo" />
                        </div>

                        <ul className={`${nav ? "navbarHide" : "navbarShow"} d-flex m-0 p-0 align-items-center  gap_24 mobile_view `}>
                            <li onClick={() => setnav(!nav)}><a className=" mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color " href="#home">Home</a></li>
                            <li onClick={() => setnav(!nav)}><a className="mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color " href="#aboutus">About us</a></li>
                            <li onClick={() => setnav(!nav)}><a className="mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color " href="#services">Services</a></li>
                            <li onClick={() => setnav(!nav)}><a className="mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color" href="#pricing">Pricing</a></li>
                            <li onClick={() => setnav(!nav)}><a className="mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color" href="#blog">Blog</a></li>
                            <li onClick={() => setnav(!nav)}><a className="mb-0 ff-acumin_bold fs-16 lh-19 fw-bold text_color" href="#contactus">Contact us</a></li>
                            <li className=' d-lg-none d-flex'><button className=' mb-0 ff-acumin_bold fs-16 lh-19 fw-bold color_emphasis comn_btn'>
                            Call Us
                            </button></li>
                        </ul>



                        <div className=" d-lg-flex d-none">
                            <button className=' mb-0 ff-acumin_bold fs-16 lh-19 fw-bold color_emphasis comn_btn'>
                            Call Us
                            </button>
                        </div>
                        <div onClick={() => setnav(!nav)} className="menuicon d-flex flex-column gap-2 d-lg-none ms-md-3 ms-0 cur-pointer">
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>

                    </div>
                   </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
