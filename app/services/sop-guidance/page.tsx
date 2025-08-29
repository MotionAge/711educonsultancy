import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Target, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SOPGuidancePage() {
  const services = [
    "Personalized SOP structure and outline",
    "Content development and storytelling",
    "Professional writing and editing",
    "University-specific customization",
    "Multiple revision rounds",
    "Final proofreading and formatting",
  ]

  const components = [
    {
      icon: Target,
      title: "Introduction & Goals",
      description: "Compelling opening that captures attention and clearly states your objectives",
      tips: [
        "Hook the reader from the first sentence",
        "State your academic and career goals",
        "Show passion for your field",
      ],
    },
    {
      icon: Award,
      title: "Academic Background",
      description: "Highlight your educational achievements and relevant coursework",
      tips: [
        "Emphasize relevant academic projects",
        "Mention key achievements and awards",
        "Connect studies to future goals",
      ],
    },
    {
      icon: Users,
      title: "Professional Experience",
      description: "Showcase work experience, internships, and practical skills",
      tips: ["Quantify your achievements", "Show leadership and teamwork", "Relate experience to your field"],
    },
    {
      icon: FileText,
      title: "Why This Program",
      description: "Demonstrate knowledge of the program and university",
      tips: [
        "Research specific faculty and courses",
        "Explain program fit with your goals",
        "Show genuine interest and knowledge",
      ],
    },
  ]

  const process = [
    "Initial consultation and goal setting",
    "Personal story and background analysis",
    "First draft creation and structure",
    "Content review and feedback session",
    "Revision and refinement process",
    "Final editing and formatting",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">SOP Guidance Service</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Craft a compelling Statement of Purpose that showcases your unique story, achievements, and aspirations.
                Our expert writers help you create SOPs that stand out to admission committees.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Writing Your SOP
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/student-writing-statement-of-purpose-laptop.png"
                alt="Writing Statement of Purpose"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our SOP Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive support to create a powerful Statement of Purpose
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

      {/* SOP Components Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Key SOP Components</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Essential elements that make your Statement of Purpose compelling and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component, index) => {
              const Icon = component.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{component.title}</CardTitle>
                    <CardDescription className="text-pretty">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Tips:</h4>
                      <ul className="space-y-1">
                        {component.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {tip}
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Our Writing Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Step-by-step approach to create your perfect Statement of Purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-pretty">{step}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Tell Your Story?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Let our expert writers help you craft a compelling Statement of Purpose that showcases your unique journey
            and gets you noticed by admission committees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get SOP Writing Help
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Free SOP Review</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
