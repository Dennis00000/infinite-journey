import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { notFound } from "next/navigation"
import { Globe, Check } from "lucide-react"

interface DestinationPageProps {
  params: {
    country: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const normalizedCountry = params.country.toLowerCase()

  const destinations: Record<string, any> = {
    italy: {
      name: "Italy",
      title: "Wanderlust: Begin Your Journey to Italy",
      description:
        "Experience the rich history, stunning architecture, and world-renowned cuisine of Italy. From the ancient ruins of Rome to the romantic canals of Venice, Italy offers a perfect blend of culture, art, and natural beauty.",
      gradient: "from-green-500/80 to-red-500/80",
      highlights: [
        "Explore the ancient ruins of Rome and the Colosseum",
        "Wander through the romantic canals of Venice",
        "Experience the Renaissance art and architecture in Florence",
        "Relax on the stunning Amalfi Coast",
        "Taste authentic Italian cuisine and world-class wines",
      ],
      properties: [
        {
          title: "Luxury Apartment in Rome",
          location: "Historic Center, Rome",
          price: "€200",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/luxury-apartment-rome",
        },
        {
          title: "Canal View Suite in Venice",
          location: "San Marco, Venice",
          price: "€250",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 2,
          link: "/listings/canal-view-suite-venice",
        },
        {
          title: "Tuscan Villa with Pool",
          location: "Countryside, Tuscany",
          price: "€350",
          amenities: ["Wifi", "Kitchen", "Pool", "Heater"],
          guests: 8,
          link: "/listings/tuscan-villa-pool",
        },
      ],
    },
    spain: {
      name: "Spain",
      title: "Your Passport to Global Adventures: Experience Spain",
      description:
        "Immerse yourself in the vibrant culture, stunning architecture, and delicious cuisine of Spain. From the bustling streets of Barcelona to the historic neighborhoods of Madrid, Spain offers a perfect blend of tradition and modernity.",
      gradient: "from-yellow-500/80 to-red-500/80",
      highlights: [
        "Marvel at Gaudí's architectural masterpieces in Barcelona",
        "Explore the historic neighborhoods of Madrid",
        "Relax on the beautiful beaches of Costa del Sol",
        "Experience the flamenco culture in Andalusia",
        "Taste authentic Spanish tapas and paella",
      ],
      properties: [
        {
          title: "Modern Apartment in Barcelona",
          location: "Eixample, Barcelona",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/modern-apartment-barcelona",
        },
        {
          title: "Historic Loft in Madrid",
          location: "Centro, Madrid",
          price: "€160",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 3,
          link: "/listings/historic-loft-madrid",
        },
        {
          title: "Beachfront Villa in Marbella",
          location: "Costa del Sol, Marbella",
          price: "€320",
          amenities: ["Wifi", "Kitchen", "Pool", "Heater"],
          guests: 6,
          link: "/listings/beachfront-villa-marbella",
        },
      ],
    },
    australia: {
      name: "Australia",
      title: "Discover Your Next Adventure: Explore Australia",
      description:
        "Experience the diverse landscapes, unique wildlife, and vibrant cities of Australia. From the iconic Sydney Opera House to the Great Barrier Reef, Australia offers a perfect blend of urban excitement and natural wonders.",
      gradient: "from-blue-500/80 to-yellow-500/80",
      highlights: [
        "Explore the iconic Sydney Opera House and Harbour Bridge",
        "Dive into the Great Barrier Reef",
        "Experience the unique wildlife and nature of the Outback",
        "Visit the vibrant city of Melbourne",
        "Relax on the beautiful beaches of Gold Coast",
      ],
      properties: [
        {
          title: "Harbour View Apartment in Sydney",
          location: "Circular Quay, Sydney",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Air Condition"],
          guests: 3,
          link: "/listings/harbour-view-apartment-sydney",
        },
        {
          title: "Modern Loft in Melbourne",
          location: "CBD, Melbourne",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Air Condition", "Gym"],
          guests: 2,
          link: "/listings/modern-loft-melbourne",
        },
        {
          title: "Beachfront House in Gold Coast",
          location: "Surfers Paradise, Gold Coast",
          price: "€280",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 6,
          link: "/listings/beachfront-house-gold-coast",
        },
      ],
    },
    japan: {
      name: "Japan",
      title: "Experience the Harmony of Tradition and Innovation in Japan",
      description:
        "Discover the perfect blend of ancient traditions and cutting-edge modernity in Japan. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a unique cultural experience unlike anywhere else in the world.",
      gradient: "from-red-500/80 to-white/80",
      highlights: [
        "Explore the vibrant neighborhoods and technology of Tokyo",
        "Visit historic temples and traditional gardens in Kyoto",
        "Experience the natural beauty of Mount Fuji",
        "Relax in traditional hot springs (onsen)",
        "Taste authentic Japanese cuisine from sushi to ramen",
      ],
      properties: [
        {
          title: "Modern Apartment in Tokyo",
          location: "Shibuya, Tokyo",
          price: "€200",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 2,
          link: "/listings/modern-apartment-tokyo",
        },
        {
          title: "Traditional Machiya in Kyoto",
          location: "Gion, Kyoto",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/traditional-machiya-kyoto",
        },
        {
          title: "Mountain View Cabin in Hakone",
          location: "Near Mount Fuji, Hakone",
          price: "€250",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 6,
          link: "/listings/mountain-view-cabin-hakone",
        },
      ],
    },
    france: {
      name: "France",
      title: "Discover the Romance and Elegance of France",
      description:
        "Experience the romance, art, and gastronomy that make France a timeless destination. From the iconic landmarks of Paris to the picturesque villages of Provence, France offers a perfect blend of culture, history, and natural beauty.",
      gradient: "from-blue-400/80 to-red-500/80",
      highlights: [
        "Explore the iconic landmarks of Paris including the Eiffel Tower",
        "Visit world-class museums like the Louvre and Musée d'Orsay",
        "Experience the picturesque villages and lavender fields of Provence",
        "Taste exquisite French cuisine and world-renowned wines",
      ],
      properties: [
        {
          title: "Elegant Apartment in Paris",
          location: "Le Marais, Paris",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 2,
          link: "/listings/elegant-apartment-paris",
        },
        {
          title: "Provence Countryside Villa",
          location: "Luberon, Provence",
          price: "€300",
          amenities: ["Wifi", "Kitchen", "Pool", "Heater"],
          guests: 8,
          link: "/listings/provence-countryside-villa",
        },
        {
          title: "Beachfront Apartment in Nice",
          location: "Promenade des Anglais, Nice",
          price: "€250",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/beachfront-apartment-nice",
        },
      ],
    },
    america: {
      name: "America",
      title: "Explore the Diverse Landscapes of America",
      description:
        "From bustling cities to breathtaking national parks, America offers an incredible variety of experiences. Discover iconic landmarks, diverse cultures, and unforgettable adventures across the United States.",
      gradient: "from-blue-500/80 to-red-500/80",
      highlights: [
        "Experience the energy of New York City and its iconic skyline",
        "Explore the natural wonders of the Grand Canyon and Yellowstone",
        "Enjoy the beaches and entertainment of Miami and Los Angeles",
        "Discover the rich history and culture of Boston and Washington DC",
        "Road trip along the scenic Pacific Coast Highway or Route 66",
      ],
      properties: [
        {
          title: "Luxury Suite with City View",
          location: "Private Villa in New York",
          price: "€350",
          amenities: ["Wifi", "Kitchen", "Heater", "Pool", "Gym"],
          guests: 2,
          link: "/listings/luxury-suite-new-york",
        },
        {
          title: "Modern Apartment in Downtown",
          location: "Exclusive Residence in Chicago",
          price: "€280",
          amenities: ["Wifi", "Kitchen", "Heater", "Gym"],
          guests: 3,
          link: "/listings/modern-apartment-chicago",
        },
        {
          title: "Beachfront Villa in Miami",
          location: "Oceanview Property in Miami",
          price: "€420",
          amenities: ["Wifi", "Kitchen", "Pool", "Gym"],
          guests: 4,
          link: "/listings/beachfront-villa-miami",
        },
      ],
    },
    germany: {
      name: "Germany",
      title: "Discover the Rich Heritage of Germany",
      description:
        "Experience Germany's perfect blend of historic charm and modern innovation. From medieval castles to cutting-edge cities, Germany offers cultural treasures, beautiful landscapes, and world-class cuisine.",
      gradient: "from-black/70 to-yellow-500/80 via-red-500/80",
      highlights: [
        "Explore Berlin's vibrant art scene and historic landmarks",
        "Visit fairytale castles like Neuschwanstein in Bavaria",
        "Experience the world-famous Oktoberfest in Munich",
        "Discover the romantic Rhine Valley with its vineyards and castles",
        "Enjoy the Black Forest's natural beauty and charming villages",
      ],
      properties: [
        {
          title: "Modern Loft in Berlin",
          location: "Kreuzberg District in Berlin",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Heater", "Gym"],
          guests: 2,
          link: "/listings/modern-loft-berlin",
        },
        {
          title: "Bavarian Chalet in Munich",
          location: "Outskirts of Munich",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/bavarian-chalet-munich",
        },
        {
          title: "Riverside Apartment in Hamburg",
          location: "HafenCity in Hamburg",
          price: "€190",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 3,
          link: "/listings/riverside-apartment-hamburg",
        },
      ],
    },
    indonesia: {
      name: "Indonesia",
      title: "Experience the Paradise Islands of Indonesia",
      description:
        "Discover Indonesia's incredible diversity, from pristine beaches to ancient temples. This archipelago of over 17,000 islands offers tropical adventures, rich cultural experiences, and some of the world's best diving.",
      gradient: "from-red-500/80 to-white/80",
      highlights: [
        "Relax on Bali's beautiful beaches and explore its spiritual temples",
        "Discover the ancient Borobudur Temple in Java",
        "Encounter unique wildlife including Komodo dragons",
        "Experience world-class diving in Raja Ampat",
        "Explore the vibrant culture and cuisine of Jakarta",
      ],
      properties: [
        {
          title: "Luxury Villa with Private Pool in Bali",
          location: "Seminyak in Bali",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 4,
          link: "/listings/luxury-villa-bali",
        },
        {
          title: "Beachfront Bungalow in Lombok",
          location: "Kuta in Lombok",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Air Condition"],
          guests: 2,
          link: "/listings/beachfront-bungalow-lombok",
        },
        {
          title: "Jungle Retreat in Ubud",
          location: "Ubud in Bali",
          price: "€200",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 3,
          link: "/listings/jungle-retreat-ubud",
        },
      ],
    },
    netherlands: {
      name: "Netherlands",
      title: "Discover the Charm of the Netherlands",
      description:
        "Experience the Netherlands' perfect blend of historic charm and progressive culture. From Amsterdam's iconic canals to colorful tulip fields, the Netherlands offers picturesque landscapes, world-class museums, and vibrant city life.",
      gradient: "from-orange-500/80 to-blue-500/80 via-white/80",
      highlights: [
        "Explore Amsterdam's historic canals and world-famous museums",
        "Visit the colorful tulip fields of Keukenhof Gardens",
        "Discover traditional Dutch villages like Giethoorn and Zaanse Schans",
        "Experience the innovative architecture of Rotterdam",
        "Enjoy cycling through picturesque countryside and along coastal dunes",
      ],
      properties: [
        {
          title: "Canal House in Amsterdam",
          location: "Jordaan in Amsterdam",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/canal-house-amsterdam",
        },
        {
          title: "Modern Apartment in Rotterdam",
          location: "City Center in Rotterdam",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Heater", "Gym"],
          guests: 2,
          link: "/listings/modern-apartment-rotterdam",
        },
        {
          title: "Historic Windmill Stay in Zaanse Schans",
          location: "Zaanse Schans",
          price: "€250",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 4,
          link: "/listings/historic-windmill-zaanse-schans",
        },
      ],
    },
    "saudi-arabia": {
      name: "Saudi Arabia",
      title: "Discover the Hidden Treasures of Saudi Arabia",
      description:
        "Experience Saudi Arabia's blend of ancient heritage and modern development. From historic sites to futuristic cities, Saudi Arabia offers unique cultural experiences, stunning desert landscapes, and warm hospitality.",
      gradient: "from-green-500/80 to-white/80",
      highlights: [
        "Explore the historic AlUla with its ancient Nabatean tombs",
        "Visit the modern metropolis of Riyadh with its futuristic architecture",
        "Experience the coastal charm of Jeddah and its historic old town",
        "Discover the mountain landscapes and traditional villages of Asir",
        "Witness the spectacular desert landscapes of the Empty Quarter",
      ],
      properties: [
        {
          title: "Luxury Apartment in Riyadh",
          location: "King Abdullah Financial District",
          price: "€320",
          amenities: ["Wifi", "Kitchen", "Air Condition", "Gym"],
          guests: 3,
          link: "/listings/luxury-apartment-riyadh",
        },
        {
          title: "Beachfront Villa in Jeddah",
          location: "Corniche in Jeddah",
          price: "€450",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 6,
          link: "/listings/beachfront-villa-jeddah",
        },
        {
          title: "Desert Retreat near AlUla",
          location: "AlUla",
          price: "€380",
          amenities: ["Wifi", "Kitchen", "Air Condition"],
          guests: 2,
          link: "/listings/desert-retreat-alula",
        },
      ],
    },
    mexico: {
      name: "Mexico",
      title: "Experience the Vibrant Culture of Mexico",
      description:
        "Discover Mexico's rich blend of ancient civilizations and colorful traditions. From pristine beaches to archaeological wonders, Mexico offers incredible cuisine, warm hospitality, and diverse landscapes to explore.",
      gradient: "from-green-500/80 to-red-500/80 via-white/80",
      highlights: [
        "Explore ancient Mayan ruins like Chichen Itza and Tulum",
        "Relax on the pristine beaches of Cancun and the Riviera Maya",
        "Experience the vibrant culture and cuisine of Mexico City",
        "Discover colonial architecture in cities like San Miguel de Allende",
        "Enjoy the natural beauty of Copper Canyon and cenotes",
      ],
      properties: [
        {
          title: "Beachfront Condo in Cancun",
          location: "Hotel Zone, Cancun",
          price: "€220",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 4,
          link: "/listings/beachfront-condo-cancun",
        },
        {
          title: "Colonial Home in Mexico City",
          location: "Roma Norte, Mexico City",
          price: "€180",
          amenities: ["Wifi", "Kitchen", "Heater"],
          guests: 6,
          link: "/listings/colonial-home-mexico-city",
        },
        {
          title: "Luxury Villa in Tulum",
          location: "Beachfront, Tulum",
          price: "€350",
          amenities: ["Wifi", "Kitchen", "Pool", "Air Condition"],
          guests: 8,
          link: "/listings/luxury-villa-tulum",
        },
      ],
    },
  }

  // Handle special case for "Saudi Arabia" with space
  if (normalizedCountry === "saudi-arabia" || normalizedCountry === "saudi arabia") {
    const destination = destinations["saudi-arabia"]
    return renderDestinationPage(destination)
  }

  // Find the destination data
  const destination = destinations[normalizedCountry]

  // If destination not found, return 404
  if (!destination) {
    notFound()
  }

  return renderDestinationPage(destination)

  // Helper function to render the destination page
  function renderDestinationPage(destination: any) {
    return (
      <div className="flex min-h-screen flex-col">
        <section
          className={`relative h-[50vh] w-full overflow-hidden bg-gradient-to-br ${destination.gradient || "from-primary/80 to-primary/60"}`}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl animate-fade-in-up">
              {destination.title}
            </h1>
            <p className="text-xl text-white max-w-2xl animate-fade-in-up font-semibold">{destination.description}</p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">Highlights of {destination.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="animate-on-scroll">
                <ul className="space-y-4">
                  {destination.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p>{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animate-on-scroll bg-gradient-to-br ${destination.gradient || "from-primary/60 to-primary/80"} flex items-center justify-center`}
              >
                <Globe className="h-24 w-24 text-white/80" />
              </div>
            </div>

            <div className="text-center mb-12 animate-on-scroll">
              <Button size="lg" asChild>
                <Link href={`/destinations/${normalizedCountry}/tours`}>Explore Tours & Activities</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-on-scroll">
              Featured Accommodations in {destination.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {destination.properties.map((property: any, index: number) => (
                <PropertyCard
                  key={index}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  amenities={property.amenities}
                  guests={property.guests}
                  link={property.link}
                />
              ))}
            </div>

            <div className="text-center animate-on-scroll">
              <Button variant="outline" size="lg" asChild>
                <Link href={`/destinations/${normalizedCountry}/accommodations`}>View All Accommodations</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Experience {destination.name}?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-muted-foreground animate-on-scroll">
              Join our community of travelers and discover the best of {destination.name} with exclusive deals and
              personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button size="lg" asChild>
                <Link href="/digital-membership">Join Membership</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

