// import Navbar from '@/components/navbar'
import Navbar from '../components/navbar'
// import { HoveredLink } from '@/components/ui/navbar-menu'
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import EventsSection from '../components/events-section'
import SponsorsSection from '../components/sponsors-section'
import Footer from '../components/footer'
// import { NavbarDemo } from '@/components/navDemo'
import { NavigationMenuDemo } from '../components/navtest'
// import { GlareCardDemo } from '../components/sobreNossa'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      {/* <NavigationMenuDemo/> */}
      {/* <NavbarDemo /> */}
      {/* <HoveredLink /> */}
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SponsorsSection />
      <Footer />
    </main>
  )
}

