// import Navbar from '@/components/navbar'
import Navbar from "../components/navbar";
// import { HoveredLink } from '@/components/ui/navbar-menu'
import EventsSection from "../components/events-section";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import SponsorsSection from "../components/sponsors-section";
// import { NavbarDemo } from '@/components/navDemo'
import ScreenSizeIndicator from "@/components/ScreenSizeIndicator";
// import { GlareCardDemo } from '../components/sobreNossa'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}
      <Navbar />
      {/* <NavigationMenuDemo/> */}
      {/* <NavbarDemo /> */}
      {/* <HoveredLink /> */}
      <HeroSection />
      {/* <Cube/> */}
      {/* <AboutSection /> */}
      <EventsSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
