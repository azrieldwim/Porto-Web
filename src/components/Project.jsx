import React from 'react'

const Project = () => {

  return (
    <div id='project' className='flex flex-col items-center w-full h-fit pt-16 p-7'>
        <div>
            <h1 className='mt-12 text-3xl font-medium text-[#437FC7]'>Projects</h1>
        </div>
        <div className='flex mt-7 gap-5'>
            <button className='rounded-xl underline underline-offset-8 hover:bg-gray-500 hover:no-underline transition duration-300 px-5'>All</button>
            <button className='rounded-xl underline underline-offset-8 hover:bg-gray-500 hover:no-underline transition duration-300 px-5'>Web</button>
            <button className='rounded-xl underline underline-offset-8 hover:bg-gray-500 hover:no-underline transition duration-300 px-5'>Mobile</button>
        </div>
    </div>
  )
}

export default Project