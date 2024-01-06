import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./Components/Navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find-A-Roomie',
  description: 'Find a roommate in your area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
