import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, GraduationCap, FileText, PenTool, Plane } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Student Screening",
    description:
      "Comprehensive evaluation of academic background and career goals to match you with the perfect study destination.",
    href: "/services/student-screening",
  },
  {
    icon: Heart,
    title: "Career Counseling",
    description:
      "Expert guidance to help you choose the right career path and academic program for your future success.",
    href: "/services/career-counseling",
  },
  {
    icon: GraduationCap,
    title: "Scholar Assistance",
    description:
      "Support in finding and applying for scholarships to make your international education more affordable.",
    href: "/services/scholar-assistance",
  },
  {
    icon: FileText,
    title: "IELTS Document Guidance",
    description: "Complete assistance with IELTS preparation and documentation requirements for your applications.",
    href: "/services/ielts-document-guidance",
  },
  {
    icon: PenTool,
    title: "SOP Guidance",
    description: "Professional help in crafting compelling Statement of Purpose that showcases your unique story.",
    href: "/services/sop-guidance",
  },
  {
    icon: Plane,
    title: "Pre Departure Briefing",
    description: "Essential information and preparation for your journey abroad, ensuring a smooth transition.",
    href: "/services/pre-departure-briefing",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">What Do We Offer?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive services designed to guide you through every step of your international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-pretty">{service.description}</CardDescription>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
