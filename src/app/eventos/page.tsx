import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import EventsSection from "@/components/events-section";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <EventsSection />
      <Footer />
    </main>
  );
}
