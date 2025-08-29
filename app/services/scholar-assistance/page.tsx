import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ScholarAssistancePage() {
  const services = [
    "Scholarship database access and research",
    "Application strategy and timeline planning",
    "Essay and personal statement guidance",
    "Financial aid application assistance",
    "Merit-based scholarship identification",
    "Need-based aid program guidance",
  ]

  const scholarshipTypes = [
    {
      icon: Award,
      title: "Merit-Based Scholarships",
      description: "Academic excellence, leadership, and achievement-based funding opportunities",
      examples: ["Presidential Scholarships", "Dean's List Awards", "Academic Excellence Grants"],
    },
    {
      icon: Users,
      title: "Need-Based Aid",
      description: "Financial assistance based on family income and financial circumstances",
      examples: ["Federal Pell Grants", "State Need Grants", "Institutional Aid"],
    },
    {
      icon: Search,
      title: "Specialized Scholarships",
      description: "Field-specific and demographic-based scholarship opportunities",
      examples: ["STEM Scholarships", "Minority Scholarships", "Women in Engineering"],
    },
  ]

  const process = [
    "Profile assessment and financial need evaluation",
    "Scholarship database research and matching",
    "Application timeline and strategy development",
    "Essay writing and document preparation support",
    "Application submission and follow-up assistance",
    "Award negotiation and acceptance guidance",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Scholarship Assistance</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Make your international education dreams affordable with our comprehensive scholarship assistance
                service. We help you find and apply for scholarships that match your profile and reduce your study
                costs.
              </p>
              <Button size="lg" className="text-lg px-8">
                Find Scholarships
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/student-receiving-scholarship-award-ceremony.png"
                alt="Scholarship assistance"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our Scholarship Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive support to maximize your scholarship opportunities
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

      {/* Scholarship Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Types of Scholarships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Various funding opportunities to support your international education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-pretty">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {example}
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Step-by-step guidance to maximize your scholarship success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-pretty">{step}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Start Your Scholarship Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Don't let financial constraints hold you back. Let us help you find and secure scholarships to fund your
            international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Scholarship Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
