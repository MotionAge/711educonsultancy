import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Plane, Home, CreditCard, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PreDepartureBriefingPage() {
  const services = [
    "Visa and immigration guidance",
    "Travel arrangements and booking",
    "Accommodation setup assistance",
    "Banking and financial planning",
    "Health insurance and medical prep",
    "Cultural orientation and tips",
  ]

  const topics = [
    {
      icon: Shield,
      title: "Visa & Immigration",
      description: "Final visa checks, entry requirements, and immigration procedures",
      details: [
        "Visa validity and conditions",
        "Entry documentation",
        "Immigration interview tips",
        "Port of entry procedures",
      ],
    },
    {
      icon: Plane,
      title: "Travel Arrangements",
      description: "Flight booking, baggage rules, and travel insurance",
      details: [
        "Flight booking assistance",
        "Baggage allowance and restrictions",
        "Travel insurance options",
        "Airport procedures",
      ],
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Housing options, dormitory rules, and local area information",
      details: [
        "On-campus vs off-campus housing",
        "Lease agreements and deposits",
        "Roommate arrangements",
        "Local area orientation",
      ],
    },
    {
      icon: CreditCard,
      title: "Banking & Finance",
      description: "Bank account setup, money transfer, and budgeting tips",
      details: [
        "International bank account opening",
        "Money transfer options",
        "Credit card and debit card usage",
        "Monthly budgeting tips",
      ],
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "Health insurance, medical records, and safety guidelines",
      details: [
        "Health insurance requirements",
        "Medical record preparation",
        "Emergency contact information",
        "Campus safety guidelines",
      ],
    },
    {
      icon: Users,
      title: "Cultural Adaptation",
      description: "Cultural norms, social etiquette, and integration tips",
      details: [
        "Cultural differences and norms",
        "Social interaction guidelines",
        "Academic culture adaptation",
        "Community integration tips",
      ],
    },
  ]

  const checklist = [
    "Valid passport and visa documents",
    "University acceptance letter and I-20/CAS",
    "Financial documents and bank statements",
    "Health insurance and medical records",
    "Academic transcripts and certificates",
    "Emergency contact information",
    "Travel insurance and flight tickets",
    "Accommodation confirmation documents",
  ]

  return (
    <div className="min-h-screen">
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Pre-Departure Briefing</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Comprehensive preparation for your journey abroad. Our pre-departure briefing ensures you're fully
                prepared for life in your new country with essential information, practical tips, and ongoing support.
              </p>
              <Button size="lg" className="text-lg px-8">
                Book Your Briefing
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/student-with-luggage-at-airport-departure.png"
                alt="Student departure preparation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">What We Cover</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive preparation covering all aspects of your international journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-pretty">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Briefing Topics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Briefing Topics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Detailed coverage of essential topics for your successful transition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription className="text-pretty">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Covered Topics:</h4>
                      <ul className="space-y-1">
                        {topic.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pre-Departure Checklist Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Pre-Departure Checklist</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents and items to prepare before your departure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {checklist.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-pretty text-sm">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready for Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Ensure a smooth transition to your new life abroad with our comprehensive pre-departure briefing. Get the
            confidence and knowledge you need for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Briefing Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get Departure Checklist</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
