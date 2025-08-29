import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { CountriesSection } from "@/components/countries-section"
import { TestsSection } from "@/components/tests-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Unlock Your Global Education Journey
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                7 Eleven Education Consultancy is your trusted partner in achieving your dreams of studying abroad. We
                provide comprehensive guidance for students from Nepal to pursue higher education in USA, UK, Canada,
                Australia, and New Zealand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="h-96 lg:h-[500px]">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CountriesSection />
      <TestsSection />
      <BlogSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  )
}
