import './globals.css'
import { montserrat } from '@/fonts/fonts'


export const metadata = {
  title: 'Cognozire',
  description: 'Cognozire is a consulting organization developing machine learning solutions for individuals and enterprises.In this generation of Internet, we realized that data is everything.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth scroll'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
