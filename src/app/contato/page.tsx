import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <section className="py-20 bg-black" id="contact">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contato</h1>
          <p className="text-gray-300 max-w-2xl">
            Página em construção. Depois você pode colocar links do GitHub, Instagram, X/Twitter,
            e um e-mail de contato da comunidade.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
