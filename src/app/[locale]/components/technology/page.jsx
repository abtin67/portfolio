
import { useTranslations } from "next-intl";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export default function Technolgy(){

  const t = useTranslations('technology')
    return(
        <>
             <div  className=" gap-5 border-3 px-6 border-gray-300 dark:border-gray-700 rounded-lg my-5 py-8 text-blue-700">
              <h3  className="text-black dark:text-gray-200 lalezar text-2xl md:text-4xl font-bold pb-10">
               {t('title')}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6   text-5xl items-center justify-between">
                <div className="flex flex-col transition-transform group">
                  <FaHtml5 className="flex flex-col text-red-500 group-hover:scale-110" />
                  <span  className="opacity-0 group-hover:opacity-100 text-xl mt-2 text-gray-400">html:5</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <FaCss3Alt className="text-blue-500 group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-xl mt-2 text-gray-400">css3</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <IoLogoJavascript className="text-black bg-yellow-400 group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-xl mt-2 text-gray-400">javascript</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <RiTailwindCssFill className="text-blue-500 group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">tailwind.css</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <SiBootstrap className="text-blue-900 group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">bootstrap</span>
                </div>
                
                <div className="flex flex-col transition-transform group">
                  {" "}
                  <FaReact className="text-black  group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">react.js</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <SiNextdotjs className="text-black group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">next.js</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <SiTypescript className="text-blue-500 group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">typescript</span>
                </div>
                <div className="flex flex-col transition-transform group">
                  <TbBrandRedux className="text-black group-hover:scale-110" />
                   <span  className="opacity-0 group-hover:opacity-100 text-2xl mt-2 text-gray-400">redux</span>
                </div>
              </div>
            </div>
        </>
    )
}