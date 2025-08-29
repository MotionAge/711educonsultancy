"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Student Screening", href: "/services/student-screening" },
    { name: "Career Counseling", href: "/services/career-counseling" },
    { name: "Scholar Assistance", href: "/services/scholar-assistance" },
    { name: "IELTS Document Guidance", href: "/services/ielts-document-guidance" },
    { name: "SOP Guidance", href: "/services/sop-guidance" },
    { name: "Pre Departure Briefing", href: "/services/pre-departure-briefing" },
  ]

  const countries = [
    { name: "USA", href: "/countries/usa" },
    { name: "UK", href: "/countries/uk" },
    { name: "Canada", href: "/countries/canada" },
    { name: "Australia", href: "/countries/australia" },
    { name: "New Zealand", href: "/countries/new-zealand" },
  ]

  const tests = [
    { name: "IELTS", href: "/tests/ielts" },
    { name: "PTE", href: "/tests/pte" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">7 Eleven Education</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Study Abroad <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {countries.map((country) => (
                  <DropdownMenuItem key={country.name} asChild>
                    <Link href={country.href}>{country.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Tests <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {tests.map((test) => (
                  <DropdownMenuItem key={test.name} asChild>
                    <Link href={test.href}>{test.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div>
                <div className="font-semibold text-primary mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-1 pl-4 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">Study Abroad</div>
                {countries.map((country) => (
                  <Link
                    key={country.name}
                    href={country.href}
                    className="block py-1 pl-4 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-semibold text-primary mb-2">Tests</div>
                {tests.map((test) => (
                  <Link
                    key={test.name}
                    href={test.href}
                    className="block py-1 pl-4 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {test.name}
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
