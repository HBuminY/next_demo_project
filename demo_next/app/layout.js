import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo app for Summit Investco',
  description: 'Written by Hulusi Bumin Yalçın',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="fixed h-full w-full top-0 left-0 flex flex-col">
          <div className="h-[10%] bg-slate-700">
          <Navbar/>
          </div>

          {children}
        </main>
        
        </body>
    </html>
  )
}