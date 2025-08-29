import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, CheckCircle, Target, Headphones, PenTool } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IELTSPage() {
  const testSections = [
    {
      icon: Headphones,
      title: "Listening",
      duration: "30 minutes",
      description: "4 sections with 40 questions testing your ability to understand spoken English",
      skills: ["Understanding main ideas", "Specific information", "Speaker attitudes", "Following arguments"],
    },
    {
      icon: BookOpen,
      title: "Reading",
      duration: "60 minutes",
      description: "3 passages with 40 questions testing reading comprehension skills",
      skills: ["Skimming and scanning", "Understanding arguments", "Identifying opinions", "Following logic"],
    },
    {
      icon: PenTool,
      title: "Writing",
      duration: "60 minutes",
      description: "2 tasks testing your ability to write in formal and academic English",
      skills: [
        "Task 1: Describing data/processes",
        "Task 2: Essay writing",
        "Grammar and vocabulary",
        "Coherence and cohesion",
      ],
    },
    {
      icon: Users,
      title: "Speaking",
      duration: "11-14 minutes",
      description: "Face-to-face interview with an examiner in 3 parts",
      skills: ["Personal introduction", "Speaking on a topic", "Discussion and analysis", "Fluency and pronunciation"],
    },
  ]

  const bandScores = [
    { band: "9", level: "Expert User", description: "Full operational command of the language" },
    { band: "8", level: "Very Good User", description: "Fully operational command with occasional inaccuracies" },
    { band: "7", level: "Good User", description: "Operational command with occasional inaccuracies" },
    { band: "6", level: "Competent User", description: "Generally effective command despite inaccuracies" },
    { band: "5", level: "Modest User", description: "Partial command with frequent problems" },
  ]

  const preparationTips = [
    {
      icon: Target,
      title: "Set Clear Goals",
      description: "Identify your target band score and create a study plan accordingly",
    },
    {
      icon: Clock,
      title: "Practice Time Management",
      description: "Familiarize yourself with test timing and practice under exam conditions",
    },
    {
      icon: BookOpen,
      title: "Use Official Materials",
      description: "Practice with Cambridge IELTS books and official preparation materials",
    },
    {
      icon: Users,
      title: "Join Study Groups",
      description: "Practice speaking with others and get feedback on your performance",
    },
  ]

  const courseFeatures = [
    "Expert instructors with IELTS certification",
    "Comprehensive study materials and practice tests",
    "Individual feedback and progress tracking",
    "Flexible class schedules (morning, evening, weekend)",
    "Mock tests under exam conditions",
    "Speaking practice sessions",
    "Writing task correction and feedback",
    "Guaranteed score improvement",
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
                <Badge variant="secondary" className="text-sm">
                  English Proficiency Test
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Most Accepted
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">IELTS Preparation</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Master the International English Language Testing System with our comprehensive preparation program.
                Achieve your target band score and unlock opportunities for study and work abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Enroll in IELTS Course
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Take Free Mock Test
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/students-taking-ielts-exam-preparation.png"
                alt="IELTS exam preparation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">IELTS Test Format</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding the four sections of IELTS and what each tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <Badge variant="outline">{section.duration}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-pretty">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Skills Tested:</h4>
                      <ul className="space-y-1">
                        {section.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-secondary" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Band Scores Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">IELTS Band Scores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding the 9-band scoring system and what each level means
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {bandScores.map((score, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {score.band}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{score.level}</h3>
                      <p className="text-muted-foreground text-pretty">{score.description}</p>
                    </div>
                    <div className="w-32">
                      <Progress value={Number.parseInt(score.band) * 11.11} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Preparation Strategies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven strategies to help you achieve your target IELTS band score
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{tip.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our IELTS Course Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive preparation program designed to maximize your IELTS score
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-pretty">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Course Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the package that best fits your preparation needs and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Badge variant="outline" className="w-fit mx-auto mb-2">
                  Basic
                </Badge>
                <CardTitle className="text-2xl">Foundation Course</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">NPR 15,000</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">4 weeks intensive training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">All 4 skills coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">2 mock tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Study materials included</span>
                  </li>
                </ul>
                <Button className="w-full">Choose Basic</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-secondary">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  Popular
                </Badge>
                <CardTitle className="text-2xl">Premium Course</CardTitle>
                <CardDescription>Most comprehensive package</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">NPR 25,000</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">8 weeks comprehensive training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Individual attention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">5 mock tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Speaking practice sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Score guarantee</span>
                  </li>
                </ul>
                <Button className="w-full">Choose Premium</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Badge variant="outline" className="w-fit mx-auto mb-2">
                  Intensive
                </Badge>
                <CardTitle className="text-2xl">Crash Course</CardTitle>
                <CardDescription>Quick preparation</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">NPR 20,000</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">2 weeks intensive training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Daily 3-hour sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">3 mock tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Exam strategies focus</span>
                  </li>
                </ul>
                <Button className="w-full">Choose Crash</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Ace Your IELTS?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of successful students who achieved their target IELTS scores with our expert guidance. Start
            your preparation journey today and unlock global opportunities.
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
              <Link href="/contact">Download IELTS Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
