import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">100+ Options</h1>
      <h2 className="text-2xl font-bold mb-6">Recommendations...</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Select Filters</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="apartment" />
                      <Label htmlFor="apartment">Apartment</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="suites" />
                      <Label htmlFor="suites">Suites</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="flat" />
                      <Label htmlFor="flat">Flat</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="villa" />
                      <Label htmlFor="villa">Villa</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ac" />
                      <Label htmlFor="ac">Air Condition</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi">Wifi</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gym" />
                      <Label htmlFor="gym">Gym</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pool" />
                      <Label htmlFor="pool">Pool</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="kitchen" />
                      <Label htmlFor="kitchen">Kitchen</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="heater" />
                      <Label htmlFor="heater">Heater</Label>
                    </div>
                    <span className="text-muted-foreground">(0)</span>
                  </div>
                </div>
              </div>

              <Button className="w-full">View More</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PropertyCard
              title="Luxury Queen Room With Street View"
              location="Private Villa in New York"
              image="/placeholder.svg?height=400&width=600"
              price="€250"
              amenities={["Wifi", "Kitchen", "Heater"]}
              guests={2}
              link="/listings/luxury-queen-room-new-york"
            />
            <PropertyCard
              title="Deluxe Queen Room With Street View"
              location="Private Villa in Japan"
              image="/placeholder.svg?height=400&width=600"
              price="€150"
              amenities={["Wifi", "Kitchen"]}
              guests={2}
              link="/listings/deluxe-queen-room-japan"
            />
            <PropertyCard
              title="Deluxe Queen Room With Street View"
              location="Private Villa in Indonesia"
              image="/placeholder.svg?height=400&width=600"
              price="€100"
              amenities={["Wifi", "Kitchen", "Air Condition"]}
              guests={2}
              link="/listings/deluxe-queen-room-indonesia"
            />
            <PropertyCard
              title="Premium Queen Room With Ocean View"
              location="Private Villa in Bali"
              image="/placeholder.svg?height=400&width=600"
              price="€180"
              amenities={["Wifi", "Kitchen", "Pool"]}
              guests={2}
              link="/listings/premium-queen-room-bali"
            />
          </div>

          <div className="flex justify-center mt-10">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="default" size="icon" className="rounded-full">
                1
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                2
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                3
              </Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="icon" className="rounded-full">
                10
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

