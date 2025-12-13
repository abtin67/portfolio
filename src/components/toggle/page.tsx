"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// آیکون‌های ماه و خورشید (می‌توانید هر آیکون دیگری انتخاب کنید)
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // جلوگیری از ارور Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // می‌توانید اینجا یک دایره خالی یا لودینگ کوچک بگذارید تا پرش نداشته باشد
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => {
        // اگر الان تاریک است، برو به روشن. در غیر این صورت برو به تاریک
        if (resolvedTheme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
      className="p-1
         lg:p-2 rounded-full transition-all duration-300
         ease-in-out dark:hover:bg-transparent
        bg-transparent text-gray-800 
       dark:bg-transparent dark:text-yellow-200
        
        focus:outline-none 
      "
      aria-label="تغییر تم"
    >
      {/* اگر تم تاریک بود، آیکون خورشید را نشان بده، وگرنه ماه */}
      {resolvedTheme === "dark" ? (
        <BsSun size={17} />
      ) : (
        <BsMoonStarsFill size={17} />
      )}
    </button>
  );
}
