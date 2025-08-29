import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

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

  const officeLocations = [
    {
      name: "Main Office",
      address: "Putalisadak, Kathmandu, Nepal",
      phone: "+977-1-4567890",
      email: "info@7eleveneducation.com",
      hours: "Sunday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      name: "Branch Office",
      address: "New Baneshwor, Kathmandu, Nepal",
      phone: "+977-1-4567891",
      email: "branch@7eleveneducation.com",
      hours: "Sunday - Friday: 10:00 AM - 5:00 PM",
    },
  ]

  return (
    <div className="min-h-screen">
      <TopNav />
      <MainNav />

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

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Visit Our Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We have multiple locations to serve you better. Visit us for in-person consultations and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground">{office.email}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Find Us on Map</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Kathmandu, we're easily accessible by public transport
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-96 bg-muted/50 rounded-lg overflow-hidden">
                  <Image
                    src="/kathmandu-office-location-map.png"
                    alt="7 Eleven Education Office Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
                      <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <h3 className="font-semibold text-primary mb-1">7 Eleven Education</h3>
                      <p className="text-sm text-muted-foreground">Putalisadak, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
