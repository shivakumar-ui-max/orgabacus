import React from "react";

const Contact = () => {
   return (
      <section className="border-t-2 black text-white mt-8">
         <h4 className="uppercase text-center mt-6 font-bold text-xl gradient">
            contact us
         </h4>
         <div className="container mx-auto flex justify-between flex-col gap-6 md:flex-row mt-6">
            <div className="aboutUs flex-1 px-5">
               <h5>About Us</h5>
               <p className="text-xs text-justify mt-3 text-slate-200">
                  Sri Bankatlal Badruka founded Seth Ghasiram Gopikishan Badruka
                  Educational society in 1950, with establishment of Badruka
                  College of Commerce and Arts (BBCA). Over the last six
                  decades, the Society has grown from strength to strength.
                  Roday, it has 8 instituations of higher learning and a hostel.
                  Over 50,000 students have passed through the portals of the
                  Society, occuping significant positions in India and abroad.
               </p>
            </div>
            <div className="flex-1 px-5">
               <h5>Faculty Co-ordinators</h5>
               <ul className="mt-3">
                  <li>Mr.sunny</li>
                  <li>Mr.bunny</li>
                  <li>Ms.chinny</li>
                  <li>Ms.pinny</li>
               </ul>
            </div>
            <div className="flex-1 px-5">
               <h5>Co-ordinators</h5>
               <ul className="mt-3">
                  <li>Mr.sunny</li>
                  <li>Mr.bunny</li>
                  <li>Ms.chinny</li>
                  <li>Ms.pinny</li>
               </ul>
            </div>
            <div className="flex-1 px-5">
               <h5>Have a question ?</h5>
               <ul className="mt-3">
                  <li>kachiguda</li>
                  <li>1234-567-891</li>
                  <li>info@BBCIT.com</li>
                  <li>www.bbcit.com</li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Contact;
