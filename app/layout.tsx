import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/shared/Header/component';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import styles from './page.module.css';
import CLARA from '@/components/CLARA/component';
import Footer from '@/components/shared/FooterBottom/component';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "OmniReality LLC",
  description: 'Web | DaaS | XR',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body id="mainBody" className={`${inter.className} ${styles.myMain}`}>
        <NavBar />
        <CLARA />
        {children}
        <Analytics />
        <Footer/>

      </body>

    </html>
  )
}
