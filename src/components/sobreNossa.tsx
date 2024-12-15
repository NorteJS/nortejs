import { GlareCard } from "./ui/glare-card";
import { Code2Icon, UsersIcon, CalendarIcon } from 'lucide-react'

export function GlareCardAbout() {
  return (
    <div className="container mt-4 max-md:mt-16 px-4 sm:px-0 mx-auto justify-items-center grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        {/* <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg> */}
        <Code2Icon className="w-12 h-12 mb-4 text-yellow-400"/>
        <p className="font-bold text-white text-lg">Workshops Técnicos</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Aprenda as últimas tecnologias em JavaScript e TypeScript com nossos workshops práticos.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
      <img 
          className="h-6/12 w-full absolute inset-0 object-cover"
          src="/NorteJsMascote.jpeg"
        >
        </img>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <UsersIcon className="w-12 h-12 mb-4 text-yellow-400"/>
        <p className="font-bold text-white text-lg">Networking</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Conecte-se com outros desenvolvedores e expanda sua rede profissional.
        </p>
      </GlareCard>
    </div>
  );
}
