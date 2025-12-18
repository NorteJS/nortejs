import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Networking</h1>
          <p className="text-gray-300 max-w-2xl">
            Página em construção. Você pode explicar como participar, horários e dinâmica.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
