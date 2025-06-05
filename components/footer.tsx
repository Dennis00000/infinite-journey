"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Plane } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                <Plane className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-foreground">Infinite Journeys</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">Discover the world, one journey at a time.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-foreground">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations/italy" className="text-muted-foreground hover:text-primary font-bold">
                  Italy
                </Link>
              </li>
              <li>
                <Link href="/destinations/spain" className="text-muted-foreground hover:text-primary font-bold">
                  Spain
                </Link>
              </li>
              <li>
                <Link href="/destinations/australia" className="text-muted-foreground hover:text-primary font-bold">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/destinations/japan" className="text-muted-foreground hover:text-primary font-bold">
                  Japan
                </Link>
              </li>
              <li>
                <Link href="/destinations/france" className="text-muted-foreground hover:text-primary font-bold">
                  France
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-2 font-bold">Subscribe for travel tips and offers.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 text-foreground"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-3 py-2 text-sm rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-muted-foreground font-bold">
          <p>© {currentYear} All Rights Reserved. Infinite Journeys</p>
        </div>
      </div>
    </footer>
  )
}

