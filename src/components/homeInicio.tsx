"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"; 
import { Code2Icon, UsersIcon, CalendarIcon,GithubIcon, Github, MessageSquareText, Send, } from 'lucide-react'

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Comunidade",
    },
    {
      text: "de",
    },
    {
      text: "desevolvimento",
    },
    {
      text: "do",
    },
    {
      text: "Norte.",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Alô programador (a) JS ou TS! Conheça a
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="flex justify-center items-center gap-2 w-44 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Send />
          Entrar nosso grupo
        </button>
        <button className="flex justify-center items-center gap-2 w-44 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Github/>
          Conectar no Github
        </button>
      </div>
    </div>
  );
}

