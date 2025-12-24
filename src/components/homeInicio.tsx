"use client";
import { Github, Send } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Comunidade",
    },
    {
      text: "do",
    },
    {
      text: "Brasil",
    },
    {
      text: "NorteJS",
      className: "text-yellow-400",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start justify-center px-4 lg:px-0 space-y-4">
      <p className="text-neutral-200 text-sm sm:text-base text-center lg:text-left">
        Alô programador(a) JS ou TS! Conheça a
      </p>

      <TypewriterEffectSmooth words={words} className="justify-center lg:justify-start my-0" />

      <div className="flex flex-col md:flex-row max-md:justify-center w-full gap-4">
        <a
          href="https://chat.whatsapp.com/DKs8hMHMUQNB0Uf2Ef6jiC"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 w-full md:w-44 h-10 rounded-xl bg-black border dark:border-white text-white text-sm"
          aria-label="Entrar no grupo"
        >
          <Send size={16} />
          <span>Entrar no grupo</span>
        </a>
        <a
          href="https://github.com/nortejs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 w-full md:w-44 h-10 rounded-xl bg-white text-black border border-black text-sm"
          aria-label="Conectar no Github"
        >
          <Github size={16} />
          <span>Conectar no Github</span>
        </a>
      </div>
    </div>
  );
}
