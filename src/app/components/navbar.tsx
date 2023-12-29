'use client'

import Link from 'next/link'
import {TbLetterA, TbLetterS} from 'react-icons/tb'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import * as React from 'react';
import {useEffect} from 'react';

export default function navbar () {

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

    /*  fix this later!*/

    const [isDarkMode, setDarkMode] = React.useState(false);

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
        <nav className = "mt-3 flex flex-row justify-between">
            <div className="text-left no-underline text-zinc-600 font-semibold font-serif text-2xl align-top    ">
            <Link href="/" className="px-4 py-4 align-top inline-flex rounded-xl hover:text-[rgb(84,34,195)] ease-in-out duration-300 dark:hover:text-[rgb(253,183,45)] dark:text-slate-50 ease-in-out duration-150">
                AS.
            </Link>
            </div>
            <div className="text-right no-underline text-zinc-600 font-medium ">
                <Link href="/" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    Home</Link>
                <Link href="/projects" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    Projects</Link>
                <Link href="/portfolio" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    Portfolio</Link>
                <Link href="/fun" className="px-4 py-4 inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    Fun</Link>
                <DarkModeSwitch 
                    className=
                    "flex-1 relative w-5 inline-block cursor-pointer ml-2 mr-4 align-[-26%]"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
            </div>
           


        </nav>
    )
}
