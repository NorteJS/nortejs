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
    <div className="mt-8 justify-center max-md:mt-16 max-lg:mt-20 flex items-center max-lg:flex-col">
      <div className="max-lg:mr-4">
      <TypewriterEffectSmoothDemo />
      </div>
      <IconJsTs/>
    </div>


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

