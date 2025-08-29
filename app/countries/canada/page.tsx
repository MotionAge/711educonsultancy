import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, Briefcase, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CanadaPage() {
  const whyStudyCanada = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "Globally recognized degrees from top-ranked universities with excellent research facilities.",
    },
    {
      icon: Heart,
      title: "Welcoming Society",
      description: "Multicultural and inclusive environment with friendly people and high quality of life.",
    },
    {
      icon: Briefcase,
      title: "Immigration Pathways",
      description: "Clear pathways to permanent residence through various immigration programs.",
    },
    {
      icon: DollarSign,
      title: "Affordable Education",
      description: "Lower tuition fees compared to USA and UK with excellent value for money.",
    },
  ]

  const topUniversities = [
    { name: "University of Toronto", location: "Ontario", ranking: "#1" },
    { name: "University of British Columbia", location: "British Columbia", ranking: "#2" },
    { name: "McGill University", location: "Quebec", ranking: "#3" },
    { name: "University of Alberta", location: "Alberta", ranking: "#4" },
    { name: "McMaster University", location: "Ontario", ranking: "#5" },
    { name: "University of Waterloo", location: "Ontario", ranking: "#6" },
  ]

  const popularCourses = [
    "Computer Science & IT",
    "Business Administration",
    "Engineering",
    "Healthcare & Medicine",
    "Natural Resources",
    "Hospitality & Tourism",
    "Environmental Studies",
    "Applied Sciences",
  ]

  const costs = [
    { category: "Tuition (Undergraduate)", amount: "CAD 20,000 - 30,000/year" },
    { category: "Tuition (Postgraduate)", amount: "CAD 25,000 - 40,000/year" },
    { category: "Living Expenses", amount: "CAD 12,000 - 18,000/year" },
    { category: "Health Insurance", amount: "CAD 600 - 1,200/year" },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/canada-flag.png" alt="Canada Flag" width={40} height={30} className="rounded" />
                <Badge variant="secondary" className="text-sm">
                  Study Destination
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Study in Canada</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Experience world-class education in one of the world's most welcoming countries. Canada offers
                affordable tuition, excellent quality of life, and clear pathways to permanent residence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                 <Link href="/contact">Start Your Canada Journey</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/canadian-university-campus-with-maple-trees.png"
                alt="Canadian university campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Study in Canada?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of pursuing higher education in Canada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyCanada.map((reason, index) => {
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
              Leading Canadian institutions known for academic excellence and research
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
              High-demand programs with excellent career prospects in Canada
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Study Permit Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents and requirements for Canadian study permit
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
                    Letter of acceptance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Proof of financial support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Language proficiency test
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Medical exam (if required)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Immigration Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Post-graduation work permit
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Canadian Experience Class
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Provincial Nominee Program
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Express Entry system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Permanent residence pathway
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Study in Canada?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Start your journey to quality Canadian education and a bright future. Our expert team will guide you through
            every step of the application and immigration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get Canada Application Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
