"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Project() {
  const [selectId, setSelectId] = useState(null);
  const t = useTranslations("projects")

   const projectsList = [
    {
      id: 1,
      logo: "/logo.png",
      title: t("project1.title"),  // ترجمه خودکار بر اساس زبان
      image: "/e-commerce.png",
      href: "https://e-commerce-nu-bay-92.vercel.app/",
    },
    {
      id: 2,
      logo: "/hero-img1 (1).webp",
      title: t("project2.title"),
      image: "/offchi.png",
      href: "https://offchi.vercel.app/",
    },
    {
      id: 3,
      logo: "/digistyle-logo.png",
      title: t("project3.title"),
      image: "/digistyle-img.png",
      href: "https://abtin67.github.io/djstyle/#/fcomponent",
    },
    {
      id: 4,
      logo: "/otp2.png",
      title: t("project4.title"),
      image: "/otpcode.png",
      href: "https://otp-code-pi.vercel.app/",
    },
    {
      id: 5,
      logo: "/comingSoon.png",
      title: t("project5.title"),
      image: "/coming-soon.jpeg",
      href: "#",
    },
  ];

  return (
    <>
      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-5">
       <div className="bg-gray-200 dark:bg-slate-600 slide-up px-2 rounded-lg pb-1 shadow-lg">
         <div className="text-black w-full px-2 pt-5 mt-5">
          <h1 className="font-bold text-2xl pb-1 mt-5 dark:text-gray-300">{t('title')}</h1>
        </div>
       <div className="w-full  bg-gray-300 dark:bg-slate-300  my-10 py-5 px-6 rounded-md flex items-center justify-center gap-6 flex-wrap ">
         
        {
          projectsList.map(item =>(
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
                className="pb-3 bg-transparent"
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
