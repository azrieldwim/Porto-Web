import React from 'react'

const Skillsitems = ({img}) => {
  return (
    <div className='p-2  rounded-lg shadow-lg shadow-gray-400 items-center justify-center flex hover:scale-110 duration-300'>
        <img src={img} alt="" />
    </div>
  )
}

export default Skillsitems