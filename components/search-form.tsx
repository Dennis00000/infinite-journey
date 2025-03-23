"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function SearchForm() {
  const router = useRouter()
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(1)

  const destinations = [
    "america",
    "japan",
    "germany",
    "france",
    "indonesia",
    "netherlands",
    "saudi arabia",
    "italy",
    "spain",
    "australia",
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const normalizedDestination = destination.toLowerCase().trim()

    if (destinations.includes(normalizedDestination)) {
      router.push(`/destinations/${normalizedDestination}`)
    } else {
      router.push("/trending-places")
    }
  }

  return (
    <motion.form
      onSubmit={handleSearch}
      className="bg-background dark:bg-background rounded-lg shadow-lg p-2 w-full max-w-4xl mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative">
          <Input
            placeholder="Where would you like to go?"
            className="h-12 pl-10 text-base font-medium"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("h-12 justify-start text-left font-medium flex-1", !checkIn && "text-muted-foreground")}
            >
              {checkIn ? format(checkIn, "PPP") : "Check in"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("h-12 justify-start text-left font-medium flex-1", !checkOut && "text-muted-foreground")}
            >
              {checkOut ? format(checkOut, "PPP") : "Check out"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
          </PopoverContent>
        </Popover>

        <div className="flex-1">
          <Input
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number.parseInt(e.target.value))}
            placeholder="Guests"
            className="h-12 text-base font-medium"
          />
        </div>

        <Button type="submit" size="lg" className="h-12 px-6">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </motion.form>
  )
}

