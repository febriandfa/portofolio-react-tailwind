import React from "react";
import { arrowupright, githubdark, projectjesa, projectkoppi, projectdfa, projectquliqu, projecteduhug, projectbegagan } from "../assets";

const Portfolio = () => {
  return (
    <div className="w-full h-full pt-20 pb-10">
      {/* Title */}
      <div className="lg:pl-20 mb-6 text-center">
        <h1 className="font-bold text-4xl lg:text-5xl">Projects</h1>
        <h1 className="font-allura text-3xl lg:text-4xl">I've Worked On</h1>
      </div>

      {/* Project List */}
      <div className="flex lg:flex-row flex-col lg:gap-x-1 lg:gap-y-4 gap-4 justify-between flex-wrap">
        {/* Project 1 Start */}
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectkoppi} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">Koppi University</h3>
              <p className="text-highlight text-base font-medium">HTML, CSS, JavaScript</p>
            </div>
            <p className="text-base text-justify">Koppi Univeristy is a responsive website developed using HTML and styled with CSS. This website give general information about Koppi University such as faculties and facilities.</p>
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
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectdfa} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">FebrianDFA Portofolio</h3>
              <p className="text-highlight text-base font-medium">React, Tailwind</p>
            </div>
            <p className="text-base text-justify">FebrianDFA Portfolio is a responsive website that I built using React and styled with Tailwind CSS. It showcases my projects and my skills, as web developer.</p>
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
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
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
              {/* <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a> */}
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://mrnaufal70.wixsite.com/jesa" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 End */}
        {/* Project 4 Start */}
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projecteduhug} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">EduHug</h3>
              <p className="text-highlight text-base font-medium">React, HTML, CSS, JavaScript</p>
            </div>
            <p className="text-base text-justify">EduHug is a responsive website developed using HTML and styled with CSS. This website give useful information, practical tips, and expert advice on various aspects of family life.</p>
            <div className="flex gap-5">
              {/* <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a> */}
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://eduhug.netlify.app/" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 End */}
        {/* Project 5 Start */}
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectquliqu} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">Quliqu</h3>
              <p className="text-highlight text-base font-medium">React, Tailwind</p>
            </div>
            <p className="text-base text-justify">
              Quliqu is a desktop-based website built with React and Tailwind CSS, inspired by UI/UX designs from @arshakirpk. With modern interface, Quliqu offers a seamless browsing experience tailored specifically for desktop users.
            </p>
            <div className="flex gap-5">
              <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/febriandfa/quliqu-react-tailwind" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a>
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://quliqu.netlify.app/" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 5 End */}
        {/* Project 6 Start */}
        <div className="flex flex-col gap-3 lg:w-[32%] w-full h-fit">
          <img className="h-40 w-full object-cover rounded-3xl drop-shadow-sm" src={projectbegagan} alt="" />
          <div className="flex flex-col justify-between h-72 p-5 bg-secondary rounded-3xl drop-shadow-sm">
            <div className="">
              <h3 className="font-bold text-xl">Desa Begaganlimo</h3>
              <p className="text-highlight text-base font-medium">React, Tailwind, Horizon UI</p>
            </div>
            <p className="text-base text-justify">
              Desa Begaganlimo is a website developed using React, Tailwind, and Horizon UI, this website serves as an informative platform showcasing various aspects of the village, including local business, tourist attractions, and its
              history.
            </p>
            <div className="flex gap-5">
              <a className="flex py-1 px-1 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://github.com/Dawwas110104/begaganlimo-project" target="_blank" rel="noreferrer">
                <img className="w-6" src={githubdark} alt="" />
              </a>
              <a className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton" href="https://desabegaganlimo.netlify.app/" target="_blank" rel="noreferrer">
                Check The Website
                <img className="w-6" src={arrowupright} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project 6 End */}
      </div>
    </div>
  );
};

export default Portfolio;
