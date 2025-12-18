import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaPhone, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Cantact = () => {

  const t = useTranslations('Contact')

  const locale = useLocale()
  const dir = locale === "fa"? "rtl":"ltr";
  
  return (
    <>
      <div className="w-full px-[8%] lg:px-[12%] py-10 my-2 gap-3">
        <div className="w-full  py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full text-black border border-gray-400 rounded-2xl lg:w-1/2 px-5 gap-y-4 flex flex-col  backdrop-blur-[2px]  items-start justify-center  py-5">
            <h1 className="text-xl text-start pb-3 lalezar dark:text-gray-300 leading-3">
              {t('sectionTitle')}
            </h1>
            <Link
              className=" flex gap-2 w-full border border-gray-400 px-5 py-1 items-center rounded-xl "
              href={`https://www.linkedin.com/in/ferydoun-aghebati-146271381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
              target="_blank"
            >
              <IoLogoLinkedin className="border hover:border-2 border-gray-600 hover:border-gray-800 p-1  text-4xl rounded-full text-blue-600 dark:border-gray-300 hover:dark:border-gray-200  dark:text-blue-400" />
              <span className="dark:text-gray-300 ps-2 text-gray-700 hover:text-gray-950 hover:dark:text-gray-200">
                {t('info.linkedin')}
              </span>
            </Link>
            <Link
              className=" flex gap-2 w-full border border-gray-400  px-5 py-1 items-center rounded-xl "
              href="tel:+989038308519"
              target="_blank"
            >
             {dir === "rtl" ?<FaPhone className="border hover:border-2 border-gray-600 hover:border-gray-800 dark:border-gray-300 hover:dark:border-gray-200 p-1  text-4xl rounded-full text-black dark:text-gray-300" />:<FaPhoneAlt className="border hover:border-2 border-gray-600 hover:border-gray-800 dark:border-gray-300 hover:dark:border-gray-200 p-1  text-4xl rounded-full text-black dark:text-gray-300" />} 
              <span className="dark:text-gray-300 ps-2 hover:dark:text-gray-200 text-gray-700 hover:text-gray-950">
                {t('info.call')}
              </span>
            </Link>
            <Link
              className=" flex gap-2 w-full border border-gray-400 px-5 py-1 items-center rounded-xl "
              href={`https://t.me/Abtin111`}
              target="_blank"
            >
              <FaTelegramPlane className="border hover:border-2 border-gray-600 hover:border-gray-800 dark:border-gray-300 hover:dark:border-gray-200  p-1  text-4xl rounded-full text-blue-600" />
              <span className="dark:text-gray-300 ps-2 hover:dark:text-gray-200 text-gray-700 hover:text-gray-950">
                {" "}
                {t('info.telegram')}
              </span>
            </Link>
            <Link
              className=" flex gap-2 w-full border border-gray-400 px-5 py-1 items-center rounded-xl "
              href="https://www.google.com/maps?q=تهران+میدان+آزادی"
              target="_blank"
            >
              <FaLocationDot className="border hover:border-2 border-gray-600 hover:border-gray-800 dark:border-gray-300 dark:text-green-400 hover:dark:border-gray-200  p-1  text-4xl rounded-full text-green-800" />
              <span className="dark:text-gray-300 ps-2 hover:dark:text-gray-200 text-gray-700 hover:text-gray-950">
                {t('info.location')}
              </span>
            </Link>

            <Link
            
              href="https://github.com/abtin67"
              target="_blank"
              className="w-full mt-4 border border-gray-700 bg-gray-950 dark:bg-gray-900/50 rounded-2xl p-4 flex items-center justify-between hover:border-blue-500 transition-all cursor-pointer group"
            >
              <div className="flex flex-col">
                <span className="text-gray-300 font-bold group-hover:text-blue-400">
                  گیت‌هاب من
                </span>
                <span className="text-xs text-gray-500">
                  مشاهده کدهای اوپن سورس
                </span>
              </div>
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* آیکون گیت‌هاب */}
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 pt-5 border border-gray-400 rounded-2xl  backdrop-blur-2xl">
            <h1 className="px-5 text-xl lalezar pt-2 pb-5 text-start">
             {t('askMe')}
            </h1>
            <form className="text-gray-600 dark:text-gray-400 px-5 w-full  transition-all duration-500 ">
              <label className="flex flex-col group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {" "}
                 {t('labels.name')}
                </span>
                <input
                  type="text"
                  placeholder={t('placeholders.name')}
                  className="border border-gray-400 group-hover:border-gray-500
                                  focus:border-gray-700 outline-none w-full
                                   px-5 py-2 rounded-xl backdrop-blur-2xl"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {" "}
                 {t('labels.phone')}
                </span>
                <input
                  type="phone"
                  placeholder={t('placeholders.phone')}
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {" "}
                  {t('labels.email')}
                </span>
                <input
                  type="email"
                  placeholder={t('placeholders.email')}
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label className="flex flex-col py-3 group">
                <span className="pb-2  group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {" "}
                  {t('labels.subject')}
                </span>
                <input
                  type="text"
                  placeholder={t('placeholders.subject')}
                  className="border border-gray-400
                   group-hover:border-gray-500 focus:border-gray-700 
                   outline-none w-full px-5 py-2 rounded-xl backdrop-blur-lg"
                />
              </label>
              <label>
                <textarea
                  className="border border-gray-400 focus:outline-1 dark:focus:outline-1 dark:focus:outline-gray-300 focus:outline-gray-500 mt-5  dark:focus:sadow  dark:focus:sadow-grary-300 dark:hover:border-gray-300 w-full rounded-xl p-3 px-4"
                  placeholder={t('placeholders.textarea')}
                  rows={5}
                ></textarea>
              </label>
              <div className="w-full text-center my-3">
                <button className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-xl py-2 px-4 text-white rounded-lg">
                  {t('sendBtn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cantact;
