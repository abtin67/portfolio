"use client"

import { motion } from "framer-motion";
import { Vazirmatn } from "next/font/google";
import { FaDownload } from "react-icons/fa";
import {useTranslations} from 'next-intl';

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function About() {
  const t = useTranslations('about');
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, color: "#000" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl text-center py-6 lalezar dark:text-gray-300">
        {t('title')}
        </h1>
        <div
          id="about"
          className={`text-lg fade-in md:text-justify dark:text-gray-400  px-6 ${vazirmatn.className}`}
        >
        {t('description')}
        </div>
        <a
          href="/resume.pdf" 
          download="Matin-Resume.pdf" 
          className="
    group flex w-fit items-center gap-3 rounded-xl border border-gray-400 px-4 py-2 mt-4 mb-6
    transition-all duration-300 ms-6 bg-blue-600
    hover:bg-gray-100 hover:shadow-md
    dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700
  "
        >
          
          <FaDownload className="text-md text-blue-200 group-hover:text-blue-600 transition-transform group-hover:-translate-y-1 dark:text-gray-300" />

          <span className="font-medium text-md">{t('resume')}</span>
        </a>
      </motion.div>
    </div>
  );
}
