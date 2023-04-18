import React from "react";
import { arrowdown } from "../assets";

const Landing = () => {
  return (
    <div className="w-full gap-3 h-[47rem] lg:h-screen grid grid-rows-3 grid-cols-3 pt-[5rem] pb-10 lg:pb-14 lg:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:order-1">
      {/* Hero Title Start */}
      <div className="flex px-5 py-10 flex-col row-span-2 col-span-3 justify-between rounded-3xl bg-secondary lg:py-14 lg:px-20 drop-shadow-sm lg:col-span-2 lg:row-span-3">
        <div className="flex flex-col gap-2">
          <h1 className="font-allura text-3xl lg:text-5xl">Hello! My Name</h1>
          <h1 className="font-bold text-4xl lg:w-[490px] lg:text-7xl">Febrian Daffa Eka Putra</h1>
          <h2 className="font-medium text-2xl lg:text-4xl tracking-wider">Front-End Developer</h2>
          <p className="font-medium text-base lg:text-lg tracking-widest lg:w-[435px]">Self taught developer who has passion in Front-End Development and Graphic Design</p>
        </div>
        <a
          className="flex text-sm items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg w-fit hover:bg-hoverbutton"
          href="https://drive.google.com/file/d/1OiRg3sNnk_MtWL94uk9V32hEBgVBRDp0/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
          <img className="w-6" src={arrowdown} alt="" />
        </a>
      </div>
      {/* Hero Title End */}
      {/* Logo Start */}
      <div className="col-span-1 rounded-3xl bg-logo bg-center bg-cover overflow-hidden drop-shadow-sm order-2 lg:order-2"></div>
      {/* Logo End */}
      {/* Photo End */}
      <div className="col-span-2 rounded-3xl bg-photo1 bg-center bg-cover overflow-hidden drop-shadow-sm order-1 lg:row-span-2 lg:col-span-1 lg:order-3"></div>
      {/* Photo End */}
    </div>
  );
};

export default Landing;
