"use client"; // برای استفاده از ThemeToggle

import  ThemeToggle  from "@/app/[locale]/components/toggle/ThemeToggle"; // مسیر ایمپورت را چک کنید
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");

  const navLinks = [
    { href: "#hero", label: t("home"), icon: <FaHome /> },
    { href: "#about", label: t("about"), icon: <FaUserAlt /> },
    { href: "#services", label: t("services"), icon: <GrServices /> },
    { href: "#project", label: t("projects"), icon: <FaProjectDiagram /> },
    { href: "#contact", label: t("contact"), icon: <FaEnvelope /> },
  ];

  return (
  
    <nav className="w-full flex justify-center pt-4 absolute top-0 z-50 left-0 right-0">
      <div
        className="
          flex items-center justify-between  gap-3 lg:gap-10
          w-[93%] md:w-3/4 mx-auto fixed top-4 rounded-2xl py-3 px-3 
          transition-all duration-500 shadow-lg backdrop-blur-[5px] 
          
          
       
           text-gray-800
            shadow-black/10
          border border-white/20

         /* 🌙 حالت تاریک (Dark Mode) */
//           dark:bg-[rgba(0,0,0,0.1)]
//  dark:text-gray-100 
//          dark:shadow-amber-200/10 
//            dark:border-slate-700


        "
      >
        {/* دکمه تغییر تم */}
        <div className="shrink-0 ">
          <ThemeToggle />
        </div>

        {navLinks.map((link, index) => (
          <div
            key={index}
            className=" flex group text-gray-800 dark:text-gray-100 items-center gap-2 transition-all duration-300"
          >
            {/* آیکون (فقط در موبایل) */}
            <a
              href={link.href}
              className="lg:hidden text-xl text-gray-800 dark:text-gray-200 hover:text-red-600 transition-colors"
            >
              {link.icon}
            </a>

            {/* متن (فقط در دسکتاپ) */}
            <a
              href={link.href}
              className="
                hidden lg:block font-bold text-lg md:text-xl relative
                hover:text-red-600 transition-colors cursor-pointer
                text-gray-800 dark:text-gray-300
              "
            >
              {link.label}
              {/* خط متحرک زیر لینک */}
              <span className="absolute -bottom-1 start-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full rounded-full"></span>
            </a>
          </div>
        ))}

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
