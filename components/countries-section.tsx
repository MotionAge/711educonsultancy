import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const countries = [
  {
    name: "USA",
    description: "World-class universities and diverse academic programs",
    image: "/usa-flag-with-university-buildings.png",
    href: "/study-abroad/usa",
  },
  {
    name: "UK",
    description: "Historic institutions and cutting-edge research opportunities",
    image: "/uk-flag-with-oxford-cambridge-universities.png",
    href: "/study-abroad/uk",
  },
  {
    name: "Canada",
    description: "Affordable education with excellent post-study work opportunities",
    image: "/canada-flag-with-modern-university-campus.png",
    href: "/study-abroad/canada",
  },
  {
    name: "Australia",
    description: "High-quality education in a multicultural environment",
    image: "/australia-flag-with-sydney-university.png",
    href: "/study-abroad/australia",
  },
  {
    name: "New Zealand",
    description: "Innovative programs in stunning natural surroundings",
    image: "/new-zealand-flag-with-university-campus-mountains.png",
    href: "/study-abroad/new-zealand",
  },
]

export function CountriesSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background world map */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/world-map-outline-with-airplane-routes.png" alt="World map" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Your Global Education Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore world-class education opportunities across five premier destinations
          </p>
        </div>

        {/* Airplane path design */}
        {/* <div className="flex justify-center mb-8">
          <div className="relative">
            <Plane className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-6 w-6 text-secondary rotate-90" />
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <Card
              key={index}
              className="bg-transparent border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2 text-primary">{country.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{country.description}</p>
                <Button asChild className="w-full">
                  <Link href={country.href}>Explore {country.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
