"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, MapPin } from "lucide-react"

interface CountryCardProps {
  name: string
  price: string
  image?: string
}

export function CountryCard({ name, price }: CountryCardProps) {
  const countryPath = name.toLowerCase() === "saudi arabia" ? "saudi-arabia" : name.toLowerCase()
  const bgColors: Record<string, string> = {
    america: "from-blue-500/70 to-blue-700/70",
    japan: "from-red-500/70 to-red-700/70",
    germany: "from-yellow-500/70 to-yellow-700/70",
    france: "from-blue-400/70 to-red-500/70",
    indonesia: "from-red-500/70 to-white/70",
    netherlands: "from-orange-500/70 to-blue-500/70",
    "saudi arabia": "from-green-500/70 to-green-700/70",
    mexico: "from-green-500/70 to-red-500/70",
    italy: "from-green-500/70 to-red-500/70",
    spain: "from-yellow-500/70 to-red-500/70",
    australia: "from-blue-500/70 to-yellow-500/70",
  }

  const bgColor = bgColors[name.toLowerCase()] || "from-primary/50 to-primary/70"

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="h-full">
      <Link href={`/destinations/${countryPath}`} className="block relative rounded-lg overflow-hidden group h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} z-10`} />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <Globe className="h-10 w-10 mb-2" />
          <h3 className="text-xl font-extrabold">{name}</h3>
          <div className="flex items-center mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-white/90 font-bold">{price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

