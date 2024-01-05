import React from "react";

const Home = () => {
   return (
      <section className="container mx-auto mt-32 px-4 text-slate-300 flex flex-col flex-wrap gap-10  md:flex-row md:mt-52 ">
         <div className="flex-1">
            <h1 className="text-4xl text-black uppercase font-bold md:text-5xl">
               abacus 2024
            </h1>
            <p className="text-base mt-5">
               welcome to abacus 2023 the national level it quiz for tech
               savvies.The abacus event is organized by the students of BBCIT (
               Banktlal Badruka College For Information Technology )
            </p>
            <div className="mt-5 border uppercase inline-block tracking-wider text-base rounded-md px-6 py-2 bg-[rgba(0,0,0,0.690)] shadow-sm">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjisAs9CeAD9iNtqK7QdNzU7_fKla8E5NqcP1_mcqWuUAUog/viewform?usp=sf_link">
                  Register
               </a>
            </div>
         </div>
         <div className="flex-1 ">
            <div className="flex justify-between items-center">
               <div className="flex flex-col gap-2">
                  <h3 className="text-2xl text-black capitalize font-semibold md:3xl">
                     venue
                  </h3>
                  <span className="capitalize text-base">
                     badruka college auditorium
                  </span>
               </div>
               <div className="flex flex-col gap-2">
                  <h3 className="text-black text-2xl capitalize font-semibold md:3xl">
                     Date & time
                  </h3>
                  <span className="text-base mr-1 ">
                     25 februaru , 2024,10:00 Am
                  </span>
               </div>
            </div>
            <p className="text-base  mt-5">
               <span className="text-black capitalize font-semibold mr-1">
                  registaration fees: Rs.
               </span>
               100/- for each team (comprising two members) register before
               <span>25 February, 2024</span>
            </p>
            <p className="text-base mt-5 capitalize">
               <span className="text-black font-semibold mr-1">
                  spot registration
               </span>
               on 25 february, 2024 9:00am to 10:00 am
            </p>
         </div>
      </section>
   );
};

export default Home;
