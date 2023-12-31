'use client'

import { LinearGradient} from 'react-text-gradients'
import * as React from 'react';
import { Card, Image, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function projects() {

  return (

    <motion.div
        initial={{ opacity: 0.05 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
    <main className="text-slate-900 dark:text-slate-50 ease-in-out duration-150">

      <center><h1 className="mt-8 text-5xl font-bold">My
        
      <LinearGradient gradient = {['to left', 'rgb(253, 183, 45), rgb(84,34,195)']}
        className='text-shadow-lg shadow-indigo-400/20'> Technical 
        
        <span className="text-shadow-lg shadow-orange-400/40"> Projects</span>
        </LinearGradient>
      </h1></center>

      <div className='z-0 mx-[1%] lg:mx-[25%] md:mx-[15%] sm:mx-[0%] mt-24 flex flex-col justify-between text-base text-center font-light'>
        
       <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <Card 
          className = "flex flex-row justify-between align-middle items-center rounded-xl px-8 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150"
          direction={'row'}
          >
          <Image
            className = "rounded-full outline outline-3 align-middle max-w-none"
            boxSize = '100px'
            maxW={'100%'}
            src='ktb.png'
            alt='ktb'
          />
          <Stack direction={'column'} className='ml-[9%] mt-1 text-left'>
            <text className='text-2xl font-medium'>
              killtheburr.com
            </text>

            <text>
              Enhanced the KillTheBurr website using WordPress Elementor, Bluehost and HTML.
            </text>

            <Link href="https://killtheburr.com" target='_blank' className = "mt-1 px-1 py-2 w-16 text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
              Link</Link>
          </Stack>
        </Card>
        </motion.div>

        <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
        >
          <Card 
          className = "flex flex-row justify-between align-middle mt-8 items-center rounded-xl px-8 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150"
          direction={'row'}
          >
          <Image
            className = "rounded-full outline outline-3 align-middle max-w-none"
            boxSize = '100px'
            maxW={'100%'}
            src='earth2.png'
            alt='save-the-planet'
          />
          <Stack direction={'column'} className='ml-[9%] mt-1 text-left'>
            <text className='text-2xl font-medium'>
              Save the Planet
            </text>

            <text>
              Parallax image gallery of critically endangered animals, created using Svelte.js and HTML/CSS
            </text>

            <Link href="https://github.com/AkkuB0Y/Save-the-Planet" target='_blank' className = "mt-1 px-1 py-2 w-20 text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
              GitHub</Link>
          </Stack>
        </Card>    
        </motion.div>
  
        <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
        >
        <Card 
          className = "flex flex-row justify-between align-middle mt-8 items-center rounded-xl px-8 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150"
          direction={'row'}
          >
          <Image
            className = "rounded-full outline outline-3 align-middle max-w-none"
            boxSize = '100px'
            maxW={'100%'}
            src='https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='ece198'
          />
          <Stack direction={'column'} className='ml-[9%] mt-1 text-left'>
            <text className='text-2xl font-medium'>
              Project Studio: Decibel Meter
            </text>

            <text>
              Designed and implemented an STM microcontroller based decibel monitor using Altium, embedded C, and the STM32. 
              Contact me at <span className="hover:underline">asatish@uwaterloo.ca</span> for source code.
            </text>

            <Stack direction={'row'}>       
              <Link href="https://outlook.com" target='_blank' className = "mt-1 px-1 py-2 w-24 text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
                Contact</Link>
            </Stack>
          </Stack>
        </Card>
        </motion.div>
      </div>
      
    </main>
    </motion.div>

  )
  // card:
  // className='mx-48 mt-12 flex flex-row text-base text-center inline font-light rounded-xl px-6 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150'
  /* 
        <h1 className='text-xl font-medium ml-[9%] mt-1'>
          My first project
        </h1>

  */

  /*
    link (use whenever):

    <Link href="#" className = "mt-1 px-1 py-2 w-16 text-center rounded-2xl text-slate-50 bg-zinc-700 hover:underline dark:text-zinc-600 dark:bg-zinc-100 ease-in-out duration-150">
        Link</Link> 
  */
}