import React from 'react'
import primetop from '../assets/image/primetop.png'
import primebottom from '../assets/image/primebottom.png'
const Theprime = () => {
  return (
    <>
      <div >
        <div className=' prime_tran-y'>
          <img className=' w-100 ' src={primetop} alt="#" />
        </div>
        <div className=' container'>
          <div className=' d-flex flex-column justify-content-center align-items-center the_prime position-relative z-1'>
            <h2 className=' mb-0 ff-titling fs-48 fw-bold lh-57 color_lightwh text-center'>
              Blast The Grime and Bring Back The Prime
            </h2>
            <p className=" mb-0 ff-acumin fw-normal color_lightwh op-70 fs-16 lh-24 mw_966 pt-3">
              Rest easy knowing that our approach is tailored to protect and enhance your vehicle. We don’t clean; we care. Every treatment is a promise that your vehicle will not only look its best but also receive the
              care it needs for a longer, healthier life on the road.
            </p>
            <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-19 color_lightwh quote_py'>
              Ready For a Transformation? Get an Instant Quote
            </p>
            <button className=' mb-0 ff-acumin_bold fs-16 lh-19 color_emphasis comn_btn'>
              Get Instant Quote
            </button>
          </div>
        </div>
        <div className='prime_bottom-y '>
          <img className=' w-100 ' src={primebottom} alt="#" />
        </div>
      </div>
    </>
  )
}

export default Theprime
