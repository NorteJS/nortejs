import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}
