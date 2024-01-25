import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar';
import { SessionProvider } from "@/app/Components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/nextauth";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find-A-Roomie',
  description: 'Find a roommate in your area',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
        </body>
    </html>
  )
}
