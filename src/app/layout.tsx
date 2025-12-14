import type { Metadata } from "next";
import { Lalezar, Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import  ThemeProvider  from "@/components/theme-provider/theme-provider";


const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});


const lalezar = Lalezar({
  subsets:["arabic"],
  weight:"400"
})


export const metadata: Metadata = {
 title: "پورتفولیوی فریدون عاقبتی | توسعه‌دهنده فرانت‌اند",
  description: "وب‌سایت شخصی و نمونه‌کارهای فریدون عاقبتی، متخصص React و Next.js. مشاهده پروژه‌ها و دانلود رزومه.",
  keywords: ["طراحی وب", "برنامه‌نویس فرانت‌‌اند", "React Developer", "Next.js", "توسعه دهنده وب", "نمونه کار", "فریدون عاقبتی"],
  authors: [{ name: "فریدون عاقبتی" }],
  creator: "فریدون عاقبتی",
  icons:"/fivicone.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning >
      <body
        className={`${vazirmatn.className}  antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main  >{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
