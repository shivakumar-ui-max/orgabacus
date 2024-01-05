import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => {
      setNav((prev) => {
         return !prev;
      });
   };
   return (
      <nav className=" container mx-auto flex justify-between items-center uppercase  text-xl tracking-wide text-slate-200  p-2">
         <div className="logo flex items-center space-x-3">
            <img
               src={logo}
               alt="logo"
               className="w-[50px] h-[50px] rounded-full"
            />
            <span>bbcit</span>
         </div>
         {/* hidden md:flex md:justify-between md:space-x-10 md:text-sm */}
         <ul className="  hidden md:flex md:justify-between md:space-x-10 md:text-sm ">
            <li>gilmps</li>
            <li>bbcit-info</li>
            <li>contact</li>
         </ul>
         <div onClick={handleClick} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>
         <div
            className={
               nav
                  ? `fixed left-0 top-0 w-[60%] bg-[rgba(0,0,0,0.600)] h-full shadow-lg border-r border-r-slate-0 ease-in-out duration-500`
                  : `fixed left-[-100%]`
            }
         >
            <ul className="pt-24 ml-14 space-y-7 text-sm">
               <li>gilmps</li>
               <li>bbcit-info</li>
               <li>contact</li>
               <li className="border uppercase inline-block tracking-wider text-base rounded-md px-6 py-2 bg-[rgba(0,0,0,0.690)] shadow-sm">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjisAs9CeAD9iNtqK7QdNzU7_fKla8E5NqcP1_mcqWuUAUog/viewform?usp=sf_link">
                     Register
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
