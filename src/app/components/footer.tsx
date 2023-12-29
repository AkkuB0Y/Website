import {FaGithubSquare, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'

export default function footer () {

    return (
        <main className="items-center text-center">

            <div className="text-center items-center relative items-stretch bottom-0 mt-12 place-content-center lg:mt-64 md:flex md:mt-36 sm:flex sm:mt-12">
            
                <Link href="https://github.com/AkkuB0Y" target="_blank" className = "px-4 py-4 text-center items-center inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    <FaGithubSquare className="text-2xl"/></Link>
                <Link href="https://www.linkedin.com/in/akshaysatish26205" target="_blank" className = "px-4 py-4 text-center items-center inline-block rounded-xl hover:bg-zinc-200 ease-in-out duration-300 dark:hover:bg-zinc-700 dark:text-slate-50 ease-in-out duration-150">
                    <FaLinkedinIn className="text-2xl"/></Link>

            </div>
        </main>
    )
}