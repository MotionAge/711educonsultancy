import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award } from "lucide-react"
import Link from "next/link"

const tests = [
  {
    icon: BookOpen,
    title: "IELTS",
    description:
      "International English Language Testing System - the world's most popular English proficiency test for higher education and global migration.",
    features: [
      "Academic & General Training",
      "Speaking, Listening, Reading, Writing",
      "Accepted by 11,000+ organizations",
    ],
    href: "/tests/ielts",
  },
  {
    icon: Award,
    title: "PTE",
    description:
      "Pearson Test of English Academic - a computer-based English language test trusted by universities worldwide.",
    features: ["Computer-based testing", "Quick results in 2 business days", "Unbiased automated scoring"],
    href: "/tests/pte",
  },
]

export function TestsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Test Preparation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Master the English proficiency tests required for international study
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tests.map((test, index) => {
            const Icon = test.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{test.title}</CardTitle>
                  <CardDescription className="text-pretty">{test.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {test.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={test.href}>Learn More About {test.title}</Link>
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
