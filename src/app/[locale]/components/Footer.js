"use client"

import { useTranslations } from "next-intl"

export default function Footer(){

    const t = useTranslations('footer')
    return(
        <>
        <footer className="bg-[#ededed] dark:bg-slate-800  flex justify-center border-t border-gray-300 dark:border-gray-700  py-10 px-[8%] lg:px-[12%]" >
            <p className="dark:text-gray-300">{t('copyright')}</p>
        </footer>

        </>
    )

}