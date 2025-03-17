"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Check initial scroll position
    handleScroll()

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
              <Plane className="h-4 w-4" />
            </div>
            <motion.span
              className={cn(
                "text-xl font-extrabold transition-colors",
                scrolled || isOpen ? "text-foreground" : "text-white",
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                textShadow: scrolled || isOpen ? "0 0 8px rgba(0,0,0,0.2)" : "0 0 8px rgba(255,255,255,0.5)",
              }}
            >
              Infinite Journeys
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/trending-places"
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Trending Places
            </Link>
            <Link
              href="/digital-membership"
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Digital Membership
            </Link>
            <Link
              href="/about-us"
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Contact
            </Link>
            <ThemeToggle />
            <Button asChild size="sm" variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/register">Register</Link>
            </Button>
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link
                href="/trending-places"
                className="block py-2 font-bold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Trending Places
              </Link>
              <Link
                href="/digital-membership"
                className="block py-2 font-bold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Digital Membership
              </Link>
              <Link
                href="/about-us"
                className="block py-2 font-bold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block py-2 font-bold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button asChild variant="secondary">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

