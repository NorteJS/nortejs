import { Code2Icon, UsersIcon } from "lucide-react";
import { GlareCard } from "./ui/glare-card";

export function GlareCardAbout() {
  return (
    <div className="container mt-4 max-md:mt-16 px-4 sm:px-0 mx-auto justify-items-center grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <Code2Icon className="w-12 h-12 mb-4 text-yellow-400" />
        <p className="font-bold text-white text-lg">Workshops Técnicos</p>
        <p className="font-normal text-base mt-4">
          Aprenda as últimas tecnologias em JavaScript e TypeScript com nossos workshops práticos.
        </p>
      </GlareCard>

      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <UsersIcon className="w-12 h-12 mb-4 text-yellow-400" />
        <p className="font-bold text-white text-lg">Networking</p>
        <p className="font-normal text-base   mt-4">
          Conecte-se com outros desenvolvedores e expanda sua rede profissional.
        </p>
      </GlareCard>

      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <UsersIcon className="w-12 h-12 mb-4 text-yellow-400" />
        <p className="font-bold text-white text-lg">Eventos Regulares</p>
        <p className="font-normal text-base   mt-4">
          Participe de nossos meetups mensais e mantenha-se atualizado com as tendências do mercado.
        </p>
      </GlareCard>
    </div>
  );
}
