import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyCard } from "@/components/property-card"

export default function DigitalMembershipPage() {
  const countries = ["America", "Japan", "Germany", "France", "Indonesia", "Netherlands", "Saudi Arabia"]

  const roomsData = {
    America: [
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
      {
        title: "Mountain Retreat in Colorado",
        location: "Luxury Cabin in Aspen",
        price: "€380",
        amenities: ["Wifi", "Kitchen", "Heater", "Gym"],
        guests: 6,
        link: "/listings/mountain-retreat-colorado",
      },
      {
        title: "Historic Townhouse in Boston",
        location: "Heritage Property in Boston",
        price: "€320",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 4,
        link: "/listings/historic-townhouse-boston",
      },
    ],
    Japan: [
      {
        title: "Traditional Ryokan Experience",
        location: "Historic District in Kyoto",
        price: "€280",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 2,
        link: "/listings/traditional-ryokan-kyoto",
      },
      {
        title: "Modern Apartment in Tokyo",
        location: "Shibuya District in Tokyo",
        price: "€320",
        amenities: ["Wifi", "Kitchen", "Heater", "Gym"],
        guests: 3,
        link: "/listings/modern-apartment-tokyo",
      },
      {
        title: "Seaside Villa in Okinawa",
        location: "Beachfront in Okinawa",
        price: "€450",
        amenities: ["Wifi", "Kitchen", "Pool"],
        guests: 4,
        link: "/listings/seaside-villa-okinawa",
      },
      {
        title: "Mountain View Cabin in Hokkaido",
        location: "Niseko in Hokkaido",
        price: "€380",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 6,
        link: "/listings/mountain-cabin-hokkaido",
      },
      {
        title: "Historic Machiya in Kanazawa",
        location: "Cultural District in Kanazawa",
        price: "€300",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 4,
        link: "/listings/historic-machiya-kanazawa",
      },
    ],
    Germany: [
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
      {
        title: "Historic Townhouse in Dresden",
        location: "Old Town in Dresden",
        price: "€170",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 5,
        link: "/listings/historic-townhouse-dresden",
      },
      {
        title: "Wine Country Villa in Rhine Valley",
        location: "Rhine Valley",
        price: "€250",
        amenities: ["Wifi", "Kitchen", "Heater", "Pool"],
        guests: 6,
        link: "/listings/wine-country-villa-rhine",
      },
    ],
    France: [
      {
        title: "Parisian Apartment with Eiffel View",
        location: "7th Arrondissement in Paris",
        price: "€280",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 2,
        link: "/listings/parisian-apartment-eiffel",
      },
      {
        title: "Provence Countryside Villa",
        location: "Luberon in Provence",
        price: "€320",
        amenities: ["Wifi", "Kitchen", "Pool"],
        guests: 6,
        link: "/listings/provence-countryside-villa",
      },
      {
        title: "Côte d'Azur Beachfront Property",
        location: "Nice in French Riviera",
        price: "€450",
        amenities: ["Wifi", "Kitchen", "Pool", "Gym"],
        guests: 4,
        link: "/listings/cote-dazur-beachfront",
      },
      {
        title: "Alpine Chalet in Chamonix",
        location: "Mont Blanc in Chamonix",
        price: "€380",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 8,
        link: "/listings/alpine-chalet-chamonix",
      },
      {
        title: "Historic Apartment in Lyon",
        location: "Old Town in Lyon",
        price: "€220",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 3,
        link: "/listings/historic-apartment-lyon",
      },
    ],
    Indonesia: [
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
      {
        title: "Overwater Villa in Raja Ampat",
        location: "Raja Ampat Islands",
        price: "€350",
        amenities: ["Wifi", "Air Condition"],
        guests: 2,
        link: "/listings/overwater-villa-raja-ampat",
      },
      {
        title: "Modern Apartment in Jakarta",
        location: "Central Jakarta",
        price: "€150",
        amenities: ["Wifi", "Kitchen", "Air Condition", "Gym"],
        guests: 3,
        link: "/listings/modern-apartment-jakarta",
      },
    ],
    Netherlands: [
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
      {
        title: "Beach House in The Hague",
        location: "Scheveningen in The Hague",
        price: "€210",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 6,
        link: "/listings/beach-house-the-hague",
      },
      {
        title: "Countryside Cottage in Utrecht",
        location: "Outskirts of Utrecht",
        price: "€170",
        amenities: ["Wifi", "Kitchen", "Heater"],
        guests: 3,
        link: "/listings/countryside-cottage-utrecht",
      },
    ],
    "Saudi Arabia": [
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
        title: "Modern Residence in Al Khobar",
        location: "Corniche in Al Khobar",
        price: "€280",
        amenities: ["Wifi", "Kitchen", "Air Condition", "Gym"],
        guests: 4,
        link: "/listings/modern-residence-al-khobar",
      },
      {
        title: "Desert Retreat near AlUla",
        location: "AlUla",
        price: "€380",
        amenities: ["Wifi", "Kitchen", "Air Condition"],
        guests: 2,
        link: "/listings/desert-retreat-alula",
      },
      {
        title: "Mountain View Villa in Taif",
        location: "Taif",
        price: "€300",
        amenities: ["Wifi", "Kitchen", "Air Condition", "Pool"],
        guests: 5,
        link: "/listings/mountain-view-villa-taif",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue={countries[0]} className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
          {countries.map((country) => (
            <TabsTrigger key={country} value={country} className="px-4 py-2">
              {country}
            </TabsTrigger>
          ))}
        </TabsList>

        {countries.map((country) => (
          <TabsContent key={country} value={country} className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomsData[country].map((room, index) => (
                <PropertyCard
                  key={index}
                  title={room.title}
                  location={room.location}
                  price={room.price}
                  amenities={room.amenities}
                  guests={room.guests}
                  link={room.link}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

