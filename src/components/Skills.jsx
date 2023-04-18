import React from "react";
import { html, css, javascript, bootstrap, tailwind, react } from "../assets";

const Skills = () => {
  return (
    <div className="w-full h-full pt-20">
      {/* Title */}
      <div className="lg:pl-20 mb-6">
        <h1 className="font-bold text-4xl lg:text-5xl">Skills</h1>
        <h1 className="font-allura text-3xl lg:text-4xl">I've Learned</h1>
      </div>

      {/* Skill List */}
      <div className="flex mx-auto flex-col lg:drop-shadow-sm justify-around gap-8 lg:w-10/12 rounded-3xl lg:flex-row lg:bg-secondary">
        {/* Skill 1st Part Start */}
        <div className="flex justify-around w-11/12 lg:h-20 h-16 mx-auto bg-secondary py-3 rounded-2xl lg:rounded-3xl drop-shadow-sm">
          <img className="lg:w-12 w-9" src={html} alt="" />
          <img className="lg:w-12 w-9" src={css} alt="" />
          <img className="lg:w-12 w-9" src={javascript} alt="" />
        </div>
        {/* Skill 1st Part End */}
        {/* Skill 2nd Part Start */}
        <div className="flex justify-around w-11/12 lg:h-20 h-16 mx-auto bg-secondary py-3 rounded-2xl lg:rounded-3xl drop-shadow-sm">
          <img className="lg:w-14 w-10" src={bootstrap} alt="" />
          <img className="lg:w-16 w-10" src={tailwind} alt="" />
          <img className="lg:w-14 w-10" src={react} alt="" />
        </div>
        {/* Skill 2nd Part End */}
      </div>
      <div className="mx-auto w-fit mt-8">
        <h3 className="text-center text-xl font-medium lg:text-2xl font-allura capitalize">I am still continuing to improve my skills until now.</h3>
      </div>
    </div>
  );
};

export default Skills;
