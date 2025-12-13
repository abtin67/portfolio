import Link from "next/link";
import React from "react";
import { FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Cantact = () => {
  return (
    <>
      <div className="w-full px-[8%] lg:px-[12%] py-10 my-2 gap-3">
        <div className="w-full  py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full text-black border border-gray-400 rounded-2xl lg:w-1/2 px-5 gap-y-4 flex flex-col  backdrop-blur-[2px]  items-center  py-5">
            <h1 className="text-xl lalezar dark:text-gray-300">ارتباط مستقیم</h1>
            <Link
              className="pb-2 flex gap-2 w-full border border-gray-400 px-5 py-2 items-center rounded-xl "
               href={`https://www.linkedin.com/in/ferydoun-aghebati-146271381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
               target="_blank"
            >
              <IoLogoLinkedin className="border border-gray-600 p-1  text-4xl rounded-full text-blue-600 dark:border-gray-300 dark:text-blue-400" />
              <span className="dark:text-gray-300">لینکدین من</span>
            </Link>
            <Link
              className="pb-2 flex gap-2 w-full border border-gray-400  px-5 py-2 items-center rounded-xl "
              href="tel:+989038308519"
              target="_blank"
            >
              <FaPhone className="border border-gray-600 dark:border-gray-300 p-1  text-4xl rounded-full text-black dark:text-gray-300" />
              <span className="dark:text-gray-300">تماس</span>
            </Link>
            <Link
              className="pb-2 flex gap-2 w-full border border-gray-400 px-5 py-2 items-center rounded-xl "
              href={`https://t.me/Abtin111`}
              target="_blank"
            >
              <FaTelegramPlane className="border border-gray-600 dark:border-gray-300 p-1  text-4xl rounded-full text-blue-600" />
              <span className="dark:text-gray-300"> تلگرام</span>
            </Link>
            <Link
              className="pb-2 flex gap-2 w-full border border-gray-400 px-5 py-2 items-center rounded-xl "
              href="https://www.google.com/maps?q=تهران+میدان+آزادی"
              target="_blank"
            >
              <FaLocationDot className="border border-gray-600 dark:border-gray-300 dark:text-green-400 p-1  text-4xl rounded-full text-green-800" />
              <span className="dark:text-gray-300">تهران - تهران</span>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 pt-5 border border-gray-400 rounded-2xl  backdrop-blur-2xl">
            <h1 className="px-5 text-xl lalezar pt-2 pb-5 text-center">از فریدون بپرس</h1>
            <form className="text-gray-600 dark:text-gray-400 px-5 w-full  transition-all duration-500 ">
              <label className="flex flex-col group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {" "}
                  نام و نام خانوادگی
                </span>
                <input
                  type="text"
                  placeholder="نام..."
                  className="border border-gray-400 group-hover:border-gray-500
                                  focus:border-gray-700 outline-none w-full
                                   px-5 py-2 rounded-xl backdrop-blur-2xl"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200"> تماس </span>
                <input
                  type="phone"
                  placeholder="شماره..."
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200"> ایمیل </span>
                <input
                  type="email"
                  placeholder="ایمیل..."
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200"> موضوع </span>
                <input
                  type="text"
                  placeholder="موضوع..."
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label >
                 <textarea className="border border-gray-400 focus:outline-1 dark:focus:outline-1 dark:focus:outline-gray-300 focus:outline-gray-500 mt-5  dark:focus:sadow  dark:focus:sadow-grary-300 dark:hover:border-gray-300 w-full rounded-xl p-3 px-4" placeholder="چه کار میتونم برات انجام بدم؟" rows={5}></textarea>
              </label>
              <div className="w-full text-center my-3">
                <button className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-xl py-2 px-4 text-white rounded-lg">ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cantact;
