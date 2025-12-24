import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SponsorsSection from "@/components/sponsors-section";

export default function ApoioPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
