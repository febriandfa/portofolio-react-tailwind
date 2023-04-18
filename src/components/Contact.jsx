import React from "react";
import { arrowupright, gmaildark, instagramdark, linkedindark, whatsappdark } from "../assets";

const Contact = () => {
  return (
    <div className="w-full h-full pt-20 pb-10">
      {/* Title */}
      <div className="mb-6 mx-auto text-center w-fit">
        <h1 className="font-allura text-3xl lg:text-4xl">Let's Work Together</h1>
        <h1 className="font-bold text-4xl lg:text-5xl">Contact Me</h1>
      </div>

      <p className="font-medium text-lg lg:w-3/4 text-center mx-auto mb-8">
        <span className="hidden lg:inline">Let's Connect. </span>I'm always interested in hearing about new projects and opportunities. Feel free to drop me a message!{" "}
        <span className="hidden lg:inline">And I'll get back to you as soon as possible</span>
      </p>
      {/* Contact List */}
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:w-3/4 mx-auto gap-10 lg:gap-8">
        {/* Contact 1st Part Start */}
        <div className="flex justify-around">
          <a
            className="flex justify-between text-sm w-36 items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg hover:bg-hoverbutton"
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=febriandaffa123@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-[1.35rem]" src={gmaildark} alt="" />
            Email
            <img className="w-6" src={arrowupright} alt="" />
          </a>
          <a className="flex justify-between text-sm w-36 items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg hover:bg-hoverbutton" href="https://www.linkedin.com/in/febriandaffa/" target="_blank" rel="noreferrer">
            <img className="w-5" src={linkedindark} alt="" />
            LinkedIn
            <img className="w-6" src={arrowupright} alt="" />
          </a>
        </div>
        {/* Contact 1st Part End */}
        {/* Contact 2nd Part Start */}
        <div className="flex justify-around">
          <a className="flex justify-between text-sm w-36 items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg hover:bg-hoverbutton" href="https://wa.me/62089666802021" target="_blank" rel="noreferrer">
            <img className="w-6" src={whatsappdark} alt="" />
            Whatsapp
            <img className="w-6" src={arrowupright} alt="" />
          </a>
          <a className="flex justify-between text-sm w-36 items-center gap-2 font-medium py-1 px-2 bg-tertiary text-primary rounded-lg hover:bg-hoverbutton" href="https://www.instagram.com/_ddffaa/" target="_blank" rel="noreferrer">
            <img className="w-5" src={instagramdark} alt="" />
            Instagram
            <img className="w-6" src={arrowupright} alt="" />
          </a>
        </div>
        {/* Contact 2nd Part End */}
      </div>
    </div>
  );
};

export default Contact;
