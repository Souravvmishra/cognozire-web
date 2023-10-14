import './globals.css'
import { montserrat } from '@/fonts/fonts'


export const metadata = {
  title: 'Cognozire',
  description: `Cognozire is a cutting-edge consultancy specializing in the creation and application of machine learning solutions for individuals and enterprises. In today's digital era, we understand the paramount importance of data. Therefore, we are dedicated to providing unparalleled support, leveraging your data to its fullest potential.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
