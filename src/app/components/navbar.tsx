"use client"

import { FaHome } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5';
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Navbar () {

    useEffect (() => {
        const userTheme = localStorage.getItem("theme");
        const sysTheme =  window.matchMedia("(prefers-color-scheme: dark)").matches;

        const themeCheck = () => {
            if (userTheme === "dark" || (!userTheme && sysTheme)) {
                document.documentElement.classList.add("dark");
                return;
            }
        }

        themeCheck();

    })

    const [isDarkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(!isDarkMode);

    };

    useEffect (() => {

        if(isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    })
    
    return (
    <div>
        <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='absolute top-0 min-w-[100vw]'
            >
        <nav className = "mt-3 flex flex-row justify-between text-sm">
            <div className="text-left no-underline text-zinc-600 font-semibold font-serif text-2xl align-top">
                <Link href="/" className="px-4 py-4 align-top inline-flex hover:text-[rgb(84,34,195)] dark:hover:text-[rgb(253,183,45)] dark:text-slate-50 ease-in-out duration-300">
                    <FaHome/>
                </Link>
                <Link href="https://drive.google.com/file/d/19x4C2xjl6lX1WLW41bsoXxOEoUDpHQCR/view?usp=sharing" target="_blank" className="px-4 py-4 align-top inline-flex hover:text-[rgb(84,34,195)] dark:hover:text-[rgb(253,183,45)] dark:text-slate-50 ease-in-out duration-300">
                        <IoDocumentText/></Link>
            </div>

            <div>
                <div className="z-50 inline-block text-right text-medium text-zinc-600 dark:text-slate-50 align-[8%] md:hidden">
                    <Menu>
                        <MenuButton as={Button} className="px-4 py-4 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-300">
                            <TiThMenu className="text-2xl"/>
                        </MenuButton>
                        <MenuList className="z-50 px-5 py-5 text-center rounded-xl bg-zinc-200 dark:bg-zinc-700 dark:text-slate-50 ease-in-out duration-300">
                            <MenuItem as={NextLink} href="/projects" className="px-4 py-3 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:text-slate-50 ease-in-out duration-300">
                                <p>Projects</p>
                            </MenuItem>
                            <MenuItem as={NextLink} href="https://portfolio-akshaysatish.vercel.app" className='px-4 py-3 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:text-slate-50 ease-in-out duration-300'>
                                <p>Portfolio</p>
                            </MenuItem>
                            <MenuItem as={NextLink} href="/organizations" className='px-4 py-3 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:text-slate-50 ease-in-out duration-300'>
                                <p>Organizations</p>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className="hidden md:inline-block text-right no-underline text-zinc-600 font-medium">
                    <Link href="/projects" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-300">
                        Projects</Link>
                    <Link href="https://portfolio-akshaysatish.vercel.app" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-300">
                        Portfolio</Link>
                    <Link href="/organizations" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-300">
                        Organizations</Link>
                    
                </div>
                <DarkModeSwitch 
                        className=
                        "mt-3.5 md:mt-0 flex-1 relative w-5 inline-block cursor-pointer ml-2 mr-4 align-[-28%]"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                    />
            </div>
           
        </nav>
        </motion.div>
    </div>
    )
}
