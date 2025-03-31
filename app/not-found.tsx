import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/trending-places" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Explore destinations
          </Link>
        </Button>
      </div>
    </div>
  )
}

