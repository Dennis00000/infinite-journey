import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountryCard } from "@/components/country-card"
import { FeaturedDestination } from "@/components/featured-destination"
import { SearchForm } from "@/components/search-form"
import { StoryCard } from "@/components/story-card"
import { Testimonials } from "@/components/ui/testimonials"
import { Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl animate-fade-in-up">
            Journey Beyond Boundaries: Start Here
          </h1>
          <SearchForm />
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedDestination title="Wanderlust: Begin Your Journey to Italy" link="/destinations/italy" />
            <FeaturedDestination
              title="Your Passport to Global Adventures: Experience Spain"
              link="/destinations/spain"
            />
            <FeaturedDestination
              title="Discover Your Next Adventure: Explore Australia"
              link="/destinations/australia"
            />
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">Countries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <CountryCard name="America" price="€300" />
            <CountryCard name="Japan" price="€500" />
            <CountryCard name="Germany" price="€150" />
            <CountryCard name="France" price="€200" />
            <CountryCard name="Indonesia" price="€250" />
            <CountryCard name="Netherlands" price="€170" />
            <CountryCard name="Saudi Arabia" price="€400" />
            <CountryCard name="Mexico" price="€250" />
          </div>
        </div>
      </section>

      {/* Trending Places */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">Trending Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/destinations/japan" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-red-500/80 to-white/80">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Globe className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white">Japan</h3>
                </div>
              </div>
            </Link>
            <Link href="/destinations/spain" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-500/80 to-red-500/80">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Globe className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white">Spain</h3>
                </div>
              </div>
            </Link>
            <Link href="/destinations/france" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400/80 to-red-500/80">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Globe className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white">France</h3>
                </div>
              </div>
            </Link>
            <Link href="/destinations/america" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/80 to-red-500/80">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Globe className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white">America</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Unique Accommodations Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-20 container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-on-scroll">
              Explore Unique rooms on our platform.
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-on-scroll">
              Find your perfect getaway and experience the world like a local.
            </p>
            <Button size="lg" className="animate-on-scroll">
              More info
            </Button>
          </div>
        </div>
      </section>

      {/* Travellers Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">Travellers Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StoryCard title="Wanderlust: Begin Your Journey to Italy" link="/stories/italy" />
            <StoryCard title="Your Passport to Global Adventures: Experience Spain" link="/stories/spain" />
            <StoryCard title="Discover Your Next Adventure: Explore Australia" link="/stories/australia" />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using new Testimonials component */}
      <Testimonials />
    </div>
  )
}

