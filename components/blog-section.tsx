import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "Top 10 Universities in USA for International Students",
    description:
      "Discover the best American universities that welcome international students with excellent programs and support systems.",
    image: "/american-university-campus-with-diverse-students.png",
    date: "2024-01-15",
    href: "/blog/top-universities-usa",
  },
  {
    title: "IELTS vs PTE: Which Test Should You Choose?",
    description:
      "A comprehensive comparison of IELTS and PTE tests to help you make the right choice for your study abroad journey.",
    image: "/students-taking-english-proficiency-test.png",
    date: "2024-01-10",
    href: "/blog/ielts-vs-pte",
  },
  {
    title: "Scholarship Opportunities for Nepali Students",
    description: "Explore various scholarship programs available for Nepali students planning to study abroad.",
    image: "/graduation-cap-with-scholarship-certificate.png",
    date: "2024-01-05",
    href: "/blog/scholarships-nepali-students",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Latest Insights & Tips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with the latest trends, tips, and opportunities in international education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-xl mb-3 text-balance">{post.title}</CardTitle>
                <CardDescription className="mb-4 text-pretty">{post.description}</CardDescription>
                <Button asChild variant="outline" className="group bg-transparent">
                  <Link href={post.href}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
