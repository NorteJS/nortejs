import EventsSection from "@/components/events-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <EventsSection />
      <Footer />
    </main>
  );
}
