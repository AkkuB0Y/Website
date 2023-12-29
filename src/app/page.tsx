'use client';

import { LinearGradient } from 'react-text-gradients'
import Link from 'next/link';
import * as React from 'react';
import { Card, CardBody } from '@chakra-ui/react'

export default function Home() {


  return (

    <main className="text-slate-900 dark:text-slate-50 ease-in-out duration-150">

      <center><h1 className="mt-8 mx-16 text-5xl font-bold">Hello! I'm   
        
        <LinearGradient gradient = {['to left', 'rgb(253, 183, 45), rgb(84,34,195)']}
        className='text-shadow-lg shadow-indigo-400/20'> Akshay  
        
        <span className="text-shadow-lg shadow-orange-400/40"> Satish</span>
        </LinearGradient>

      </h1></center>

      
      <Card className="mx-12 mt-16 flex flex-row text-base text-center inline font-light lg:mx-48 md:mx-32 sm:mx-12">
      <CardBody>
      <text>

        Hello! I'm Akshay Satish, a Computer Engineering student at the University of Waterloo heading into my 1B term. 
        This personal website documents my professional and personal journey, displaying many of my technical and non-technical
        achievements. 

        <br/>
        <br/>

        Moving over to the <Link href="/projects" className = "text-[rgb(84,34,195)] hover:underline dark:text-[rgb(253,183,45)] ease-in-out duration-150">Projects</Link> tab, 
        you'll find some of my previous software work, which involves my skills in web-dev, firmware testing and project design. On 
        the <Link href="/fun" className = "text-[rgb(84,34,195)] hover:underline dark:text-[rgb(253,183,45)] ease-in-out duration-150">Fun</Link> tab 
        however, you'll find some of the fun things I post on my social media!

        <br/>
        <br/>

        Please take your time to go through this website and its contents. If you would like to contact me for
        professional inquiries, please email me at <Link href="#" className="hover:underline">asatish@uwaterloo.ca</Link>, but for personal inquiries, email me 
        at <Link href="#" className="hover:underline">akkusat1987@gmail.com</Link>.

      </text>

      </CardBody>
      </Card>

    </main>

  )

  // card:
  // rounded-xl px-6 py-6 bg-zinc-200 dark:bg-zinc-800 ease-in-out duration-150
}
