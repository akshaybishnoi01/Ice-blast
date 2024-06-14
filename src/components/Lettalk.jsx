import React from 'react'
import Helper from '../common/helper'

const Lettalk = () => {
    return (
        <>
         <div className=' container pb-4'>
                    <div className=' d-flex flex-column justify-content-center align-items-center'>
                        <h2 className=' mb-0 ff-titling fw-bold fs-48 lh-57 text-center color_lightwh'>
                            Let's Talk Numbers
                        </h2>
                        <p className=" mb-0 ff-acumin fs-16 fw-normal lh-24 text-center mw_760 color_lightwh op-70 transparency_py">
                            We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.
                        </p>

                        <Helper />
                        <div className=' org_box'>
                            <div className=' d-flex flex-column justify-content-center align-items-center'>
                                <h3 className=' mb-0 ff-titling fw-bold fs-32 lh-44 color_lightwh text-center'>
                                    Get an Instant Quote Today
                                </h3>
                                <p className=" mb-0 ff-acumin fw-normal color_lightwh fs-16 lh-24 op_80 text-center mw_770 regulardry_py">
                                    Regular dry ice cleaning prevents costly rust and wear. Avoid potentially thousands of pounds worth of bodywork repairs when just for a fraction of that you can keep your car in prime condition all year round! What are you waiting for?
                                </p>
                                <button className=' mb-0 ff-acumin_bold fw-bold fs-16 lh-19 color_emphasis comn_btn'>
                                    Get Instant Quote
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
        </>
    )
}

export default Lettalk