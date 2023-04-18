import React from "react";

const About = () => {
  return (
    <div className="w-full h-full pt-20">
      {/* Title */}
      <div className="lg:pl-20 mb-6">
        <h1 className="font-allura text-3xl lg:text-4xl">Know More</h1>
        <h1 className="font-bold text-4xl lg:text-5xl">About Me</h1>
      </div>

      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        {/* Photo Start */}
        <div className="flex items-center justify-center">
          <div className="w-7 h-28 flex items-center justify-center tracking-widest lg:h-36 rounded-l-lg bg-tertiary">
            <span className="text-primary font-medium -rotate-90 text-lg drop-shadow-sm">Profile</span>
          </div>
          <div className="bg-photo2 drop-shadow-sm bg-center bg-cover rounded-3xl w-[230px] h-[230px] lg:w-[380px] lg:h-[380px]"></div>
        </div>
        {/* Photo End */}
        {/* Description Start */}
        <div className="flex flex-col gap-5 lg:w-[800px] font-medium text-lg text-justify">
          <p className="-mb-3">
            <span className="font-allura text-3xl lg:text-4xl">Hello Everyone!!</span>
          </p>
          <p>
            I'm <span className="text-highlight font-bold">Febrian Daffa Eka Putra</span>, a <span className="text-highlight font-bold">Computer Science</span> student with a strong passion for graphic design and programming. I'm currently
            focusing on <span className="text-highlight font-bold">Front-End Web Development</span>, where I've developed proficiency in HTML, CSS, and JavaScript.
          </p>
          <p>
            My love for technology began in senior high school and grew as I explored the endless possibilities that it offers. I discovered my knack for programming and web development and have been honing my skills ever since. Alongside
            coding, I enjoy creating visually appealing <span className="text-highlight font-bold">User Interfaces</span> and <span className="text-highlight font-bold">Designing Logos</span>.
          </p>
          <p>
            I'm thrilled to pursue a career in <span className="text-highlight font-bold">Front-End Web Development</span> and look forward to working on projects that challenge me and help me grow as a developer. If you're interested in
            collaborating or want to know more about me, feel free to get in touch!
          </p>
        </div>
        {/* Description End */}
      </div>
    </div>
  );
};

export default About;
