"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"
import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg" },
  { name: "Sponsor 2", logo: "/placeholder.svg" },
  { name: "Sponsor 3", logo: "/placeholder.svg" },
  { name: "Sponsor 4", logo: "/placeholder.svg" },
  { name: "Sponsor 5", logo: "/placeholder.svg" },
  { name: "Sponsor 6", logo: "/placeholder.svg" },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-black">
      <p>Norte</p>
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Nossos Patrocinadores"
          className="text-3xl font-bold text-center mb-12 text-white"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}