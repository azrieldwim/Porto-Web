import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import foto from "../assets/saya.png"

const Profile = () => {
    return(
        <div id='home' className='flex flex-col items-center w-full h-screen justify-center p-7'>
            <div className='flex flex-col items-center w-full'>
                <img src={foto} alt="" className='object-cover cover-image rounded-full w-52 h-52' />
                <h1 className='bg-[#CCAC00] mt-7 p-2 rounded-md text-white'>Hello, My name is Azriel Dwi Mahendra</h1>
                <h3 className='mt-7 text-3xl md:text-6xl font-bold'>
                    <TypeAnimation
                        sequence={[
                            "I'm a Front-end Web Developer",
                            1000,
                            "I'm a Mobile Developer",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h3>
                <h3 className='mt-7'>Front-End Web and Mobile Developer passionate about crafting visually stunning, responsive, and user-friendly experiences.</h3>
            </div>
        </div>
    )
}

export default Profile