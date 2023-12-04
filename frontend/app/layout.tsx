import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './ui/navbar';
import Footer from './ui/footer';
import '../app/globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foximop',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
