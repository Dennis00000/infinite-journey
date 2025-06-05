import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Camera, CreditCard, Users, MapPin, Compass } from "lucide-react"

export default function TrendingPlacesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-primary/90 to-primary py-12 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">Trending Places</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in-up">
            Discover the most popular destinations loved by our community
          </p>
        </div>
      </section>

      {/* Why These Destinations Are Trending Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Why These Destinations Are Trending</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Authentic Experiences</h3>
              <p className="text-gray-600 dark:text-gray-300">
                These destinations offer unique cultural immersion and authentic local experiences that today's
                travelers seek. Connect with traditions, cuisines, and lifestyles that differ from your own.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Instagram-Worthy Views</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Picture-perfect landscapes and stunning architecture make these locations perfect for creating lasting
                memories. Capture breathtaking moments that will inspire your friends and followers.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Value for Money</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Many of these destinations offer exceptional experiences at prices that won't break your travel budget.
                Enjoy luxury accommodations, activities, and dining at reasonable costs.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Welcoming Communities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Friendly locals make these destinations stand out. Experience genuine hospitality and meaningful
                connections that transform ordinary trips into extraordinary journeys.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improved transportation options and infrastructure make these destinations easier to reach than ever
                before. Direct flights, improved roads, and better public transit enhance the travel experience.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sustainable Tourism</h3>
              <p className="text-gray-600 dark:text-gray-300">
                These destinations are leading the way in eco-friendly practices and responsible tourism initiatives.
                Travel with peace of mind knowing your visit supports local communities and preserves natural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-on-scroll text-foreground">Ready to Explore?</h2>
          <p className="max-w-3xl mx-auto mb-6 text-muted-foreground animate-on-scroll">
            Join thousands of travelers who have discovered their dream destinations through Infinite Journeys.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="animate-on-scroll" asChild>
              <Link href="/destinations">View All Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" className="animate-on-scroll" asChild>
              <Link href="/digital-membership">Join Membership</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

