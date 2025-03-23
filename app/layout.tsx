import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Infinite Journeys - Travel Beyond Boundaries",
  description:
    "Discover unique destinations and accommodations around the world with Infinite Journeys. Find your perfect getaway and experience authentic travel.",
  keywords: "travel, destinations, accommodations, vacation, tourism, adventure, global travel",
  authors: [{ name: "Infinite Journeys Team" }],
  robots: "index, follow",
    generator: 'v0.dev'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
