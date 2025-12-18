"use client";

import PortfolioCart from "@/app/[locale]/components/portfolioCart/page";
import Services from "@/app/[locale]/components/services/page";
import Technology from "@/app/[locale]/components/technology/page";
import { Vazirmatn } from "next/font/google";
import Projects from "@/app/[locale]/components/projects/page";
import Contact from "@/app/[locale]/components/contact/page";
import About from "@/app/[locale]/components/about/page";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function Home() {

  const t = useTranslations('home')
  return (
    <>
      <div
        id="hero"
        className={`w-full  dark:bg-slate-800 dark:text-gray-200  mt-8 px-[8%] lg:px-[12%]`}
      >
        <motion.h1
          className="text-4xl  dark:bg-slate-800 font-bold text-center mt-28 lg:pt-20"
          initial={{ opacity: 0, y: 30, color: "#1d4ed8" }}
          animate={{ opacity: 1, y: 0, color: "#000" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-950 dark:text-gray-300 dark:text-shadow-[2px] dark:text-shadow-amber-200">
            {t('title')}
          </span>
        </motion.h1>

        <motion.div
          className="text-lg dark:text-blue-400 text-gray-600  text-center pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         {t('description')}
        </motion.div>

        <div className="flex pt-16 relative flex-col-reverse  md:flex-row">
          <div className=" md:w-2/3">
            <div className="w-full  flex flex-col  justify-center">
              <About />
            </div>
            <Technology />
          </div>

          <div className=" w-full backdrop-blur-lg md:w-1/3 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // شروع: محو، پایین‌تر، رنگ مشکی
              animate={{ opacity: 1, x: 0, color: "#000" }} // پایان: ظاهر، جای اصلی، رنگ آبی
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <PortfolioCart />
            </motion.div>
          </div>
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
