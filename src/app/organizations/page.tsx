'use client'

import { LinearGradient } from 'react-text-gradients'
import { Card, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react';
import Link from 'next/link';

export default function organizations () {

    return (

        <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
        <main className = "text-slate-900 dark:text-slate-50 ease-in-out duration-150">

            <center><h1 className="mt-8 text-5xl font-bold">My
        
            <LinearGradient gradient = {['to left', 'rgb(253, 183, 45), rgb(84,34,195)']}
            className='text-shadow-lg shadow-indigo-400/20'> Education &
            
            <span className="text-shadow-lg shadow-orange-400/40"> Experiences</span>
            </LinearGradient>

            <div className='flex flex-col lg:flex-row md:flex-col objects-center justify-evenly mt-24 mx-8'>
                
                <motion.div
                    initial={{ opacity: 0.05 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                <Card
                    className='items-center rounded-full px-12 py-8 bg-[rgb(253,183,45)] shadow-xl shadow-[rgb(253,183,45)]/70 dark:bg-[rgb(84,34,195)] dark:shadow-[rgb(84,34,195)]/80 ease-in-out duration-150 my-6 w-7/8 md:w-3/4 lg:my-0 lg:w-96'
                    direction={'column'}
                >
                    <Image
                        className='rounded-full outline outline-3'
                        boxSize={'150px'}
                        src='uw.png'
                        alt='University of Waterloo'
                    />

                    <text className='text-2xl font-medium mt-4'>
                        University of Waterloo
                    </text>

                    <text className='text-lg font-light mt-4 italic'>
                        1B Computer Engineering, expected graduation in 2028
                    </text>

                    <Link href="https://uwaterloo.ca/hire/" target='_blank' className = "mt-4 px-1 py-2 w-24 text-base font-light text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
                        Website</Link>

                </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.05 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                <Card
                    className='items-center rounded-full px-12 py-8 bg-zinc-200 shadow-xl shadow-zinc-200/70 dark:bg-zinc-800 dark:shadow-zinc-800/80 ease-in-out duration-150 my-6 w-7/8 md:w-3/4 lg:my-0 lg:w-96'
                    direction={'column'}
                >
                    <Image
                        className='rounded-full outline outline-3'
                        boxSize={'150px'}
                        src='uwfe.jpeg'
                        alt='UWFE Firmware'
                    />

                    <text className='text-2xl font-medium mt-4'>
                        UWFE Firmware Team
                    </text>

                    <text className='text-lg font-light mt-4 italic'>
                        Firmware review + testing in C/Python.
                    </text>

                    <Link href="https://www.uwfsae.ca/who-we-are-1" target='_blank' className = "mt-4 px-1 py-2 w-24 text-base font-light text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
                        Website</Link>

                </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.05 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                <Card
                    className='items-center rounded-full px-12 py-8 bg-[rgb(253,183,45)] shadow-xl shadow-[rgb(253,183,45)]/70 dark:bg-[rgb(84,34,195)] dark:shadow-[rgb(84,34,195)]/80 ease-in-out duration-150 my-6 w-7/8 md:w-3/4 lg:my-0 lg:w-96'
                    direction={'column'}
                >
                    <Image
                        className='rounded-full outline outline-3'
                        boxSize={'150px'}
                        src='msm.png'
                        alt='Main St. Music'
                    />

                    <text className='text-2xl font-medium mt-4'>
                        Main St. Music
                    </text>

                    <text className='text-lg font-light mt-4 italic'>
                        Guitar Instructor + Web Developer for killtheburr.com
                    </text>

                    <Link href="https://mainstmusic.ca" target='_blank' className = "mt-4 px-1 py-2 w-24 text-base font-light text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
                        Website</Link>

                </Card>
                </motion.div>

            </div>

      </h1></center>
    </main>
    </motion.div>
    )
}

/* colors:

violet - [rgb(84,34,195)]
orange - [rgb(253,183,45)]

*/