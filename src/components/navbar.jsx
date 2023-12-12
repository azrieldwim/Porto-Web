import React, { useState, useEffect } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Atur state berdasarkan apakah halaman telah di-scroll
      setIsScrolled(scrollTop > 0);
    };

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener pada unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between border-b-2 border-[#6DAFFE] w-full bg-white fixed ${isScrolled ? 'bg-opacity-80 backdrop-blur-lg' : ''}`}>
      <div className="flex p-4 text-2xl font-Rubik font-medium text-[#437FC7] pl-7">
        <a href="">Portofolio</a>
      </div>
      <div className='flex pt-5 p-4 text-xl font-Rubik font-medium text-[#437FC7] gap-9'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className='flex p-4 text-sm font-Rubik font-medium text-[#437FC7] pr-7'>
        <button className='bg-gray-300 p-2 rounded-xl flex items-center gap-2'>Download CV<FaRegFileAlt /></button>
      </div>
    </div>
  );
};

export default Navbar;
