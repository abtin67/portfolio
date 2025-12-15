
import { Inter, Lalezar, Vazirmatn } from "next/font/google";
// import "../../"; // این خط اشتباه بود و حذف شد
import "../globals.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "@/app/[locale]/components/theme-provider/theme-provider";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
   variable: "--font-vazir", // نام متغیر CSS
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // نام متغیر CSS
  display: "swap",
});
const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: "400",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

// ✅ اصلاح شده: تمام متادیتاها اینجا تعریف می‌شوند
export async function generateMetadata({ params }: MetadataProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    // بخش‌های داینامیک (ترجمه شده)
    title: {
      template: `%s | ${t("siteName")}`,
      default: t("siteName"),
    },
    description: t("welcome"), // یا هر کلیدی که برای توضیحات دارید

    // بخش‌های استاتیک (از کد قبلی شما منتقل شد)
    keywords: [
      "طراحی وب",
      "برنامه‌نویس فرانت‌‌اند",
      "React Developer",
      "Next.js",
      "توسعه دهنده وب",
      "نمونه کار",
      "فریدون عاقبتی",
    ],
    authors: [{ name: "فریدون عاقبتی" }],
    creator: "فریدون عاقبتی",
    icons: "/fiveicon.jpg",
  };
}

// ✅ Layout اصلی
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // دریافت پیام‌ها
  const messages = await getMessages();

  // تشخیص جهت
  const direction = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} ${inter.variable}  ${
          direction === "rtl" ? "font-vazir" : "font-inter"
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}