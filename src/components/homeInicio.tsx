"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"; 
import { Github, Send } from 'lucide-react';

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Comunidade",
    },
    {
      text: "do",
    },
    {
      text: "Brazil",
    },
    {
      text: "NorteJs",
      className: "text-green-500 dark:text-green-500",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start justify-center h-[10rem] px-4 lg:px-0 space-y-4">
      {/* Texto inicial */}
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base text-center lg:text-left lg:ml-2">
        Alô programador (a) JS ou TS! Conheça a
      </p>
      
      {/* Efeito de escrita */}
      <TypewriterEffectSmooth words={words} />
      
      {/* Botões */}
      <div className="flex flex-col md:flex-row max-md:justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
        <button className="flex justify-center items-center gap-2 w-full md:w-44 h-10 rounded-xl bg-black border dark:border-white text-white text-sm">
          <Send />
          Entrar no grupo
        </button>
        <button className="flex justify-center items-center gap-2 w-full md:w-44 h-10 rounded-xl bg-white text-black border border-black text-sm">
          <Github />
          Conectar no Github
        </button>
      </div>
    </div>
  );
}
