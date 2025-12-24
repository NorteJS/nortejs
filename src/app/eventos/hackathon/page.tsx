import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Hackathon</h1>
          <p className="text-gray-300 max-w-2xl">
            Página em construção. Depois você pode colocar regras, cronograma, premiações e
            inscrição.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
