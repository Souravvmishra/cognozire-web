import Card from '@/components/main/card/Card'
import Contact from '@/components/main/Contact'
import FAQs from '@/components/main/FAQs'
import Footer from '@/components/main/Footer'
import HeroSection from '@/components/main/HeroSection'
import OurClients from '@/components/main/OurClients'
import OurTeam from '@/components/main/OurTeam'
import Services from '@/components/main/Services'
import WhoAreWe from '@/components/main/WhoAreWe'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurClients />
      <Services />
      <WhoAreWe />
      <OurTeam />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  )
}
