import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => {
      setNav((prev) => {
         return !prev;
      });
   };
   return (
      <nav className=" fixed top-0 left-0 right-0 z-10  ">
         <nav className=" flex justify-between items-center uppercase  text-xl tracking-wide text-slate-200  px-3 md:px-4 py-3 border-b-[1px] shadow-sm black ">
            <div>
               <div className="logo flex items-center capitalize space-x-3">
                  <div className="flex ">
                     <img
                        src={logo}
                        alt="logo"
                        className="w-[50px] h-[50px] rounded-full"
                     />
                     <span className="text-[5px] -mt-3">TM</span>
                  </div>
                  <span className="text-xs">
                     Banktlal badruka college <br /> for Information Technology
                  </span>
               </div>
               <span className="text-[5px]">tamaso ma jyotirgamaya</span>
            </div>
            {/* hidden md:flex md:justify-between md:space-x-10 md:text-sm */}
            <ul className="  hidden md:flex md:justify-between md:space-x-10 md:text-sm ">
               <li>
                  <a href="#home"> home</a>
               </li>
               <li>
                  <a href="#glimps"> gilmps</a>
               </li>
               <li>
                  <a href="#info">bbcit-info</a>
               </li>
               <li>
                  <a href="#contact">contact</a>
               </li>
            </ul>
            <div onClick={handleClick} className="block md:hidden">
               {nav ? (
                  <AiOutlineClose size={20} className="cursor-pointer" />
               ) : (
                  <AiOutlineMenu size={20} className="cursor-pointer" />
               )}
            </div>
            <div
               className={
                  nav
                     ? `fixed left-0 top-0 w-[60%] black h-full shadow-lg border-r border-r-slate-0 ease-in-out duration-500`
                     : `fixed left-[-100%]`
               }
            >
               <ul className="pt-24 ml-14 space-y-7 text-sm">
                  <li onClick={handleClick}>
                     <a href="#home" className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        home
                     </a>
                  </li>
                  <li onClick={handleClick}>
                     <a href="#glimps" className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        gilmps
                     </a>
                  </li>
                  <li onClick={handleClick}>
                     <a href="#info" className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        bbcit-info
                     </a>
                  </li>
                  <li onClick={handleClick}>
                     <a href="#contact" className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        contact
                     </a>
                  </li>
                  <li className="mt-5 border uppercase cursor-pointer  tracking-wider text-base bg-[#0e1317] rounded-md pl-6 pr-4 py-2  shadow-sm inline-flex items-center gap-2 ">
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
