import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";

const Glimps = () => {
   return (
      <div className="mt-16" id="glimps">
         <h3 className="text-center text-3xl uppercase tracking-wide textBlack font-bold">
            Glimps
         </h3>
         <p className="text-center mt-4 capitalize text-base text-slate-300 tracking-wider">
            glimps of 2023 abacus event
         </p>
         <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            slidesPerView={1}
            breakpoints={{
               640: {
                  slidesPerView: 3,
               },
            }}
            className=" mt-11 black md:pl-16"
         >
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic1}
                     alt="pic1"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic2}
                     alt="pic2"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic3}
                     alt="pic3"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic4}
                     alt="pic4"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic5}
                     alt="pic5"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img
                     loading="lazy"
                     src={pic6}
                     alt="pic6"
                     className="object-cover w-full h-full"
                  />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Glimps;
