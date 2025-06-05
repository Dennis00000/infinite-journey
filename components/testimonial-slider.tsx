"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { XCard } from "@/components/ui/x-card"

interface Testimonial {
  id: number
  link: string
  authorName: string
  authorHandle: string
  authorImage: string
  content: string[]
  isVerified?: boolean
  timestamp: string
  reply?: {
    authorName: string
    authorHandle: string
    authorImage: string
    content: string
    isVerified?: boolean
    timestamp: string
  }
}

export function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      link: "#",
      authorName: "Sarah Johnson",
      authorHandle: "sarahtravels",
      authorImage: "/placeholder.svg?height=400&width=400",
      content: [
        "Infinite Journeys transformed my travel experience! Their personalized recommendations led me to hidden gems in Japan I would have never discovered on my own.",
        "The digital membership is absolutely worth every penny.",
      ],
      isVerified: true,
      timestamp: "Mar 15, 2025",
      reply: {
        authorName: "Infinite Journeys",
        authorHandle: "infinitejourneys",
        authorImage: "/placeholder.svg?height=400&width=400",
        content: "Thank you for your kind words, Sarah! We're thrilled you enjoyed your experiences in Japan.",
        isVerified: true,
        timestamp: "Mar 16",
      },
    },
    {
      id: 2,
      link: "#",
      authorName: "Michael Chen",
      authorHandle: "mikedigitalnomad",
      authorImage: "/placeholder.svg?height=400&width=400",
      content: [
        "As a digital nomad, I've used many travel platforms, but none compare to Infinite Journeys.",
        "Their curated accommodations are consistently high quality, and their customer service is exceptional. Highly recommended!",
      ],
      isVerified: true,
      timestamp: "Feb 28, 2025",
      reply: {
        authorName: "Infinite Journeys",
        authorHandle: "infinitejourneys",
        authorImage: "/placeholder.svg?height=400&width=400",
        content: "Thanks Michael! We put extra care into selecting accommodations that are perfect for digital nomads.",
        isVerified: true,
        timestamp: "Mar 1",
      },
    },
    {
      id: 3,
      link: "#",
      authorName: "Elena Rodriguez",
      authorHandle: "elenaexplores",
      authorImage: "/placeholder.svg?height=400&width=400",
      content: [
        "From booking unique accommodations to discovering local experiences, Infinite Journeys made our family trip to France seamless and memorable.",
        "The kids still talk about the amazing places we visited!",
      ],
      isVerified: true,
      timestamp: "Jan 20, 2025",
      reply: {
        authorName: "Infinite Journeys",
        authorHandle: "infinitejourneys",
        authorImage: "/placeholder.svg?height=400&width=400",
        content: "We're so happy your family had a wonderful time in France, Elena! Family memories are priceless.",
        isVerified: true,
        timestamp: "Jan 21",
      },
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden py-12 px-4">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <Quote className="h-16 w-16 text-primary/20" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex justify-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <XCard {...testimonials[currentIndex]} link="#" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-md hover:bg-primary hover:text-white"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-md hover:bg-primary hover:text-white"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

