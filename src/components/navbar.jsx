import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full border-b-4 border-[#6DAFFE] z-10">
      <div >
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white">
          <div className=" flex flex-row items-center cursor-pointer text-[#437FC7] text-2xl font-medium">
            <a href="#home">Portofolio</a>
          </div>

          <nav className="hidden md:flex flex-row items-center text-xl font-medium text-[#437FC7] gap-9">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            >
              Project
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            >
              Contact
            </Link>

          </nav>

          <div className="hidden md:flex flex-row items-center text-xl font-medium text-[#437FC7] gap-9">
            <Button title="Download CV"/>
          </div>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-[#6DAFFE] text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Project
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#6DAFFE] hover:scale-110 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Button title="Download CV" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
