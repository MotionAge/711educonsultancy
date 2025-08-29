import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, Briefcase, MapPin, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewZealandPage() {
  const whyStudyNZ = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "All 8 universities ranked in top 500 globally with innovative teaching methods and research.",
    },
    {
      icon: Leaf,
      title: "Natural Beauty",
      description:
        "Study in one of the world's most beautiful countries with stunning landscapes and clean environment.",
    },
    {
      icon: Briefcase,
      title: "Work Opportunities",
      description: "Post-study work visa and pathways to permanent residence with growing job market.",
    },
    {
      icon: MapPin,
      title: "Safe & Peaceful",
      description: "One of the safest and most peaceful countries with friendly locals and low crime rates.",
    },
  ]

  const topUniversities = [
    { name: "University of Auckland", location: "Auckland", ranking: "#1" },
    { name: "University of Otago", location: "Dunedin", ranking: "#2" },
    { name: "Victoria University of Wellington", location: "Wellington", ranking: "#3" },
    { name: "University of Canterbury", location: "Christchurch", ranking: "#4" },
    { name: "Massey University", location: "Palmerston North", ranking: "#5" },
    { name: "University of Waikato", location: "Hamilton", ranking: "#6" },
  ]

  const popularCourses = [
    "Agriculture & Forestry",
    "Engineering & Technology",
    "Business & Management",
    "Tourism & Hospitality",
    "Environmental Sciences",
    "Information Technology",
    "Creative Arts & Film",
    "Health Sciences",
  ]

  const costs = [
    { category: "Tuition (Undergraduate)", amount: "NZD 22,000 - 32,000/year" },
    { category: "Tuition (Postgraduate)", amount: "NZD 26,000 - 37,000/year" },
    { category: "Living Expenses", amount: "NZD 15,000 - 20,000/year" },
    { category: "Health Insurance", amount: "NZD 500 - 800/year" },
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
              <div className="flex items-center gap-3 mb-4">
                <Image src="/new-zealand-flag.png" alt="New Zealand Flag" width={40} height={30} className="rounded" />
                <Badge variant="secondary" className="text-sm">
                  Study Destination
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Study in New Zealand</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Experience world-class education in the land of the long white cloud. New Zealand offers quality
                universities, breathtaking natural beauty, and excellent opportunities for international students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your NZ Journey
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Download NZ Guide
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/new-zealand-university-campus-with-mountains.png"
                alt="New Zealand university campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Study in New Zealand?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of pursuing higher education in New Zealand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyNZ.map((reason, index) => {
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
              Leading New Zealand institutions known for innovation and excellence
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
              High-demand programs with excellent career prospects in New Zealand
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
              Essential documents and requirements for New Zealand student visa
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
                    Offer of place from institution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Evidence of funds
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Medical and character certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    English language requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Work & Immigration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Work 20 hours per week
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Post-study work visa (1-3 years)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Skilled migrant category
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Partner and children can join
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Pathway to residence
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Study in New Zealand?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Start your journey to quality education in one of the world's most beautiful countries. Our expert
            counselors will guide you through every step of the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get NZ Study Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
