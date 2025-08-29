import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, Briefcase, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UKPage() {
  const whyStudyUK = [
    {
      icon: GraduationCap,
      title: "Historic Excellence",
      description:
        "Home to Oxford, Cambridge, and other prestigious institutions with centuries of academic tradition.",
    },
    {
      icon: Clock,
      title: "Shorter Duration",
      description: "Complete your degree faster with 3-year bachelor's and 1-year master's programs.",
    },
    {
      icon: Briefcase,
      title: "Work Opportunities",
      description: "Graduate visa allows 2-3 years of work experience after completing your studies.",
    },
    {
      icon: MapPin,
      title: "Gateway to Europe",
      description: "Easy access to European countries and rich cultural heritage with global connections.",
    },
  ]

  const topUniversities = [
    { name: "University of Oxford", location: "Oxford", ranking: "#1" },
    { name: "University of Cambridge", location: "Cambridge", ranking: "#2" },
    { name: "Imperial College London", location: "London", ranking: "#3" },
    { name: "London School of Economics", location: "London", ranking: "#4" },
    { name: "University College London", location: "London", ranking: "#5" },
    { name: "University of Edinburgh", location: "Edinburgh", ranking: "#6" },
  ]

  const popularCourses = [
    "Business & Management",
    "Engineering & Technology",
    "Medicine & Life Sciences",
    "Law & Legal Studies",
    "Arts & Humanities",
    "Computer Science",
    "Economics & Finance",
    "International Relations",
  ]

  const costs = [
    { category: "Tuition (Undergraduate)", amount: "£15,000 - £25,000/year" },
    { category: "Tuition (Postgraduate)", amount: "£16,000 - £30,000/year" },
    { category: "Living Expenses", amount: "£12,000 - £15,000/year" },
    { category: "Health Surcharge", amount: "£470/year" },
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
                <Image src="/uk-flag.png" alt="UK Flag" width={40} height={30} className="rounded" />
                <Badge variant="secondary" className="text-sm">
                  Study Destination
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Study in UK</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Experience world-class education in the birthplace of the English language. The UK offers prestigious
                universities, shorter degree programs, and excellent post-study work opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your UK Journey
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Download UK Guide
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/british-university-campus-with-historic-buildings.png"
                alt="British university campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in UK */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Study in UK?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of pursuing higher education in the United Kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyUK.map((reason, index) => {
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
              Prestigious institutions with centuries of academic excellence
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Student Visa Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents and requirements for UK Student visa
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
                    CAS from university
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Financial evidence
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    English language certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Academic qualifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Graduate Visa Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>2 years for bachelor's/master's
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>3 years for PhD graduates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Work in any job or sector
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Switch to skilled worker visa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Pathway to permanent residence
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Study in UK?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Begin your journey to world-class British education. Our experienced counselors will help you navigate the
            application process and secure your place at top UK universities.
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
              <Link href="/contact">Get UK Application Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
