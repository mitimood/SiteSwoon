import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swoon',
  description: 'Portfolio Swoon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans:wght@300&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
