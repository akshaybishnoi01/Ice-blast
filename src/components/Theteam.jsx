import React from 'react'
import men from '../assets/image/men.png'
import menbg from '../assets/image/menbg.png'
import teambottomlayer  from  '../assets/image/teambottomframe.png'
const Theteam = () => {
    return (

        <>
            <div>
                <div className=' container '>
                    <div className=' row'>
                        <div className=' col-12 col-lg-5 d-flex justify-content-lg-start justify-content-center'>
                            <div className=' position-relative pt-lg-0 pt-3 pb-lg-0 pb-5 '>
                                <img className=' w-100 men_mw position-relative z-2 ' src={men} alt="men" />
                                <div className=' bg_frame'>
                                    <img className='menbg w-100' src={menbg} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center pt-lg-0 pt-5'>
                        <h2 className=' mb-0 ff-titling fs-48 lh-57 fw-bold color_lightwh'>
                        Meet The Team
                        </h2>
                        <p className=" mb-0 ff-acumin_bold fw-bold fs-18 lh-21 oxfordshire_py ">
                        Oxfordshire's Dry Ice Car Cleaning Specialists
                        </p>
                        <p className=' mb-0 ff-acumin fw-normal fs-16 lh-24 color_lightwh op-70 mw_625 position-relative z-1'>
                        We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.
                        </p>
                        </div>
                    </div>
                </div>
                <div className=' team_tran_y'>
                    <img className=' w-100' src={teambottomlayer} alt="teambottomlayer" />
                </div>
            </div>
        </>
    )
}

export default Theteam
