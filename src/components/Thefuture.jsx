import React from 'react'
import { Tickicon, Videobtn } from '../assets/icon'
import carcleaning from '../assets/image/carcleaning.png'
const Thefuture = () => {
  return (
    <>
      <div className='future_bg '>
        <div className=' container' id='aboutus'>
          <div className=' row car_cleaning_py'>
            <div className=' col-12 col-lg-6  order-lg-0 order-1 flex-column'>
              <div className=' d-flex align-items-lg-start align-items-center flex-column'>
                <h1 className=' mb-0 ff-titling fw-bold lh-57 fs-48 color_lightwh mw_351 text-lg-start text-center '>
                  The Future of Car Cleaning
                </h1>
                <p className=' mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 mw_558 noneed_pt noneed_pb'>
                  No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.
                </p>
                <div className=' d-flex gap-16 pb-3 '>
                  <Tickicon />
                  <div>
                    <p className=" mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh pb-6">
                      Gentle Yet Powerful
                    </p>
                    <p className=" mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 mw_518">
                      Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.
                    </p>
                  </div>
                </div>
                <div className=' d-flex gap-16 pb-3'>
                  <Tickicon />
                  <div>
                    <p className=" mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh pb-6">
                      Precision Cleaning
                    </p>
                    <p className=" mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 mw_518">
                      See how accurately we target the grunge zones, ensuring every inch of your car's undercarriage and engine is meticulously cleaned.
                    </p>
                  </div>
                </div>
                <div className=' d-flex gap-16 pb-3'>
                  <Tickicon />
                  <div>
                    <p className=" mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh pb-6">
                      Safe for AlI Vehicles
                    </p>
                    <p className=" mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 mw_518">
                      Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.             </p>
                  </div>
                </div>
                <div className=' d-flex gap-16 '>
                  <Tickicon />
                  <div>
                    <p className=" mb-0 ff-acumin_bold fs-16 lh-24 color_lightwh pb-6">
                      Eco-Friendly Approach
                    </p>
                    <p className=" mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op-70 mw_518">
                      Notice the absence of water or chemical runoff, showcasing our commitment to an environmentally responsible cleaning process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6 d-flex justify-content-lg-start justify-content-center order-lg-1 order-0 pb-lg-0 pb-5">
              <div className=' position-relative'>
                <img className=' w-100 carclean_mw ' src={carcleaning} alt="carcleaning" />
                <div className=' video_btn scale_1 cur-pointer'>
                  <Videobtn />
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <p className=" mb-0 ff-acumin_bold fs-16 fw-bold lh-24 color_lightwh text-center instant_pb">
              Like What You See? Get an Instant Quote
            </p>
            <button className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-19 color_emphasis comn_btn z-1'>
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thefuture
