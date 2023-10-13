import Contact from '@/components/main/Contact'
import { Footer } from '@/components/main/Footer'
import Expertise from '@/components/services/Expertise'
import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <Expertise />
                <Services />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default page
