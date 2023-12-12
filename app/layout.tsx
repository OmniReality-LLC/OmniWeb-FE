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
  title: "OmniReality LLC: Expert Website Design, Augmented Reality, AI Add-ons, Custom Websites",
  description: "At OmniReality LLC, we transform dreams into digital realities. Specializing in bespoke website design, immersive augmented reality experiences, and innovative AI add-ons. Connect with us for cutting-edge digital solutions."
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
