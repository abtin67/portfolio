
"use client";

import { useLocale } from "next-intl";
// 👇 نکته کلیدی: Link و usePathname باید از فایل نویگیشن خودتان باشند
// اگر فایل شما در src/navigation.ts است آدرس را تنظیم کنید
import { usePathname, Link } from "@/i18n/navigation"; 

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname(); // مسیر فعلی را بدون /fa یا /en برمی‌گرداند

  // محاسبه زبان مقصد
  const nextLocale = locale === "fa" ? "en" : "fa";

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-600 hover:bg-gray-800 transition-colors"
    >
      <span className="text-white font-bold uppercase text-sm">
        {locale === "fa" ? "En" : "Fa"}
      </span>
    </Link>
  );
}