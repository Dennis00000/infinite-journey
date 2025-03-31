"use client"

import { useEffect, useState } from "react"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Globe, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Travel testimonial data
const testimonials = [
  {
    title: "Life-changing journey",
    content:
      "Infinite Journeys transformed our family vacation into an unforgettable adventure. The personalized itinerary and local experiences were beyond our expectations.",
    author: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "SJ",
  },
  {
    title: "Seamless travel experience",
    content:
      "As a digital nomad, I've used many travel platforms, but Infinite Journeys stands out with its curated accommodations and exceptional customer service.",
    author: "Michael Chen",
    location: "Tokyo, Japan",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "MC",
  },
  {
    title: "Authentic local experiences",
    content:
      "From booking unique accommodations to discovering hidden gems, Infinite Journeys made our trip to France truly authentic and memorable.",
    author: "Elena Rodriguez",
    location: "Barcelona, Spain",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "ER",
  },
  {
    title: "Perfect honeymoon planning",
    content:
      "Infinite Journeys helped us plan the perfect honeymoon in Bali. Their attention to detail and romantic touches made our special trip even more magical.",
    author: "James & Olivia Wilson",
    location: "London, UK",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "JW",
  },
  {
    title: "Business travel made easy",
    content:
      "The digital membership has been invaluable for my business trips. Quick bookings, reliable accommodations, and 24/7 support have made travel stress-free.",
    author: "David Kim",
    location: "Seoul, South Korea",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "DK",
  },
  {
    title: "Extraordinary cultural immersion",
    content:
      "Our journey through Japan with Infinite Journeys was filled with authentic cultural experiences we would have never discovered on our own.",
    author: "Sophia Martinez",
    location: "Mexico City, Mexico",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "SM",
  },
  {
    title: "Reliable family travel partner",
    content:
      "Traveling with three kids can be challenging, but Infinite Journeys made it seamless with family-friendly accommodations and activities everyone enjoyed.",
    author: "Thomas Anderson",
    location: "Sydney, Australia",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "TA",
  },
  {
    title: "Luxury on a budget",
    content:
      "I was amazed at how Infinite Journeys could provide such premium experiences while keeping costs reasonable. Their insider knowledge is truly valuable.",
    author: "Priya Patel",
    location: "Mumbai, India",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "PP",
  },
]

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    // Auto-scroll carousel every 5 seconds
    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 5000)

    return () => clearTimeout(interval)
  }, [api, current])

  return (
    <div className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why thousands of travelers choose Infinite Journeys for their adventures around the world.
            </p>
          </div>

          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                  <div className="bg-card dark:bg-gray-800 rounded-xl h-full p-6 shadow-sm border border-border flex justify-between flex-col">
                    <Globe className="w-8 h-8 stroke-1 text-primary mb-4" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">{testimonial.title}</h3>
                        <p className="text-muted-foreground mt-2 text-base">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <Avatar className="h-10 w-10 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">{testimonial.author}</span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.slice(0, Math.min(8, testimonials.length)).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-primary w-4" : "bg-primary/30"
                }`}
                onClick={() => {
                  api?.scrollTo(index)
                  setCurrent(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Testimonials }

