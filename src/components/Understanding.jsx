import React from 'react'
import topframe from '../assets/image/topframe.png'
import bottomframe from '../assets/image/bottomframe.png'
import iceblast1 from '../assets/image/iceblest1.png'
import iceblast2 from '../assets/image/iceblest2.png'

const Understanding = () => {
  return (
    <>
      <div className=' bg_organ position-relative'>
        <div className=' z-0 trans_topframe'>
          <img className=' w-100 ' src={topframe} alt="topframe" />
        </div>
        <h2 className=' mb-0 fs-48 lh-57 fw-bold color_emphasis text-center '>
          Understanding Dry Ice Blasting
        </h2>
        <div className=' container'>
          <div className=' row  '>
            <div className=' col-12 blasting_py d-flex flex-column align-items-lg-start align-items-center'>
              <div className=' d-flex align-items-start flex-column'>
              <p className=" mb-0 ff-acumin_bold fs-24 lh-36 color_emphasis fw-bold text-start ">
                What is Dry Ice Blasting?
              </p>
              <p className=" mb-0 ff-acumin fw-normal fs-18 lh-27 color_emphasis opacity-90 mw_558">
                Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.
              </p>
              </div>
            </div>
          </div>
          <div className=' row pt-lg-0 pt-sm-5 pt-3'>
            <div className=' col-12  d-flex flex-column align-items-lg-end align-items-center'>
              <div className=' d-flex align-items-start flex-column '>
                <div>
                  <p className=" mb-0 ff-acumin_bold fs-24 lh-36 color_emphasis fw-bold ">
                    How Does Dry Ice Blasting Work?
                  </p>
                  <p className=" mb-0 ff-acumin fw-normal fs-18 lh-27 color_emphasis opacity-90 mw_558">
                    The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.
                  </p>
                </div>
              </div>
            </div>
            <div className=' col-12 py-5'>
              <div className=' d-lg-none d-block'>
                <img className='  blast_mw w-100' src={iceblast2} alt="iceblast" />
              </div>
            </div>
          </div>
        </div>
        <div className='trans_bottomframe '>
          <img className=' w-100' src={bottomframe} alt="bottomframe" />
        </div>
        <div className=' ice_1 d-lg-flex d-none'>
          <img className='blast_mw w-100' src={iceblast1} alt="iceblast" />
        </div>
        <div className=' ice_2 d-lg-flex d-none'>
          <img className='  blast_mw w-100' src={iceblast2} alt="iceblast" />
        </div>
      </div>
    </>
  )
}

export default Understanding
