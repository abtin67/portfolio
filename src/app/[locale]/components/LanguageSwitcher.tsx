
"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation"; 


export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();


  const nextLocale = locale === "fa" ? "en" : "fa";


  return (
   <>

     <Link
      href={pathname}
      locale={nextLocale}
      
      className="flex  items-center gap-2 px-3 py-1.5 transition-colors"
    >
      <span className="text-slate-900 dark:text-white font-bold
       uppercase text-md">
        {locale === "fa" ? "En" : "Fa"}
      </span>
    </Link>
   </>
  );
}