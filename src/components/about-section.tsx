"use client"

import { motion } from "framer-motion"
import { Code2Icon, UsersIcon, CalendarIcon } from 'lucide-react'
import { AnimatedText } from "./animated-text"
import { GlareCardAbout } from "./sobreNossa"

const features = [
  {
    icon: Code2Icon,
    title: "Workshops Técnicos",
    description: "Aprenda as últimas tecnologias em JavaScript e TypeScript com nossos workshops práticos.",
  },
  {
    icon: UsersIcon,
    title: "Networking",
    description: "Conecte-se com outros desenvolvedores e expanda sua rede profissional.",
  },
  {
    icon: CalendarIcon,
    title: "Eventos Regulares",
    description: "Participe de nossos meetups mensais e mantenha-se atualizado com as tendências do mercado.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Sobre Nossa Comunidade"
          className="text-4xl font-bold text-center mb-12 text-white"
          />
          <GlareCardAbout/>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

