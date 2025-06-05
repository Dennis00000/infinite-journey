"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

interface StoryCardProps {
  title: string
  link: string
}

export function StoryCard({ title, link }: StoryCardProps) {
  const story = link.split("/").pop() || "default"

  // Create a mapping of stories to gradient colors
  const gradients: Record<string, string> = {
    italy: "from-green-500/70 to-red-500/70",
    spain: "from-yellow-500/70 to-red-500/70",
    australia: "from-blue-500/70 to-yellow-500/70",
  }

  const gradient = gradients[story] || "from-primary/50 to-primary/70"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={link} className="block relative rounded-lg overflow-hidden group h-[300px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} z-10`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
          <BookOpen className="h-12 w-12 text-white mb-4" />
          <h3 className="text-lg md:text-xl font-extrabold text-white text-center">{title}</h3>
          <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">Read story</div>
        </div>
      </Link>
    </motion.div>
  )
}

