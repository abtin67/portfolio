"use client";

import Link from "next/link";
import photoMe from "../../../../../public/photo-me.jpg";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PortfolioCart() {

  const t = useTranslations('portfolioCart')
  return (
    <>
      <div className="w-full p-10 sticky top-0 left-0 slide-left dark:shadow">
        <Image
          src={photoMe}
          alt="my photo"
          width={800}
          height={800}
          className=" object-contain rounded-t-lg hover:scale-95  dark:shadow-gray-400 transition-all duration-500"
        />
        <div className="backdrop-blur-[2px] px-5 rounded-b-lg flex flex-col justify-center items-center py-4 gap-5 shadow-xl text-blue-800">
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0, color: "#000" }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <h1 className="text-md sm:text-2xl font-bold text-gray-900 dark:text-gray-200">{t('title')}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, color: "#000" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
         <p className="text-md md:text-lg dark:text-gray-300">{t('description')}</p>
          </motion.div>
          
          <div className="w-full text-3xl pb-3 flex justify-center gap-5 text-gray-600 dark:text-gray-400">
            
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, color: "#000" }} 
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <Link target="_blank" className="texe-gray-600" href={`https://www.linkedin.com/in/ferydoun-aghebati-146271381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}>
              <FaLinkedin className="text-gray-500 dark:text-gray-400 hover:text-blue-600"/>
            </Link>
            </motion.div>
            <Link
            target="_blank"
              className="hover:text-blue-500"
              href={`mailto:aghebatiferydoun902@gmail.com`}
            >
              <MdMarkEmailRead />
            </Link>
            <Link
            target="_blank"
              className="hover:text-blue-500"
              href={`https://t.me/Abtin111`}
            >
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
