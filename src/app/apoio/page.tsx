import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SponsorsSection from "@/components/sponsors-section";

export default function ApoioPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
