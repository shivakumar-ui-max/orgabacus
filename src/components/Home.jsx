import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
   return (
      <section
         className=" container mx-auto mt-32 px-4 text-slate-300 flex flex-col flex-wrap gap-10  md:flex-row md:mt-52  "
         id="home"
      >
         <div className="flex-1">
            <h1 className="text-4xl textBlack uppercase font-bold md:text-5xl">
               abacus 2024
            </h1>
            <p className="text-base mt-5 capitalize">
               welcome to abacus-2024 the national level IT QUIZ for tech
               savvies.The abacus event is organized by the students of BBCIT (
               Banktlal Badruka College For Information Technology )
            </p>
            <div className="mt-5 border uppercase cursor-pointer  tracking-wider text-base rounded-md pl-6 pr-4 py-2 bg-[rgba(0,0,0,0.690)] shadow-sm inline-flex items-center gap-2 ">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjisAs9CeAD9iNtqK7QdNzU7_fKla8E5NqcP1_mcqWuUAUog/viewform?usp=sf_link">
                  Register
               </a>
               <MdArrowForwardIos size={15} />
            </div>
         </div>
         <div className="flex-1 ">
            <div className="flex justify-between items-center">
               <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-2xl textBlack capitalize font-semibold md:3xl">
                     venue
                  </h3>
                  <span className="capitalize text-base">
                     badruka college auditorium
                  </span>
               </div>
               <div className="flex flex-col gap-2 flex-1">
                  <h3 className="textBlack text-2xl capitalize font-semibold md:3xl">
                     Date & time
                  </h3>
                  <span className="text-base mr-1 ">
                     9 february , 2024 , 10:00 AM to 6:00 PM
                  </span>
               </div>
            </div>
            <p className="text-base  mt-5">
               <span className="textBlack capitalize font-semibold mr-1">
                  registration fees: Rs.
               </span>
               100/- for each team (comprising two members) register before 9
               February, 2024
            </p>
            <p className="text-base mt-5 capitalize">
               <span className="textBlack font-semibold mr-1">
                  spot registration
               </span>
               on 9 february, 2024 9:00 AM to 10:00 AM
            </p>
         </div>
      </section>
   );
};

export default Home;
