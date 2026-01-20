import { AnimatedText } from "./animated-text";
import { GlareCardAbout } from "./sobreNossa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Sobre Nossa Comunidade"
          className="text-4xl font-bold text-center mb-12 text-white"
        />
        <GlareCardAbout />
      </div>
    </section>
  );
}
