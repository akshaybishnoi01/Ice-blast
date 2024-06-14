import React , {useState}from 'react'
import car_cleaning1 from '../assets/image/car_cleaning1.png'
import car_cleaning2 from '../assets/image/car_cleaning2.png'
import car_cleaning3 from '../assets/image/car_cleaning3.png'
import mail from '../assets/image/mail.svg'
import tick from '../assets/image/tick.svg'
const Latestnews = () => {
    const [check, setcheck] = useState(false)
  
  const handlecheck = () => {
    setcheck(!check)
  }
  return (
   
    <>
    <div>
        <div className=' container' id='blog'>
            <h2 className=' mb-0 ff-titling fs-48 lh-57 fw-bold color_lightwh text-center pt-sm-4 pt-2'>
            Latest News & Insights
            </h2>
            <p className=' mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 text-center unconer_py'>
            Uncover the latest insights and innovation in car care.
            </p>
            <div className=' row d-flex justify-content-center'>
                <div className=' col-12 col-lg-4 col-sm-6'>
                     <div className=' box_wh'>
                        <img className=' w-100' src={car_cleaning1} alt="car" />
                        <p className=' mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh op_80 fw-semibold january_py'>
                        January 1st, 2024
                        </p>
                        <p className=" mb-0 ff-acumin_bold fw-bold fs-16 lh-24 color_lightwh mw_323">
                        What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning
                        </p>
                     </div>
                </div>
                <div className=' col-12 col-lg-4 col-sm-6 mt-sm-0 mt-5'>
                     <div className=' box_wh'>
                        <img className=' w-100' src={car_cleaning2} alt="car" />
                        <p className=' mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh op_80 fw-semibold january_py'>
                        January 1st, 2024
                        </p>
                        <p className=" mb-0 ff-acumin_bold fw-bold fs-16 lh-24 color_lightwh mw_323">
                        What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning
                        </p>
                     </div>
                </div>
                <div className=' col-12 col-lg-4 col-sm-6 my-lg-0 my-5'>
                     <div className=' box_wh'>
                        <img className=' w-100' src={car_cleaning3} alt="car" />
                        <p className=' mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh op_80 fw-semibold january_py'>
                        January 1st, 2024
                        </p>
                        <p className=" mb-0 ff-acumin_bold fw-bold fs-16 lh-24 color_lightwh mw_323">
                        What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning
                        </p>
                     </div>
                </div>
                <div className=' d-flex justify-content-center mt-sm-5 mt-1'>
                    <button className=' mb-0 ff-acumin_bold fw-bold color_emphasis fs-16 lh-19 comn_btn'>
                More Blogs
                </button>
                </div>
            </div>
            <div className=" d-flex justify-content-center pt-sm-5 pt-2">
            <div className=' box_b position-relative box_transy'>
                <p className=" mb-0 ff-titling fw-bold fs-48 lh-57 text-center color_emphasis">
                Join Our Mailing List
                </p>
                <p className=" mb-0 ff-acumin fw-normal fs-16 lh-24 getnews_py text-center color_emphasis">
                Get news, videos and deals straight to your inbox.
                </p>
                <div className=' d-flex flex-sm-row flex-column align-items-center justify-content-center bg_wh'>
                    <input type=" email" placeholder='Enter your email address ' className=' mb-0 py-sm-0 py-3 ps-sm-0 ps-3 ff-acumin fw-normal fs-16 lh-22 color_lightwh op_80 w-100 email' />
                    <button className=' d-sm-block d-none mb-0 ms-sm-4 mb-sm-0 mb-2 ff-acumin_bold fw-bold fs-16 lh-19 comn_btn2 color_emphasis'>
                    Subscribe
                    </button>
                </div>
                <div className=' d-flex justify-content-center pt-2'>
                <button className=' d-sm-none d-block mb-0 ms-sm-4 mb-sm-0 mb-2 ff-acumin_bold fw-bold fs-16 lh-19 comn_btn2 color_emphasis'>
                    Subscribe
                    </button>
                </div>
                 <div className=' mail_pos'>
                    <img className='scle_mail' src={mail} alt="mail" />
                 </div>
                 <div className=' d-flex gap-2 align-items-center justify-content-center pt-3'>
                    <div className=' check_box d-flex justify-content-center align-items-center cur-pointer' onClick={handlecheck}>
                      <img className={`${check ? "d-block" :"d-none"}`} src={tick} alt="tick" />
                    </div>
                    <p className=' mb-0 ff-acumin fw-normal fs-14 lh-14 color_emphasis opacity-90'>
                    I consent to receive emails & confirm I have read the <span className=' ff-acumin_bold fw-bold'>privacy policy.</span>
                    </p>
                 </div>
            </div>
            </div>
        </div>
        <iframe className=' map w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2467.1794289711434!2d-1.510441!3d51.802882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876cd1e81b3c1e5%3A0x1a6a99487ec82408!2sCrawley%20Mill%20Industrial%20Estate%2C%20Dry%20Ln%2C%20Crawley%2C%20Witney%20OX29%209TJ%2C%20UK!5e0!3m2!1sen!2sin!4v1717651115739!5m2!1sen!2sin"></iframe>
    </div>
    </>
  )
}

export default Latestnews