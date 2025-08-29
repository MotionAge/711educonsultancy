import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, CheckCircle } from "lucide-react"
import { MapSection } from "@/components/map-section"

export default function ContactPage() {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Our experienced team has helped over 1000+ students achieve their study abroad dreams",
    },
    {
      icon: Award,
      title: "Proven Success Rate",
      description: "95% visa approval rate with personalized guidance and comprehensive support",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "From university selection to visa approval, we're with you every step of the way",
    },
  ]


  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Let's Start Your Study Abroad Journey
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Ready to take the next step towards your international education goals? Our expert counselors are here to
              guide you through every step of the process. Get in touch today for personalized advice and support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Why Choose 7 Eleven Education?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to making your study abroad dreams a reality with our comprehensive support and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the application process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The application process typically takes 3-6 months, depending on the country and university. We
                  recommend starting at least 12 months before your intended start date to ensure ample time for
                  preparation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide scholarship assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we help identify and apply for various scholarship opportunities including merit-based,
                  need-based, and country-specific scholarships. Our team will guide you through the entire scholarship
                  application process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is your visa success rate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain a 95% visa approval rate through our comprehensive preparation process, document
                  verification, and interview coaching. Our experienced team ensures your application meets all
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer test preparation courses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer comprehensive IELTS and PTE preparation courses with experienced instructors, practice
                  materials, and mock tests to help you achieve your target scores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
