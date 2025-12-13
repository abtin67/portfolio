import { motion } from "framer-motion";
import { Vazirmatn } from "next/font/google";
import { FaDownload } from "react-icons/fa";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, color: "#000" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl text-center py-6 lalezar dark:text-gray-300">
          من کیستم؟؟
        </h1>
        <div
          id="about"
          className={`text-lg fade-in text-justify dark:text-gray-400  px-6 ${vazirmatn.className}`}
        >
          من فریدون عاقبتی هستم؛ توسعه‌دهنده‌ی فرانت‌اند با تمرکز بر طراحی
          رابط‌های کاربری مدرن، سریع و کاملاً بومی‌سازی‌شده برای کاربران
          فارسی‌زبان. علاقه‌مند به ساختن تجربه‌هایی هستم که هم از نظر فنی بی‌نقص
          باشن، هم از نظر فرهنگی قابل اعتماد و دلنشین. با استفاده از ابزارهایی
          مثل React، Next.js و TailwindCSS، تلاش می‌کنم رابط‌هایی بسازم که هم
          زیبا باشن، هم سریع، هم قابل فهم برای مخاطب ایرانی. هدفم اینه که
          تکنولوژی رو با زبان و فرهنگ خودمون هماهنگ کنم؛ چون باور دارم طراحی خوب
          فقط به ظاهر نیست، بلکه به درک مخاطب هم بستگی داره.
        </div>
        <a
          href="/resume.pdf" // 1. اسم فایل دقیقاً باید همینی باشه که تو پوشه public گذاشتی
          download="Matin-Resume.pdf" // 2. اسمی که موقع دانلود برای کاربر ذخیره میشه
          className="
    group flex w-fit items-center gap-3 rounded-xl border border-gray-400 px-4 py-2 mt-4 mb-6
    transition-all duration-300 ms-6 bg-blue-600
    hover:bg-gray-100 hover:shadow-md
    dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700
  "
        >
          {/* آیکون با انیمیشن کوچک موقع هاور */}
          <FaDownload className="text-md text-blue-200 group-hover:text-blue-600 transition-transform group-hover:-translate-y-1 dark:text-gray-300" />

          <span className="font-medium text-md">دانلود رزومه من</span>
        </a>
      </motion.div>
    </div>
  );
}
