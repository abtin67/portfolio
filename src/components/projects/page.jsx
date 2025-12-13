"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import projects from "@/jsonData/projects.json";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";

export default function Project() {
  const [selectId, setSelectId] = useState(null);


  return (
    <>
      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-5">
       <div className="bg-gray-400 slide-up px-2 rounded-xl pb-1 shadow">
         <div className="text-black w-full px-2 pt-5">
          <h1 className="font-bold text-xl pb-1">نمونه کارها</h1>
          <p>برای دیدن انلاین نمونه کارها روی لینک کلیک کنید.</p>
        </div>
       <div className="w-full bg-gray-300  my-10 py-5 px-6 rounded-md flex gap-6 flex-wrap ">
         
        {
          projects.map(item =>(
            <div key={item.id}
            className="group relative flex justify-center items-center bg-gray-300"
            >
              <Link
              target="_blank"
              className="p-2 mx-4 flex flex-col items-center"
              href={item.href}
              
              >
                <Image 
                src={item.logo}
                alt={item.title}
                width={50}
                height={50}
                className="pb-3"
                />
                <span className="text-gray-600 underline font-bold hover:text-gray-900 text-sm">{item.title}</span>
              </Link>
              <div className=" -top-30 cursor-pointer absolute w-44 h-30 items-center px-3 -right-1  group-hover:justify-center shadow-2xl rounded-2xl z-10 backdrop-blur-[3px] hidden group-hover:flex ">
                 <div className="w-fit">
                  <Image 
                src={item.image}
                alt={item.title}
                width={750}
                height={750}
                className=""
                onClick={()=>setSelectId(item.image)}
                />
                 </div>
              </div>
            </div>
          ))
        }
       </div>
        {selectId && (
      <div
      onClick={()=>setSelectId(null)}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500 animate-fadeIn">
        <Image
         src={selectId}
          alt="image"
           width={800}
            height={800} 
            className="w-full md:w-2/3"
            />
      </div>
    )}

       </div>

      </div>
    </>
  );
}
