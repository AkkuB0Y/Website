"use client"

import { LinearGradient } from 'react-text-gradients'
import Link from 'next/link';
import * as React from 'react';
import { Card, CardBody, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaMusic } from 'react-icons/fa'

export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0.05 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <main className="text-slate-900 dark:text-slate-50 ease-in-out duration-150">

      <center><h1 className="mt-8 mx-16 text-5xl font-bold">Welcome to my 
        
        <LinearGradient gradient = {['to left', 'rgb(253, 183, 45), rgb(84,34,195)']}
        className='text-shadow-lg shadow-indigo-400/20'> Webs
        
        <span className="text-shadow-lg shadow-orange-400/40">ite!</span>
        </LinearGradient>

      </h1></center>

      
      <Card 
        className="mx-0 mt-16 flex flex-col items-center place-content-center object-center my-4 lg:flex-row md:flex-row sm:flex-col justify-between text-base text-center inline font-light lg:mx-48 md:mx-32"
        direction={{base: 'column', lg:'row'}}
        >
        <Image
          className="rounded-3xl outline outline-3 flex items-center snap-center justify-center mb-10 lg:mb-0 md:mb-0"
          boxSize='200px'
          objectFit={'fill'}
          maxW={'100%'}
          fit={'fill'}
          src='pfp.png'
          alt='akshay'
        />
        <CardBody className='mx-8 text-left'>
          <text>

            Hello! I&apos;m Akshay Satish, a Computer Engineering student at the University of Waterloo heading into my 1B term. 
            This personal website documents my professional and personal journey, displaying many of my technical and non-technical
            achievements. 

            <br/>
            <br/>

            Moving over to the <Link href="/projects" className = "text-[rgb(84,34,195)] hover:underline dark:text-[rgb(253,183,45)] ease-in-out duration-150">Projects</Link> tab, 
            you&apos;ll find some of my previous software work, which involves my skills in web-dev, firmware testing and project design. Clicking 
            the <Link href="https://linktr.ee/akshaysatish" target='_blank' className = "text-[rgb(84,34,195)] hover:underline dark:text-[rgb(253,183,45)] ease-in-out duration-150">♫</Link> button 
            however, you&apos;ll find some of the musical things I post on my social media!

            <br/>
            <br/>

            Please take your time to go through this website and its contents. If you would like to contact me for
            professional inquiries, please email me at <span className="hover:underline">asatish@uwaterloo.ca</span> and 
            see my <Link href="https://drive.google.com/file/d/1-4xwaTY2JIz_HZZzTsDOu8u7m7Tz2S9w/view?usp=sharing" target = "_blank" className="text-[rgb(84,34,195)] hover:underline dark:text-[rgb(253,183,45)] ease-in-out duration-150">Resume</Link>
            . For personal inquiries, email me at <span className="hover:underline">akkusat1987@gmail.com</span>.

          </text>

        </CardBody>
      </Card>

    </main>

    </motion.div>

  )

  // card:
  // rounded-xl px-6 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150
}
