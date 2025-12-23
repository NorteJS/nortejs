import Image from "next/image"
import { AnimatedText } from "./animated-text"

const organizers = [
  {
    name: "Fábio",
    image: "/organizers/fabio.jpg",
  },
  {
    name: "Cristian",
    image: "/organizers/cristian.jpg",
  },
  {
    name: "Ivie",
    image: "/organizers/ivie.jpg",
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Organizadores"
          className="text-4xl font-bold text-center mb-12 text-white"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((person) => (
            <div
              key={person.name}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg leading-tight">
                    {person.name}
                  </p>
                  <p className="text-gray-300 text-sm">Organização NorteJS</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
