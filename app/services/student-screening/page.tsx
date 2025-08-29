import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StudentScreeningPage() {
  const benefits = [
    "Comprehensive academic background evaluation",
    "Career goal alignment assessment",
    "Personalized study destination recommendations",
    "Academic strength and weakness analysis",
    "Future career prospects evaluation",
    "Financial planning guidance",
  ]

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meet with our expert counselors to discuss your academic background and career aspirations.",
    },
    {
      step: 2,
      title: "Document Review",
      description: "Comprehensive review of your academic transcripts, certificates, and achievements.",
    },
    {
      step: 3,
      title: "Skills Assessment",
      description: "Evaluate your strengths, interests, and aptitude for different fields of study.",
    },
    {
      step: 4,
      title: "Destination Matching",
      description: "Match your profile with the best-suited countries and universities.",
    },
    {
      step: 5,
      title: "Detailed Report",
      description: "Receive a comprehensive report with personalized recommendations and next steps.",
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                Student Screening Service
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our comprehensive student screening service evaluates your academic background, career goals, and
                personal preferences to match you with the perfect study destination and program.
              </p>
              <Button size="lg" className="text-lg px-8">
              <Link href="/contact"> Book Your Screening</Link>
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student screening consultation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our student screening service provides a thorough evaluation of your profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-pretty">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A systematic approach to understanding your profile and matching you with the right opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Take the first step towards your international education journey with our comprehensive student screening
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
