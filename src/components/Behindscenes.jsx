import React from 'react'
import scenes_topframe from '../assets/image/scenes_topframe.png'
import scenes_bottomframe from '../assets/image/scenes_bottomframe.png'
import carwash from '../assets/image/carwash.png'
import { Videobtn2 } from '../assets/icon'
const Behindscenes = () => {
    return (
        <>
            <div className=' bg_secenes' id='pricing'>
                <div>
                    <img className=' w-100' src={scenes_topframe} alt="#" />
                </div>
                <div className=' container'>
                    <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <h2 className=' mb-0 ff-titling  fs-48 lh-57 fw-bold color_emphasis text-center mw_480 pt-2'>
                            Behind the Scenes
                            Dry Ice Blasting a Car
                        </h2>
                        <p className=" mb-0 ff-acumin fs-16  lh-24 fw-normal color_emphasis text-center mw_592 pt_12">
                            From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.
                        </p>
                        <div className=' py-5 position-relative'>
                            <img className=' w-100 mw_1140' src={carwash} alt="carwash" />
                            <div className=' video_2 scale_1'>
                                <Videobtn2/>
                            </div>
                        </div>
                        <p className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-24 color_emphasis text-center'>
                        Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.
                        </p>
                        <button className=' mb-0 fs-16 lh-19 color_emphasis fw-bold ff-acumin_bold comn_btn btn_mt mb-2'>
                        Get Instant Quote
                        </button>
                    </div>
                </div>
                <div>
                    <img className=' w-100' src={scenes_bottomframe} alt="#" />
                </div>
            </div>
        </>
    )
}

export default Behindscenes