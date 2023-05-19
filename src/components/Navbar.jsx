import React, { useState } from "react";
import { linkedin, instagram, github } from "../assets";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed z-50 w-full flex items-center justify-between h-16 lg:px-16 px-6 bg-primary ">
      {/* Social Media Start */}
      <ul className="hidden lg:flex items-center w-72 justify-between">
        <li className="hover:bg-hovernav p-5">
          <a href="https://www.linkedin.com/in/febriandaffa/" target="_blank" rel="noreferrer">
            <img className="w-5" src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="hover:bg-hovernav p-5">
          <a href="https://www.instagram.com/_ddffaa/" target="_blank" rel="noreferrer">
            <img className="w-5" src={instagram} alt="instagram" />
          </a>
        </li>
        <li className="hover:bg-hovernav p-5">
          <a href="https://github.com/febriandfa" target="_blank" rel="noreferrer">
            <img className="w-5" src={github} alt="github" />
          </a>
        </li>
      </ul>
      {/* Social Media End */}
      {/* Name Start */}
      <a className="font-bold text-2xl tracking-[0.5em] lg:px-12 border-x-2 px-4" href="/">
        DFA
      </a>
      {/* Name End */}
      {/* Menu Start */}
      <ul className="hidden lg:flex font-medium text-[16px] items-center w-96 justify-between">
        <li className="p-5 hover:bg-hovernav">
          <a href="/">About</a>
        </li>
        <li className="p-5 hover:bg-hovernav">
          <a href="/portfolios">Project</a>
        </li>
        <li className="p-5 hover:bg-hovernav">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      {/* Menu End */}
      {/* Hamburger Start */}
      <div onClick={handleNav} className="block lg:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* Hamburger End */}
      {/* Mobile Menu Start */}
      <ul className={nav ? "fixed rounded-xl font-medium text-base right-4 top-14 w-[45%] text-center bg-secondary h-fit drop-shadow-lg" : "fixed left-[-100%]"}>
        <li className="my-7 hover:bg-hovernavmobile py-2">
          <a href="/">About</a>
        </li>
        <li className="mb-7 hover:bg-hovernavmobile py-2">
          <a href="/portfolios">Project</a>
        </li>
        <li className="mb-7 hover:bg-hovernavmobile py-2">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
