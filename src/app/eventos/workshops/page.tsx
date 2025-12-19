import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Workshops</h1>
          <p className="text-gray-300 max-w-2xl">
            Página em construção. Aqui você pode listar workshops, datas, instrutores e links de inscrição.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
