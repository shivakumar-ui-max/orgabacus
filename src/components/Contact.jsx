import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
   return (
      <section className=" w-full  black text-white mt-8 tracking-wide py-4">
         <h4 className="uppercase text-center mt-12 font-bold text-xl gradient">
            contact us
         </h4>
         <div className="container mx-auto flex justify-between flex-col gap-6 md:flex-row pt-14">
            <div className="aboutUs flex-1 px-5">
               <h5>About Us</h5>
               <p className="text-xs text-justify mt-3 text-slate-200 tracking-wide">
                  "Sri Bankatlal Badruka founded Seth Ghasiram Gopikishan
                  Badruka Educational society in 1950, with establishment of
                  Badruka College of Commerce and Arts (BBCA). Over the last six
                  decades, the Society has grown from strength to strength.
                  Roday, it has 8 instituations of higher learning and a hostel.
                  Over 50,000 students have passed through the portals of the
                  Society, occuping significant positions in India and abroad."
               </p>
            </div>
            <div className="flex-1 px-5">
               <h5>Faculty Co-ordinators :</h5>
               <div className="mt-3 ">
                  {/* sunny */}

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.sunny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* bunny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.bunny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* chinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.chinny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* pinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.pinny
                     </p>
                     <p>123456789</p>
                  </div>
               </div>
            </div>
            <div className="flex-1 px-5">
               <h5>Co-ordinators :</h5>
               <div className="mt-3 ">
                  {/* sunny */}

                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.sunny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* bunny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.bunny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* chinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.chinny
                     </p>
                     <p>123456789</p>
                  </div>

                  {/* pinny */}
                  <div className="flex justify-between items-center text-slate-200 text-sm tracking-wide">
                     <p className="flex items-center gap-2">
                        <FaArrowRightLong
                           size={12}
                           className="text-orange-400"
                        />
                        Mr.pinny
                     </p>
                     <p>123456789</p>
                  </div>
               </div>
            </div>
         </div>

         {/* follow */}
         <div className="follow text-center pt-5  mt-6">
            <div>
               <h6 className="text-base tracking-wide">follow us</h6>
               <ul className="flex justify-center items-center gap-10 my-5">
                  <li>
                     <FaFacebookF className="text-[#1877F2]" />
                  </li>
                  <li>
                     <FaInstagram className="text-[#ff6464]" />
                  </li>
                  <li>
                     <BiLogoGmail className="text-[#c71610]" />
                  </li>
                  <li>
                     <FaTwitter className="text-[#1DA1F2]" />
                  </li>
               </ul>
            </div>

            <em className="text-xs tracking-widest text-slate-300">
               copyright @ 2024
            </em>
         </div>
      </section>
   );
};

export default Contact;
