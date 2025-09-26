import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">7 Eleven Education Consultancy</h3>
            <p className="text-primary-foreground/80 mb-4 text-pretty">
              Your trusted partner for international education. We help Nepali students achieve their dreams of studying
              abroad.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579023196710" target="_blank" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/7eleveneducationconsultancy" target="_blank" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@7eleveneduconsultancy" target="_blank" className="hover:text-secondary transition-colors">
                 <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/services/student-screening" className="hover:text-secondary transition-colors">
                  Student Screening
                </Link>
              </li>
              <li>
                <Link href="/services/career-counseling" className="hover:text-secondary transition-colors">
                  Career Counseling
                </Link>
              </li>
              <li>
                <Link href="/services/scholar-assistance" className="hover:text-secondary transition-colors">
                  Scholar Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/ielts-document-guidance" className="hover:text-secondary transition-colors">
                  IELTS Document Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/sop-guidance" className="hover:text-secondary transition-colors">
                  SOP Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/pre-departure-briefing" className="hover:text-secondary transition-colors">
                  Pre Departure Briefing
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/countries/usa" className="hover:text-secondary transition-colors">
                  USA
                </Link>
              </li>
              <li>
                <Link href="/countries/uk" className="hover:text-secondary transition-colors">
                  UK
                </Link>
              </li>
              <li>
                <Link href="/countries/canada" className="hover:text-secondary transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/countries/australia" className="hover:text-secondary transition-colors">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/countries/new-zealand" className="hover:text-secondary transition-colors">
                  New Zealand
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Suryabinayak Bus Stop,Bhaktapur, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                 +977-1-5929711
              <br />
              +977-9764774577
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@7eleveneduconsultancy.com</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Quick Links</h5>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/blog" className="hover:text-secondary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/tests/ielts" className="hover:text-secondary transition-colors">
                    IELTS Prep
                  </Link>
                </li>
                <li>
                  <Link href="/tests/pte" className="hover:text-secondary transition-colors">
                    PTE Prep
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 7 Eleven Education Consultancy. All rights reserved.</p>
          <p><a href="http://motionage.com/">Made By Motion Age</a></p>
        </div>
      </div>
    </footer>
  )
}
