import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts = {
  "complete-guide-studying-usa": {
    title: "Complete Guide to Studying in the USA: Everything You Need to Know",
    excerpt:
      "From choosing the right university to visa applications, this comprehensive guide covers everything Nepali students need to know about studying in the United States.",
    content: `
      <p>The United States remains one of the most popular destinations for international students, and for good reason. With world-renowned universities, diverse academic programs, and excellent career opportunities, the USA offers an unparalleled educational experience.</p>

      <h2>Why Study in the USA?</h2>
      <p>The American education system is known for its flexibility, innovation, and emphasis on practical learning. Here are the key advantages:</p>
      <ul>
        <li>World-class universities and research facilities</li>
        <li>Diverse range of academic programs</li>
        <li>Opportunities for practical training and internships</li>
        <li>Multicultural environment</li>
        <li>Strong alumni networks</li>
      </ul>

      <h2>Choosing the Right University</h2>
      <p>With over 4,000 colleges and universities in the USA, choosing the right one can be overwhelming. Consider these factors:</p>
      
      <h3>Academic Reputation</h3>
      <p>Research university rankings, but remember that the "best" university is the one that fits your specific needs and goals.</p>

      <h3>Location and Climate</h3>
      <p>Consider whether you prefer urban or rural settings, and think about climate preferences.</p>

      <h3>Cost and Financial Aid</h3>
      <p>Tuition fees vary significantly. Public universities are generally less expensive than private ones, especially for in-state students.</p>

      <h2>Application Process</h2>
      <p>The application process typically involves:</p>
      <ol>
        <li>Standardized tests (SAT/ACT for undergraduate, GRE/GMAT for graduate)</li>
        <li>English proficiency tests (TOEFL/IELTS)</li>
        <li>Academic transcripts</li>
        <li>Letters of recommendation</li>
        <li>Statement of Purpose</li>
        <li>Financial documentation</li>
      </ol>

      <h2>Student Visa Process</h2>
      <p>Once accepted, you'll need to apply for an F-1 student visa. The process includes:</p>
      <ul>
        <li>Receiving Form I-20 from your university</li>
        <li>Paying the SEVIS fee</li>
        <li>Completing the DS-160 form</li>
        <li>Scheduling and attending a visa interview</li>
      </ul>

      <h2>Living in the USA</h2>
      <p>Preparing for life in the USA involves understanding the culture, finding accommodation, and managing finances. Most universities offer orientation programs for international students.</p>

      <h2>Conclusion</h2>
      <p>Studying in the USA is a life-changing experience that opens doors to global opportunities. With proper planning and preparation, you can make your American dream a reality.</p>
    `,
    author: "Dr. Rajesh Sharma",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Study Abroad",
    image: "/american-university-campus-with-students.png",
    tags: ["USA", "Study Abroad", "University", "Student Visa"],
  },
  "ielts-vs-pte-comparison": {
    title: "IELTS vs PTE: Which English Test Should You Choose?",
    excerpt:
      "A detailed comparison of IELTS and PTE Academic tests to help you decide which one is better for your study abroad goals.",
    content: `
      <p>Choosing between IELTS and PTE Academic is one of the most important decisions you'll make in your study abroad journey. Both tests assess your English proficiency, but they have different formats, scoring systems, and acceptance rates.</p>

      <h2>Test Format Comparison</h2>
      
      <h3>IELTS Academic</h3>
      <ul>
        <li>Paper-based or computer-based options</li>
        <li>Face-to-face speaking test with an examiner</li>
        <li>4 sections: Listening, Reading, Writing, Speaking</li>
        <li>Total test time: 2 hours 45 minutes</li>
      </ul>

      <h3>PTE Academic</h3>
      <ul>
        <li>Completely computer-based</li>
        <li>AI-powered scoring system</li>
        <li>3 sections: Speaking & Writing, Reading, Listening</li>
        <li>Total test time: 3 hours</li>
      </ul>

      <h2>Scoring System</h2>
      
      <h3>IELTS</h3>
      <p>Uses a 9-band scoring system with half-band increments. Each section is scored individually, and an overall band score is calculated.</p>

      <h3>PTE</h3>
      <p>Uses a scale of 10-90 points. Scores are available within 48 hours of taking the test.</p>

      <h2>Which Test Should You Choose?</h2>
      
      <h3>Choose IELTS if:</h3>
      <ul>
        <li>You prefer human interaction in speaking tests</li>
        <li>You're more comfortable with traditional test formats</li>
        <li>Your target universities specifically require IELTS</li>
        <li>You have more time to wait for results (5-13 days)</li>
      </ul>

      <h3>Choose PTE if:</h3>
      <ul>
        <li>You prefer computer-based testing</li>
        <li>You want faster results (within 48 hours)</li>
        <li>You're comfortable with AI-based scoring</li>
        <li>You need more flexible test dates</li>
      </ul>

      <h2>Preparation Tips</h2>
      <p>Regardless of which test you choose, consistent practice is key to success. Focus on all four skills: reading, writing, listening, and speaking.</p>

      <h2>Conclusion</h2>
      <p>Both IELTS and PTE are excellent tests that serve the same purpose. Your choice should depend on your personal preferences, target universities' requirements, and your comfort level with different test formats.</p>
    `,
    author: "Priya Thapa",
    date: "2025-01-12",
    readTime: "8 min read",
    category: "Test Preparation",
    image: "/students-taking-english-proficiency-test.png",
    tags: ["IELTS", "PTE", "English Test", "Test Preparation"],
  },
}
// This function generates static paths for all the blog posts
export function generateStaticParams() {
  // Generate the dynamic slugs based on blogPosts keys
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get the post based on the slug parameter
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  // If the post does not exist, show a 404 page
  if (!post) {
    notFound();
  }

  // const relatedPosts = [
  //   {
  //     id: "student-visa-application-tips",
  //     title: "10 Essential Tips for a Successful Student Visa Application",
  //     image: "/student-visa-application-process.png",
  //     category: "Visa Guidance",
  //   },
  //   {
  //     id: "scholarship-opportunities-2025",
  //     title: "Top Scholarship Opportunities for Nepali Students in 2025",
  //     image: "/scholarship-celebration-students.png",
  //     category: "Scholarships",
  //   },
  //   {
  //     id: "sop-writing-masterclass",
  //     title: "SOP Writing Masterclass: How to Write a Winning Statement",
  //     image: "/student-writing-sop-statement.png",
  //     category: "Application Tips",
  //   },
  // ]

  return (
    <div className="min-h-screen">

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">{post.title}</h1>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

            <div className="flex items-center gap-4">
              {/* <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button> */}
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Separator className="my-12" />

                {/* Author Bio */}
                <Card className="bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">About {post.author}</h3>
                        <p className="text-muted-foreground text-sm">
                          {post.author} is an experienced education consultant with over 10 years of experience helping
                          students achieve their study abroad dreams. Specializing in US and UK university applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-8">
                {/* Table of Contents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Table of Contents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <a href="#why-study-usa" className="block hover:text-secondary transition-colors">
                        Why Study in the USA?
                      </a>
                      <a href="#choosing-university" className="block hover:text-secondary transition-colors">
                        Choosing the Right University
                      </a>
                      <a href="#application-process" className="block hover:text-secondary transition-colors">
                        Application Process
                      </a>
                      <a href="#visa-process" className="block hover:text-secondary transition-colors">
                        Student Visa Process
                      </a>
                      <a href="#living-usa" className="block hover:text-secondary transition-colors">
                        Living in the USA
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="bg-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Quick Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Start your application process at least 12 months in advance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Research scholarship opportunities early</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Prepare for standardized tests well in advance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Connect with current students and alumni</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Need Personal Guidance?</h3>
                    <p className="text-sm mb-4 opacity-90">Get expert advice tailored to your specific situation</p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
