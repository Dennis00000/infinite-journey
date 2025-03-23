"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force client-side rendering for theme provider
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure to prevent layout shift
    return <div className="min-h-screen bg-background text-foreground">{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

