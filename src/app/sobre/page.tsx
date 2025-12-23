import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrganizersSection from "@/components/organizers-section";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <AboutSection />
      <OrganizersSection />
      <Footer />
    </main>
  );
}
