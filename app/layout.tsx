import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/shared/Header/component'
import FooterSection from '../components/shared/Footer/component'
import { Inter } from 'next/font/google'


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
      </head>
      <body id="mainBody" className={inter.className}>
        <NavBar />
        {children}
        <FooterSection/>
      </body>
    </html>
  )
}
