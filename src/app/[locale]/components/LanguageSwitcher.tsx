
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale(); // دریافت زبان فعلی (fa یا en)
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    // تعیین زبان جدید
    const nextLocale = locale === "fa" ? "en" : "fa";

    // ساخت آدرس جدید
    // مثال: تبدیل /fa/about به /en/about
    // با روش split مطمئن می‌شویم فقط بخش اول آدرس تغییر می‌کند
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.replace(newPath);
    });
  };

 return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors border
        ${isPending 
          ? "opacity-50 cursor-not-allowed" 
          : "hover:bg-accent hover:text-accent-foreground border-transparent hover:border-border"
        }
      `}
    >
      <span className="uppercase font-bold tracking-wider">
        {locale === "fa" ? "En" : "Fa"}
      </span>
    </button>
  );
}