"use client"

import { FaGithubSquare, FaLinkedinIn } from 'react-icons/fa'
import { IoMusicalNotes } from "react-icons/io5";
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer () {

    return (
        <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-row justify-center'
        >
        <main>

            <div className="flex mt-12 pb-2 lg:mt-16 md:mt-36 sm:mt-12">
            
                <Link href="https://github.com/AkkuB0Y" target="_blank" className = "px-4 py-4 text-center items-center inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50">
                    <FaGithubSquare className="text-2xl"/></Link>
                <Link href="https://www.linkedin.com/in/akshaysatish26205" target="_blank" className = "px-4 py-4 text-center items-center inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50">
                    <FaLinkedinIn className="text-2xl"/></Link>
                <Link href="https://linktr.ee/akshaysatish" target='_blank' className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50">
                    <IoMusicalNotes className="text-2xl"/></Link>

            </div>
        </main>
        </motion.div>
    )
}