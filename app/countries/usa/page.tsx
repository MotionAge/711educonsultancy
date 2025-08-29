import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, Briefcase, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function USAPage() {
  const whyStudyUSA = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description:
        "Home to top-ranked universities like Harvard, MIT, and Stanford with cutting-edge research facilities.",
    },
    {
      icon: Users,
      title: "Diverse Culture",
      description:
        "Experience multicultural environment with students from around the world and extensive networking opportunities.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Access to internships, OPT programs, and job opportunities in the world's largest economy.",
    },
    {
      icon: MapPin,
      title: "Innovation Hub",
      description: "Study in the birthplace of major tech companies and startups with access to Silicon Valley.",
    },
  ]

  const topUniversities = [
    { name: "Harvard University", location: "Massachusetts", ranking: "#1" },
    { name: "Stanford University", location: "California", ranking: "#2" },
    { name: "MIT", location: "Massachusetts", ranking: "#3" },
    { name: "University of California, Berkeley", location: "California", ranking: "#4" },
    { name: "Yale University", location: "Connecticut", ranking: "#5" },
    { name: "Princeton University", location: "New Jersey", ranking: "#6" },
  ]

  const popularCourses = [
    "Computer Science & Engineering",
    "Business Administration (MBA)",
    "Medicine & Healthcare",
    "Data Science & Analytics",
    "Mechanical Engineering",
    "Finance & Economics",
    "Psychology",
    "International Relations",
  ]

  const costs = [
    { category: "Tuition (Public Universities)", amount: "$25,000 - $35,000/year" },
    { category: "Tuition (Private Universities)", amount: "$35,000 - $60,000/year" },
    { category: "Living Expenses", amount: "$12,000 - $18,000/year" },
    { category: "Health Insurance", amount: "$1,500 - $3,000/year" },
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
                <Image src="/usa-flag.png" alt="USA Flag" width={40} height={30} className="rounded" />
                <Badge variant="secondary" className="text-sm">
                  Study Destination
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Study in USA</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Pursue your American dream with world-class education, diverse opportunities, and access to the global
                job market. The USA offers unparalleled academic excellence and career prospects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your USA Journey
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Download USA Guide
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/american-university-campus-with-students.png"
                alt="American university campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in USA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Study in USA?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of pursuing higher education in the United States
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyUSA.map((reason, index) => {
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
              World-renowned institutions offering exceptional education and research opportunities
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
              High-demand programs with excellent career prospects
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Visa Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents and requirements for F-1 student visa
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
                    Form I-20 from university
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    SEVIS fee payment receipt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Financial documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Academic transcripts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Work Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    On-campus work (20 hrs/week)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    CPT during studies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    OPT after graduation (12 months)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    STEM OPT extension (24 months)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    H-1B visa pathway
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Study in USA?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Take the first step towards your American education journey. Our expert counselors will guide you through
            every step of the application process.
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
              <Link href="/contact">Get USA Application Checklist</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
