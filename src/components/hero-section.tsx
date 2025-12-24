import { TypewriterEffectSmoothDemo } from "./homeInicio";
import { IconJsTs } from "./iconJsTs";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-950/50 mt-8 max-md:mt-16 max-lg:mt-20 py-12 lg:py-24 min-h-[70vh] flex items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full max-w-xl">
          <TypewriterEffectSmoothDemo />
        </div>

        <div className="w-full lg:flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <IconJsTs />
        </div>
      </div>
    </section>
  );
}
