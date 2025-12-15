import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["fa", "en"] as const;

// 1. ورودی را به requestLocale تغییر دهید
export default getRequestConfig(async ({ requestLocale }) => {
  
  // 2. مقدار را await کنید تا رشته locale بدست بیاید
  let locale = await requestLocale;

  // 3. بررسی اعتبار (با as any برای جلوگیری از خطای تایپ آرایه)
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});