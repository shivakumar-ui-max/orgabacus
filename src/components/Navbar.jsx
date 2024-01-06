import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => {
      setNav((prev) => {
         return !prev;
      });
   };
   return (
      <nav className=" fixed inset-0">
         <nav className=" flex justify-between items-center uppercase  text-xl tracking-wide text-slate-200  p-2 border-b-[1px] shadow-sm black ">
            <div className="logo flex items-center capitalize space-x-3">
               <img
                  src={logo}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full"
               />
               <span className="text-xs">
                  Banktlal badruka college <br /> for Information Technology
               </span>
            </div>
            {/* hidden md:flex md:justify-between md:space-x-10 md:text-sm */}
            <ul className="  hidden md:flex md:justify-between md:space-x-10 md:text-sm ">
               <li>gilmps</li>
               <li>bbcit-info</li>
               <li>contact</li>
            </ul>
            <div onClick={handleClick} className="block md:hidden">
               {nav ? (
                  <AiOutlineClose size={20} />
               ) : (
                  <AiOutlineMenu size={20} />
               )}
            </div>
            <div
               className={
                  nav
                     ? `fixed left-0 top-0 w-[60%] bg-black h-full shadow-lg border-r border-r-slate-0 ease-in-out duration-500`
                     : `fixed left-[-100%]`
               }
            >
               <ul className="pt-24 ml-14 space-y-7 text-sm">
                  <li>gilmps</li>
                  <li>bbcit-info</li>
                  <li>contact</li>
                  <li className="mt-5 border uppercase cursor-pointer  tracking-wider text-base rounded-md pl-6 pr-4 py-2 bg-[rgba(0,0,0,0.690)] shadow-sm inline-flex items-center gap-2 ">
                     <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjisAs9CeAD9iNtqK7QdNzU7_fKla8E5NqcP1_mcqWuUAUog/viewform?usp=sf_link">
                        Register
                     </a>
                     <MdArrowForwardIos size={15} />
                  </li>
               </ul>
            </div>
         </nav>
      </nav>
   );
};

export default Navbar;
