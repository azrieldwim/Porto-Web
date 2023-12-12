import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const iconSize = 35;

  return (
    <footer className='flex flex-col w-full h-fit bg-[#EDF6FF] py-4 text-center justify-center items-center'>
      <div className='flex gap-4 pt-5'>
        <a href='https://www.linkedin.com/in/azrieldwim/' target='_blank' style={{ fontSize: iconSize + 'px' }}><FaLinkedin /></a>
        <a href='https://github.com/azrieldwim' target='_blank' style={{ fontSize: iconSize + 'px' }}><FaSquareGithub /></a>
        <a href='https://www.instagram.com/azrieldwim/' target='_blank' style={{ fontSize: iconSize + 'px' }}><FaInstagramSquare /></a>
      </div>
      <h3 className='font-medium pt-5'>Azriel Dwi Mahendra</h3>
      <p className='text-xs pt-5'>Copyright &copy; azrieldwim - All rights reserved | 2023</p>
    </footer>
  );
};

export default Footer;