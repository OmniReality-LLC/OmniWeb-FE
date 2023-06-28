import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nicolaas's Portfolio",
  description: 'Create. Inspire. Design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body id="mainBody"className={inter.className}>
          {children}
      </body>
    </html>
  )
}
