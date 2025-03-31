import { Button } from "@/components/ui/button"
import { Globe, BookOpen, Heart, Users, Compass, ArrowRight, CheckCircle2 } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Achievements Section */}
      <section className="py-10">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">50k+</p>
              <p className="font-bold">Happy Travelers</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="font-bold">Destinations</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="font-bold">Properties</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">30k+</p>
              <p className="font-bold">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Redesigned */}
      <section className="py-12 relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 py-16 max-w-3xl mx-auto">
          <Globe className="h-16 w-16 text-white/90 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Inspiring Journeys, Unforgettable Experiences
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Discover the beauty of the world, one destination at a time. Our mission is to create authentic travel
            experiences that connect you with local cultures and traditions.
          </p>
          <Button size="lg" variant="secondary" className="group">
            Explore Our Vision
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Our Story Section - Redesigned */}
      <section className="py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground text-lg">
            Founded in 2020, we started with a simple mission: to help travelers discover the world's most beautiful
            destinations and experience them like locals.
          </p>
          <p className="text-muted-foreground">
            What began as a small team of passionate travelers has grown into a global community dedicated to creating
            authentic travel experiences. We believe that travel should be transformative, connecting people with new
            cultures and perspectives.
          </p>
          <Button variant="outline" className="mt-4 group">
            Read Our Full Story
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="md:w-1/2 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="h-24 w-24 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Redesigned */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in authentic travel experiences that connect you with local cultures, traditions, and people.
              Our values guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Authenticity</h3>
                  <p className="text-muted-foreground">
                    We curate genuine experiences that showcase the true essence of each destination.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We promote responsible travel that respects local communities and environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    We foster connections between travelers and locals, creating a global network.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for exceptional quality in every aspect of the travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="group">
              Discover Our Values
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - Redesigned */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our passionate team of travel experts and local guides work tirelessly to curate the best destinations and
              experiences for our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-primary/40" />
                </div>
                <h3 className="font-bold">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">Travel Expert</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="group">
              Meet The Full Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section - Redesigned */}
      <section className="py-16 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12">
          <div className="md:w-2/3">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-white/90 text-lg mb-4">
              Ready to explore the world with us? Sign up today and become part of our global community of travelers.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/90">
                <CheckCircle2 className="h-5 w-5 mr-2 text-white/90" />
                <span>Access exclusive travel deals and packages</span>
              </li>
              <li className="flex items-center text-white/90">
                <CheckCircle2 className="h-5 w-5 mr-2 text-white/90" />
                <span>Connect with fellow travelers and locals</span>
              </li>
              <li className="flex items-center text-white/90">
                <CheckCircle2 className="h-5 w-5 mr-2 text-white/90" />
                <span>Get personalized travel recommendations</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <Button size="lg" variant="secondary" className="group">
              Join Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

