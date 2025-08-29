import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, BookOpen, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IELTSDocumentGuidancePage() {
  const services = [
    "IELTS test registration assistance",
    "Complete documentation checklist",
    "Score reporting and verification",
    "University submission guidance",
    "Retake strategy and planning",
    "Alternative test recommendations",
  ]

  const modules = [
    {
      icon: BookOpen,
      title: "Reading",
      description: "Academic and general reading comprehension strategies",
      duration: "60 minutes",
      tasks: "3 sections, 40 questions",
    },
    {
      icon: Users,
      title: "Listening",
      description: "Audio comprehension and note-taking techniques",
      duration: "30 minutes",
      tasks: "4 sections, 40 questions",
    },
    {
      icon: FileText,
      title: "Writing",
      description: "Task 1 and Task 2 writing strategies and practice",
      duration: "60 minutes",
      tasks: "2 tasks, 250+ words",
    },
    {
      icon: Users,
      title: "Speaking",
      description: "Face-to-face interview preparation and practice",
      duration: "11-14 minutes",
      tasks: "3 parts, personal topics",
    },
  ]

  const documents = [
    "Valid passport or national ID",
    "IELTS registration confirmation",
    "Test center location and timing details",
    "Score report request forms",
    "University code for direct score sending",
    "Additional score report request forms",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">IELTS Document Guidance</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Complete assistance with IELTS preparation, registration, and documentation requirements. We guide you
                through every step of the IELTS process to ensure you meet all university requirements.
              </p>
              <Button size="lg" className="text-lg px-8">
                Get IELTS Guidance
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/ielts-test-preparation-materials-books.png"
                alt="IELTS preparation materials"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our IELTS Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive support for all aspects of IELTS preparation and documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-pretty">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Modules Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">IELTS Test Modules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding the four components of the IELTS test
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-pretty">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{module.tasks}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Required Documents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential documents you'll need for IELTS registration and score reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-pretty">{document}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Take IELTS?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Get expert guidance on IELTS preparation, registration, and documentation. We'll help you achieve the score
            you need for your dream university.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start IELTS Preparation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
