import React from 'react'
import cleaning1 from '../assets/image/cleaning1.svg'
import cleaning2 from '../assets/image/cleaning2.svg'
import cleaning3 from '../assets/image/cleaning3.svg'
import cleaning4 from '../assets/image/cleaning4.svg'
import carclean from '../assets/image/carclean.png'
const Dryice = () => {
  return (
    <>
    <div>
        <div className=" container" id='services'>
            <div className=' translate_y'>
            <h2 className=' mb-0 ff-titlingm fw-bold fs-48 pt-sm-0 pt-3 lh-57 color_lightwh text-center'>
            Why Choose Dry Ice Blasting for Your Car?
            </h2>
            </div>
            <div className=' row iceblasting_pb'>
            <div className=' col-12 col-lg-6  d-flex justify-content-lg-start justify-content-center py-sm-5 py-0 '>
             <div className=' d-flex flex-column align-items-start'>
             <div className=' d-flex gap_12 dry_pb'>
                <img src={cleaning1} alt="#" />
                <div>
                  <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-24 pb-1'>
                  Effective Cleaning
                  </p>
                  <p className=' mb-0 ff-acumin fw-normal fs-16 lh-24 color_lightwh op-70 mw_451'>
                  The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.
                  </p>
                </div>
              </div>
              <div className=' d-flex gap_12 dry_pb'>
                <img src={cleaning2} alt="#" />
                <div>
                  <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-24 pb-1'>
                  Non-Abrasive
                  </p>
                  <p className=' mb-0 ff-acumin fw-normal fs-16 lh-24 color_lightwh op-70 mw_451'>
                  Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.
                  </p>
                </div>
              </div>
              <div className=' d-flex gap_12 dry_pb'>
                <img src={cleaning3} alt="#" />
                <div>
                  <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-24  pb-1'>
                  No Residue
                  </p>
                  <p className=' mb-0 ff-acumin fw-normal fs-16 lh-24 color_lightwh op-70 mw_451'>
                  Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.
                  </p>
                </div>
              </div>
              <div className=' d-flex gap_12 dry_pb'>
                <img src={cleaning4} alt="#" />
                <div>
                  <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-24 pb-1'>
                  Safe for Various Materials
                  </p>
                  <p className=' mb-0 ff-acumin fw-normal fs-16 lh-24 color_lightwh op-70 mw_451'>
                  It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.
                  </p>
                </div>
              </div>
             </div>
            </div>
            <div className=' col-12 col-lg-6  d-flex justify-content-lg-start justify-content-center'>
              <img className=' w-100 mw_558' src={carclean} alt="#" />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dryice