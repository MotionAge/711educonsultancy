import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, TrendingUp, Users, BookOpen, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareerCounselingPage() {
  const benefits = [
    "Personalized career path guidance",
    "Industry trend analysis and insights",
    "Skills gap identification and development plan",
    "University program recommendations",
    "Job market analysis for target countries",
    "Long-term career planning strategies",
  ]

  const areas = [
    {
      icon: TrendingUp,
      title: "Business & Management",
      description: "MBA, Finance, Marketing, International Business",
    },
    {
      icon: BookOpen,
      title: "Engineering & Technology",
      description: "Computer Science, Mechanical, Civil, Electrical Engineering",
    },
    {
      icon: Heart,
      title: "Healthcare & Medicine",
      description: "Medicine, Nursing, Pharmacy, Public Health",
    },
    {
      icon: Users,
      title: "Social Sciences",
      description: "Psychology, Sociology, International Relations",
    },
    {
      icon: Target,
      title: "Arts & Design",
      description: "Fine Arts, Graphic Design, Architecture, Media Studies",
    },
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                Career Counseling Service
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert guidance to help you choose the right career path and academic program that aligns with your
                interests, skills, and future aspirations in the global job market.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Career Planning
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/career-counselor-meeting-with-student.png"
                alt="Career counseling session"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Why Choose Our Career Counseling
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive career guidance tailored to your unique profile and global opportunities
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

      {/* Career Areas Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Career Areas We Cover</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert guidance across diverse fields of study and career paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Shape Your Future Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Get personalized career guidance from our experienced counselors and make informed decisions about your
            academic and professional future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Counseling Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
