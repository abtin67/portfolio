"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";


import servicesTitle from "../../jsonData/services.json";




export default function Services() {

  


  return (
    <>
     <section>
       <div  className="w-full px-[8%] lg:px-[12%] mt-5">
        <div className="border-3 border-gray-300 dark:border-gray-700">
          <div className="text-center pt-8 pb-6 text-2xl md:text-4xl ">
            <h1 className="border-b-3 border-gray-400 mx-5 pb-3">
              خدماتی که میتوانید به ما بسپارید.{" "}
            </h1>
          </div>
          <div className=" my-2 ">

             
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              speed={2000}
              breakpoints={{
                1200: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                559: { slidesPerView: 2 },
                340: { slidesPerView: 1 },
              }}
            >
              {servicesTitle.map((service) => (
                
                  <SwiperSlide key={service.id} className="py-3 w-fulltransition-all duration-500 ">
                    <div className="mb-5 ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={350}
                        height={250}
                        className="object-contain hover:scale-95 transition-all duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-gray-800 ">{service.title}</p>
                    </div>
                  </SwiperSlide>
          
              ))}
            </Swiper>
          </div>
        </div>
      </div>
     </section>
    </>
  );
}
