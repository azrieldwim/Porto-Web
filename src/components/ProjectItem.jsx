import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

const ProjectItem = ({ img, title, link, demo }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#EDF6FF] rounded-xl group hover:bg-gradient-to-b from-[#EDF6FF] to-[#6DAFFE]">
      <img src={img} alt="" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-semibold text-black tracking-wider text-center ">
          {title}
        </h3>
        <div className="flex justify-center gap-9">
          {/* Tampilkan ikon GitHub jika link tersedia */}
          {link && <a href={link} target='_blank' rel='noopener noreferrer'><AiFillGithub size={30} /></a>}

          {/* Tampilkan ikon Demo jika demo tersedia */}
          {demo && <a href={demo} target='_blank' rel='noopener noreferrer'><FiGlobe size={30} /></a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
