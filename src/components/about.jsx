import React from 'react'
import Skillsitems from './Skillsitems'
import dart from '../assets/skills/dart.png'
import arduino from '../assets/skills/arduino.png'
import flutter from '../assets/skills/flutter.png'
import firebase from '../assets/skills/firebase.png'
import katalon from '../assets/skills/katalon.png'
import uipath from '../assets/skills/uipath.png'
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
import android from '../assets/skills/android.png'

const About = () => {
  return (
    
    <div id='about' className='flex flex-col items-center w-full h-fit pt-16 p-7'>
        <div>
            <h2 className='mt-12 text-3xl font-medium text-[#437FC7]'>About Me</h2>
        </div>
        <div className='mt-12 flex flex-col w-fit h-fit items-center shadow-2xl p-7 rounded-xl mx-3 md:mx-56'>
            <h2 className='font-medium text-xl text-[#6DAFFE]'>My Introduction</h2>
            <h3 className='mt-3 text-center pb-5'>"I am an Informatics graduate with a strong interest in Software Engineering, especially in web and mobile application development. During my studies and professional training at Alterra Academy MSIB Batch 6, I worked on projects using Flutter, Firebase, and React, focusing on building scalable and user-friendly applications. I’m passionate about creating innovative digital solutions, collaborating in dynamic teams, and continuously improving my skills as a Web and Mobile Developer."</h3>
        </div>

        {/* Skills */}
        <div className='m-10 flex flex-col items-center p-7'>
            <h1 className='flex text-3xl font-medium text-[#437FC7] pt-5'>Skills</h1>
            <div className='grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pt-7 p-5'>
                <Skillsitems img={dart} />
                <Skillsitems img={flutter} />
                <Skillsitems img={katalon} />
                <Skillsitems img={uipath} />
                <Skillsitems img={html} />
                <Skillsitems img={css} />
                <Skillsitems img={java} />
                <Skillsitems img={javascript} />
                <Skillsitems img={react} />
                <Skillsitems img={vite} />
                <Skillsitems img={tailwind} />
                <Skillsitems img={python} />
                <Skillsitems img={firebase} />
                <Skillsitems img={figma} />
                <Skillsitems img={git} />
                <Skillsitems img={github} />
                <Skillsitems img={android} />
                <Skillsitems img={arduino} />
            </div>
        </div>
    </div>
  )
}

export default About