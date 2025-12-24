"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "./animated-text";

const sponsors = [
  { name: "PHP Manaus", logo: "/supporters/php.jpg", link: "https://phpmanaus.com.br/" },
  {
    name: "Java Amazonas",
    logo: "/supporters/javaamzonas.jpg",
    link: "https://javaamazonas.com.br/",
  },
  { name: "Uninorte", logo: "/supporters/uninorte.png", link: "https://www.uninorte.com.br/" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Nossos Apoiadores"
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
              <Link href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={150}
                  className="max-w-full hover:scale-105 transition-transform duration-300 rounded-full h-auto"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
