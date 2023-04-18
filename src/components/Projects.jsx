import React from "react";
import { arrowupright, githubdark, projectjesa, projectkoppi, projectdfa } from "../assets";

const Projects = () => {
  return (
    <div className="w-full h-full pt-20 pb-10">
      {/* Title */}
      <div className="lg:pl-20 mb-6">
        <h1 className="font-bold text-4xl lg:text-5xl">Projects</h1>
        <h1 className="font-allura text-3xl lg:text-4xl">I've Worked On</h1>
      </div>

      {/* Project List */}
      <div className="flex lg:flex-row flex-col gap-4 justify-between">
        {/* Project 1 Start */}
        <div className="flex flex-col gap-3 lg:w-1/3 w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectkoppi} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">Koppi University</h3>
              <p className="text-highlight text-base font-medium">HTML, CSS</p>
            </div>
            <p className="text-base text-justify">KoppiUniversity is a responsive website that I developed using HTML and CSS. The website is designed to adapt to different screen sizes and is optimized for a smooth user experience.</p>
            <div className="flex gap-5">
              <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/ResponsiveKoppiUniv" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a>
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://koppiuniv.netlify.app/" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 1 End */}
        {/* Project 2 Start */}
        <div className="flex flex-col gap-3 lg:w-1/3 w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectdfa} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">FebrianDFA Portofolio</h3>
              <p className="text-highlight text-base font-medium">React, Tailwind</p>
            </div>
            <p className="text-base text-justify">FebrianDFA Portfolio is a responsive website built using React and styled with Tailwind CSS. It showcases my projects and skills of DFA, as web developer.</p>
            <div className="flex gap-5">
              <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a>
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://febriandfa.netlify.app/" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 End */}
        {/* Project 3 Start */}
        <div className="flex flex-col gap-3 lg:w-1/3 w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectjesa} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">Jelajah UNESA (JESA)</h3>
              <p className="text-highlight text-base font-medium">Wix.com</p>
            </div>
            <p className="text-base text-justify">
              Jelajah UNESA (JESA) is a website built on Wix.com platform. It serves as a platform for students to explore and discover various extracurricular activities available in Universitas Negeri Surabaya (UNESA).
            </p>
            <div className="flex gap-5">
              <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a>
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://mrnaufal70.wixsite.com/jesa" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 End */}
      </div>
      {/* Change hidden to flex when have lot of project */}
      <a className="hidden mx-auto mt-7 text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit" href="youtube.com">
        Check Other Project
        <img className="w-6" src={arrowupright} alt="" />
      </a>
    </div>
  );
};

export default Projects;
