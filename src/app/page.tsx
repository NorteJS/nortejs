import EventsSection from "@/components/events-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ScreenSizeIndicator from "@/components/ScreenSizeIndicator";
import SponsorsSection from "@/components/sponsors-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}
      <Navbar />
      <HeroSection />
      <EventsSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
