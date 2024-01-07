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
// const data = [
//    {
//       id: 1,
//       img: "./pic1.jpg",
//       alt: "abacus pics",
//    },
//    {
//       id: 2,
//       img: "./pic2.jpg",
//       alt: "abacus pics",
//    },
//    {
//       id: 3,
//       img: "./pic3.jpg",
//       alt: "abacus pics",
//    },
//    {
//       id: 4,
//       img: "./pic4.jpg",
//       alt: "abacus pics",
//    },
//    {
//       id: 5,
//       img: "./pic5.jpg",
//       alt: "abacus pics",
//    },
//    {
//       id: 6,
//       img: "./pic6.jpg",
//       alt: "abacus pics",
//    },
// ];

const Glimps = () => {
   return (
      <div>
         <h3 className="text-center mt-10 text-3xl uppercase tracking-wide textBlack font-bold">
            Glimps
         </h3>
         <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            spaceBetween={0}
            slidesPerView={3}
            className=" mt-11 black pl-16"
         >
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic1} alt="pic1" className="w-full h-full" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic2} alt="pic2" className="w-full h-full" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic3} alt="pic3" className="w-full h-full" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic4} alt="pic4" className="w-full h-full" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic5} alt="pic5" className="w-full h-full" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-96 h-60">
                  <img src={pic6} alt="pic6" className="w-full h-full" />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Glimps;
