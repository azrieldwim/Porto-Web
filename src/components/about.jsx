import React from 'react'
import Skillsitems from './Skillsitems'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import figma from '../assets/skills/figma.png'
import java from '../assets/skills/java.png'
import javascript from '../assets/skills/javascript.png'
import python from '../assets/skills/python.png'
import react from '../assets/skills/react.png'
import vite from '../assets/skills/vite.png'
import tailwind from '../assets/skills/tailwinds.png'
import git from '../assets/skills/git.png'
import github from '../assets/skills/github.png'

const About = () => {
  return (
    
    <div id='about' className='flex flex-col items-center w-full h-fit pt-16 p-7'>
        <div>
            <h2 className='mt-12 text-3xl font-medium text-[#437FC7]'>About Me</h2>
        </div>
        <div className='mt-12 flex flex-col w-[700px] h-fit items-center shadow-2xl p-7 rounded-xl'>
            <h2 className='font-medium text-xl text-[#6DAFFE]'>My Introduction</h2>
            <h3 className='mt-3 text-center pb-5'>"I am Azriel Dwi Mahendra, a fifth-semester student majoring in Informatics at the Universitas Pembangunan Nasional Veteran Jakarta. My focus is on self-improvement in the field of front-end web and mobile development. I am highly dedicated, honest, responsive, possess good communication skills, adaptable, and enjoy learning new things. I actively participate in college projects related to front-end web and mobile development, with a strong motivation to continue learning and unleash my potential."</h3>
        </div>

        {/* Skills */}
        <div className='m-10 flex flex-col items-center p-7'>
            <h1 className='flex text-3xl font-medium text-[#437FC7] pt-5'>Skills</h1>
            <div className='flex gap-8 pt-7 p-5'>
                <Skillsitems img={html} />
                <Skillsitems img={css} />
                <Skillsitems img={java} />
                <Skillsitems img={javascript} />
                <Skillsitems img={react} />
                <Skillsitems img={vite} />
                <Skillsitems img={tailwind} />
                <Skillsitems img={python} />
                <Skillsitems img={figma} />
                <Skillsitems img={git} />
                <Skillsitems img={github} />
            </div>
        </div>
    </div>
  )
}

export default About