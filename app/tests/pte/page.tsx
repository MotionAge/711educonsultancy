import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, Award, CheckCircle, Target, Headphones, Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PTEPage() {
  const testSections = [
    {
      icon: Users,
      title: "Speaking & Writing",
      duration: "77-93 minutes",
      description: "Integrated tasks testing speaking and writing skills together",
      tasks: [
        "Personal introduction",
        "Read aloud",
        "Repeat sentence",
        "Describe image",
        "Re-tell lecture",
        "Answer short questions",
        "Summarize written text",
        "Essay writing",
      ],
    },
    {
      icon: BookOpen,
      title: "Reading",
      duration: "32-41 minutes",
      description: "Various question types testing reading comprehension",
      tasks: [
        "Multiple choice (single)",
        "Multiple choice (multiple)",
        "Re-order paragraphs",
        "Fill in the blanks",
        "Reading & writing fill blanks",
      ],
    },
    {
      icon: Headphones,
      title: "Listening",
      duration: "45-57 minutes",
      description: "Audio and video clips with various question formats",
      tasks: [
        "Summarize spoken text",
        "Multiple choice",
        "Fill the blanks",
        "Highlight correct summary",
        "Select missing word",
        "Highlight incorrect words",
        "Write from dictation",
      ],
    },
  ]

  const scoreRanges = [
    {
      range: "85-90",
      level: "Superior",
      description: "Highly proficient in all language skills",
      color: "bg-green-500",
    },
    { range: "76-84", level: "Proficient", description: "Good command of the language", color: "bg-blue-500" },
    {
      range: "59-75",
      level: "Competent",
      description: "Adequate language skills for most purposes",
      color: "bg-yellow-500",
    },
    { range: "43-58", level: "Modest", description: "Limited but effective language skills", color: "bg-orange-500" },
    {
      range: "30-42",
      level: "Limited",
      description: "Basic language skills with frequent problems",
      color: "bg-red-500",
    },
  ]

  const preparationStrategies = [
    {
      icon: Target,
      title: "Understand the Format",
      description: "Familiarize yourself with PTE's unique computer-based format and question types",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Practice with strict timing as PTE is entirely computer-based with no breaks",
    },
    {
      icon: Mic,
      title: "Speaking Practice",
      description: "Practice speaking clearly into a microphone with proper pronunciation",
    },
    {
      icon: BookOpen,
      title: "Integrated Skills",
      description: "Focus on tasks that combine multiple skills like listening and writing",
    },
  ]

  const courseHighlights = [
    "AI-powered practice platform access",
    "Computer-based mock tests",
    "Speaking fluency development",
    "Pronunciation training with feedback",
    "Template-based writing strategies",
    "Listening skills enhancement",
    "Reading speed improvement techniques",
    "Score prediction and analysis",
  ]

  const pteBenefits = [
    {
      title: "Fast Results",
      description: "Get your scores within 48 hours of taking the test",
    },
    {
      title: "Computer-Based",
      description: "Entirely computer-based test with no human bias in scoring",
    },
    {
      title: "Flexible Scheduling",
      description: "Available throughout the year with frequent test dates",
    },
    {
      title: "Widely Accepted",
      description: "Accepted by thousands of universities and governments worldwide",
    },
  ]

  return (
    <div className="min-h-screen">

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
                  Computer-Based
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                PTE Academic Preparation
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Master the Pearson Test of English Academic with our specialized preparation program. Achieve your
                target score with our computer-based training and AI-powered practice platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Enroll in PTE Course
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://cdn.pixabay.com/photo/2024/01/18/10/37/letter-tiles-8516698_1280.jpg"
                alt="PTE computer-based exam"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PTE Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Why Choose PTE Academic?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the advantages of PTE Academic for your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pteBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">PTE Test Format</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding the three main sections of PTE Academic
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      <h4 className="font-semibold text-sm">Task Types:</h4>
                      <ul className="space-y-1">
                        {section.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {task}
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

      {/* Scoring System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">PTE Scoring System</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              PTE uses a scale of 10-90 points with detailed proficiency levels
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {scoreRanges.map((score, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 ${score.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}
                    >
                      {score.range}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{score.level}</h3>
                      <p className="text-muted-foreground text-pretty">{score.description}</p>
                    </div>
                    <div className="w-32">
                      <Progress value={(Number.parseInt(score.range.split("-")[1]) / 90) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Strategies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Preparation Strategies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Effective strategies specifically designed for PTE Academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationStrategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{strategy.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">PTE Course Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courseHighlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-pretty">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Master PTE Academic?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Join our specialized PTE preparation program and achieve your target score with our computer-based training
            and expert guidance. Fast results, flexible scheduling, and proven success strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
             <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
