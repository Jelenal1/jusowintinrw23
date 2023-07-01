import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JUSO Winterthur NRW23',
  description: 'Nationalratswahlen 23',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{
        <>
        <Navbar />
        {children}
        </>
      
      }</body>
    </html>
  )
}
