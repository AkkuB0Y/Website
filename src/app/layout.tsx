import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akshay Satish',
  description: 'My Personal Website!',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="en">

        <body className={inter.className + " bg-zinc-100 dark:bg-zinc-900 ease-in-out duration-150 space-y-4"}>
        
          <Navbar/>
          {children}   

          <Footer/>
        </body>
        
      </html>
  )
}

