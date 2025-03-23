"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, MapPin } from "lucide-react"

interface FeaturedDestinationProps {
  title: string
  link: string
  color?: string
}

export function FeaturedDestination({ title, link, color = "primary" }: FeaturedDestinationProps) {
  const destination = link.split("/").pop() || "default"

  // Create a mapping of destinations to gradient colors
  const gradients: Record<string, string> = {
    italy: "from-green-500/80 to-red-500/80",
    spain: "from-yellow-500/80 to-red-500/80",
    australia: "from-blue-500/80 to-yellow-500/80",
    japan: "from-red-500/80 to-white/80",
    france: "from-blue-400/80 to-red-500/80",
    america: "from-blue-500/80 to-red-500/80",
    germany: "from-black/70 to-yellow-500/80 via-red-500/80",
    indonesia: "from-red-500/80 to-white/80",
    netherlands: "from-red-500/80 to-blue-500/80 via-white/80",
    "saudi-arabia": "from-green-500/80 to-white/80",
    mexico: "from-green-500/80 to-red-500/80 via-white/80",
  }

  const gradient = gradients[destination] || `from-${color}/60 to-${color}/80`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={link} className="block relative rounded-lg overflow-hidden group h-[400px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} z-10`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-white">
          <Compass className="h-16 w-16 mb-4" />
          <h3 className="text-xl md:text-2xl font-extrabold text-white text-center">{title}</h3>
          <div className="mt-4 flex items-center">
            <MapPin className="h-5 w-5 mr-1" />
            <span className="font-medium">Explore destination</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

