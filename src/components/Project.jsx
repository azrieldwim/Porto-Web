import React from 'react'
import Jekopi from '../assets/Jekopi.png'
import Porto from '../assets/Porto.png'
import Rasanusantara from '../assets/Rasanusantara.png'
import Reservify from '../assets/Reservify.png'
import ProjectItem from './ProjectItem'

const Project = () => {

  return (
    <div id='project' className='flex flex-col items-center w-full h-fit pt-16 p-7'>
        <h1 className='mt-12 text-3xl font-medium text-[#437FC7]'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12 mt-10 px-20'>
            <ProjectItem img={Jekopi} title='Jekopi' link='https://github.com/azrieldwim/JeKopi-Web-Coffee-Shop' demo='https://jekopi.vercel.app/' />
            <ProjectItem img={Porto} title='Web Portofolio' link='https://github.com/azrieldwim/Porto-Web' demo='https://farhansukmana-porto.vercel.app/' />
            <ProjectItem img={Rasanusantara} title='Rasa Nusantara' link='https://github.com/azrieldwim/RasaNusantara-Web-Restaurant' demo='https://rasa-nusantara-web-restaurant.vercel.app/' />
            <ProjectItem img={Reservify} title='Reservify' link='https://github.com/azrieldwim/Reservify-App-Mobile'/>
        </div>
    </div>
  )
}

export default Project