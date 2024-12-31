"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"

const events = [
  {
    date: "15 Ago 2023",
    title: "Workshop: Introdução ao TypeScript",
    description: "Aprenda os fundamentos do TypeScript e como ele pode melhorar seu desenvolvimento JavaScript.",
  },
  {
    date: "22 Set 2023",
    title: "Meetup: React Hooks Avançados",
    description: "Explore técnicas avançadas de uso de Hooks em React para criar componentes mais eficientes.",
  },
  {
    date: "10 Out 2023",
    title: "Palestra: O Futuro do JavaScript",
    description: "Descubra as próximas features do JavaScript e como elas impactarão o desenvolvimento web.",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-20 max-sm:mt-0 sm:mt-4 md:mt-12 lg:mt-[50px] bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Próximos Eventos"
          className="text-4xl font-bold text-center mb-12 text-white"
        />
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-yellow-400">{event.date}</span>
                <motion.span
                  className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Inscrições Abertas
                </motion.span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

