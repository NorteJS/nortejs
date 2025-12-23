import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <section className="py-20 bg-black" id="contact">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contato</h1>
          <p className="text-gray-300 max-w-2xl">
            Fale com a gente pelo email{" "}
            <a
              className="text-white underline underline-offset-4 hover:text-yellow-400"
              href="mailto:NorteJsTs@gmail.com"
            >
              NorteJsTs@gmail.com
            </a>
            .
          </p>

          <ContactForm toEmail="NorteJsTs@gmail.com" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
