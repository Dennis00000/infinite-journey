"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full mb-6">
        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return home
          </Link>
        </Button>
      </div>
    </div>
  )
}

