import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: "complete-guide-studying-usa",
    title: "Complete Guide to Studying in the USA: Everything You Need to Know",
    excerpt:
      "From choosing the right university to visa applications, this comprehensive guide covers everything Nepali students need to know about studying in the United States.",
    author: "Dr. Rajesh Sharma",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Study Abroad",
    image: "/american-university-campus-with-diverse-students.png",
    featured: true,
  }

  const blogPosts = [
    {
      id: "ielts-vs-pte-comparison",
      title: "IELTS vs PTE: Which English Test Should You Choose?",
      excerpt:
        "A detailed comparison of IELTS and PTE Academic tests to help you decide which one is better for your study abroad goals.",
      author: "Priya Thapa",
      date: "2025-01-12",
      readTime: "8 min read",
      category: "Test Preparation",
      image: "/students-taking-english-proficiency-test.png",
    },
    // {
    //   id: "student-visa-application-tips",
    //   title: "10 Essential Tips for a Successful Student Visa Application",
    //   excerpt:
    //     "Learn the insider secrets to increase your chances of getting your student visa approved on the first try.",
    //   author: "Amit Gurung",
    //   date: "2025-01-10",
    //   readTime: "6 min read",
    //   category: "Visa Guidance",
    //   image: "/student-visa-application-process.png",
    // },
    {
      id: "/scholarship-opportunities-nepali-students",
      title: "Top Scholarship Opportunities for Nepali Students in 2025",
      excerpt:
        "Discover the best scholarship programs available for Nepali students planning to study abroad this year.",
      author: "Sita Rai",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "Scholarships",
      image: "/graduation-cap-with-scholarship-certificate.png",
    },
    {
      id: "#",
      title: "Canada Study Permit: Step-by-Step Application Guide",
      excerpt:
        "Everything you need to know about applying for a Canadian study permit, including required documents and processing times.",
      author: "Binod Shrestha",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Study Abroad",
      image: "/canada-flag-with-modern-university-campus.png",
    },
    // {
    //   id: "sop-writing-masterclass",
    //   title: "SOP Writing Masterclass: How to Write a Winning Statement",
    //   excerpt:
    //     "Master the art of writing compelling Statements of Purpose that get you accepted into your dream university.",
    //   author: "Dr. Rajesh Sharma",
    //   date: "2025-01-03",
    //   readTime: "11 min read",
    //   category: "Application Tips",
    //   image: "/student-writing-sop-statement.png",
    // },
    // {
    //   id: "uk-universities-ranking-2025",
    //   title: "Top UK Universities for International Students in 2025",
    //   excerpt:
    //     "Explore the best UK universities that welcome international students with excellent programs and support services.",
    //   author: "Meera Poudel",
    //   date: "2025-01-01",
    //   readTime: "7 min read",
    //   category: "Study Abroad",
    //   image: "/uk-university-international-students.png",
    // },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Education Insights & Guidance
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Stay updated with the latest information about studying abroad, test preparation, visa guidance, and more.
              Expert insights to help you make informed decisions about your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Featured Article
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Latest Insights</h2>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-balance">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-8">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-balance">
                        <Link href={`/blog/${post.id}`} className="hover:text-secondary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
