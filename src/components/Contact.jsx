import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center w-full h-fit pt-16'>
        <h1 className='mt-12 text-3xl font-medium text-[#437FC7]'>Contact</h1>
        <div className='w-full pt-7 px-7 md:px-28'>
            <form action="https://getform.io/f/2a996c7e-58c8-41db-812e-7a6fde080ecd" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 '>Name</label>
                        <input className='border-2 rounded-lg p-2 flex border-[#6DAFFE] bg-[#EDF6FF]' type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 '>Phone Number</label>
                        <input className='border-2 rounded-lg p-2 flex border-[#6DAFFE] bg-[#EDF6FF]' type="text" name='phone' />
                    </div>
                </div>
                <div className='flex flex-col'>
                <label className='uppercase text-sm py-2' >Email</label>
                <input className='border-2 rounded-lg p-2 flex border-[#6DAFFE] bg-[#EDF6FF]' type="email" name='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2' >Subject</label>
                    <input className='border-2 rounded-lg p-2 flex border-[#6DAFFE] bg-[#EDF6FF]' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm py-2 '>Message</label>
                    <textarea className='border-2 rounded-lg p-2 flex border-[#6DAFFE] bg-[#EDF6FF]' name="message"  rows="10"></textarea>
                </div>
                <button className='flex justify-center items-center w-full p-4 bg-[#6DAFFE] text-white rounded-lg'>
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact