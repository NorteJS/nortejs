"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export const HoverCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative z-10 p-8">
        {children}
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#2D79C7] to-[#F7E018]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

