"use client"

import { motion } from "framer-motion"
import { Wifi, Utensils, Thermometer, Dumbbell, Droplets, Fan, Home, MapPin, Users } from "lucide-react"
import Link from "next/link"
import type { JSX } from "react"

interface PropertyCardProps {
  title: string
  location: string
  image?: string
  price: string
  amenities: string[]
  guests: number
  link: string
}

export function PropertyCard({ title, location, image, price, amenities, guests, link }: PropertyCardProps) {
  const amenityIcons: Record<string, JSX.Element> = {
    Wifi: <Wifi className="h-4 w-4" />,
    Kitchen: <Utensils className="h-4 w-4" />,
    Heater: <Thermometer className="h-4 w-4" />,
    Gym: <Dumbbell className="h-4 w-4" />,
    Pool: <Droplets className="h-4 w-4" />,
    "Air Condition": <Fan className="h-4 w-4" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={link} className="block">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
          <Home className="h-16 w-16 text-primary/60" />
        </div>
        <div className="p-4">
          <div className="flex items-center text-sm text-muted-foreground mb-1 font-bold">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {location}
          </div>
          <h3 className="text-xl font-extrabold mb-2 text-foreground">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center text-sm text-muted-foreground font-bold">
                {amenityIcons[amenity]}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {guests} Guest{guests > 1 ? "s" : ""}
            </div>
            <div className="text-lg font-extrabold text-foreground">
              {price} <span className="text-sm font-bold text-muted-foreground">/ day</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

