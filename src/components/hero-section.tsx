"use client"

// import { motion } from "framer-motion"
// import { GithubIcon, TwitterIcon } from 'lucide-react'
// import { AnimatedText } from "./animated-text"
import { TypewriterEffectSmoothDemo } from "./homeInicio"
import { IconJsTs } from "./iconJsTs"
// import Image from "next/image"
// import { div } from "framer-motion/client"

export default function HeroSection() {
  return (
    <section className="relative bg-blue-950/50 mt-8 max-md:mt-16 max-lg:mt-20 py-12 lg:py-24 min-h-[70vh] flex items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full max-w-xl">
          <TypewriterEffectSmoothDemo />
        </div>

        <div className="w-full lg:flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <IconJsTs />
        </div>
      </div>
    </section>


    // {/* <Image
    // className="max-md:hidden opacity-80 rounded-3xl w-100 h-52"
    // src="/NorteJsMascote.jpeg" 
    // width={320}
    // height={100}
    // alt="Mascote nortejs"
    // /> */}

    // <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
    //   <motion.div
    //     className="absolute inset-0 z-0"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1 }}
    //   >
    //     <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    //   </motion.div>
    //   <div className="container mx-auto px-4 text-center">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className="text-5xl md:text-7xl font-bold mb-4"
    //     >
    //       Norte<span className="text-yellow-400">JS</span>
    //     </motion.h1>
    //     <AnimatedText
    //       text="Expandindo o horizonte do desenvolvimento web no Norte"
    //       className="text-xl md:text-2xl mb-8"
    //     />
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, delay: 0.4 }}
  )
}

