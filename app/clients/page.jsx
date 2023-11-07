import ClientCard from '@/components/clients/ClientCard'
import HeroSection from '@/components/clients/HeroSection'
import Testimonial from '@/components/clients/Testimonial'
import Contact from '@/components/main/Contact'
import Footer from '@/components/main/Footer'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection />
            <ClientCard />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default page
