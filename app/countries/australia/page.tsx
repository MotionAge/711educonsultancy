import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, Briefcase, MapPin, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AustraliaPage() {
  const whyStudyAustralia = [
    {
      icon: GraduationCap,
      title: "World-Class Universities",
      description: "Home to 8 universities in the global top 100 with excellent research and teaching standards.",
    },
    {
      icon: Sun,
      title: "Great Lifestyle",
      description: "Beautiful weather, stunning landscapes, and vibrant cities offering excellent quality of life.",
    },
    {
      icon: Briefcase,
      title: "Work Opportunities",
      description: "Post-study work rights and strong job market with competitive salaries across industries.",
    },
    {
      icon: MapPin,
      title: "Safe Environment",
      description: "One of the safest countries in the world with welcoming multicultural communities.",
    },
  ]

  const topUniversities = [
    { name: "Australian National University", location: "Canberra", ranking: "#1" },
    { name: "University of Melbourne", location: "Melbourne", ranking: "#2" },
    { name: "University of Sydney", location: "Sydney", ranking: "#3" },
    { name: "University of New South Wales", location: "Sydney", ranking: "#4" },
    { name: "University of Queensland", location: "Brisbane", ranking: "#5" },
    { name: "Monash University", location: "Melbourne", ranking: "#6" },
  ]

  const popularCourses = [
    "Engineering & Technology",
    "Business & Management",
    "Medicine & Health Sciences",
    "Information Technology",
    "Mining & Resources",
    "Agriculture & Environment",
    "Tourism & Hospitality",
    "Creative Arts & Design",
  ]

  const costs = [
    { category: "Tuition (Undergraduate)", amount: "AUD 25,000 - 40,000/year" },
    { category: "Tuition (Postgraduate)", amount: "AUD 28,000 - 45,000/year" },
    { category: "Living Expenses", amount: "AUD 18,000 - 25,000/year" },
    { category: "Health Insurance (OSHC)", amount: "AUD 500 - 700/year" },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/australia-flag.png" alt="Australia Flag" width={40} height={30} className="rounded" />
                <Badge variant="secondary" className="text-sm">
                  Study Destination
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Study in Australia</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Experience world-class education in the land down under. Australia offers top-ranked universities,
                beautiful landscapes, excellent work opportunities, and a relaxed lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Link href="/contact">Start Your Australia Journey</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/australian-university-campus-with-modern-buildings.png"
                alt="Australian university campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Study in Australia?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of pursuing higher education in Australia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyAustralia.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{reason.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Top Universities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Leading Australian institutions recognized globally for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topUniversities.map((university, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{university.ranking}</Badge>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{university.name}</CardTitle>
                  <CardDescription>{university.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Popular Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              High-demand programs with excellent career prospects in Australia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {popularCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-pretty">{course}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Cost of Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estimated annual expenses for international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {costs.map((cost, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <DollarSign className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <CardTitle className="text-lg">{cost.category}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary">{cost.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Student Visa Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents and requirements for Australian student visa (subclass 500)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Valid passport
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Confirmation of Enrolment (CoE)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Genuine Temporary Entrant (GTE)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Financial capacity evidence
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    English proficiency test
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Work Rights & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Work 40 hours per fortnight
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Post-study work visa (2-4 years)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Skilled migration pathways
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Bring family members
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Access to healthcare
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Study in Australia?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Begin your Australian education adventure with world-class universities and an amazing lifestyle. Our
            experienced team will help you navigate the entire application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get Australia Study Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
