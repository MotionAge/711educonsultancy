"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    course: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send message")

      alert("Thank you for your inquiry! We will contact you within 24 hours.")

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        course: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was a problem sending your message. Please try again later.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    value?: string
  ) => {
    if (typeof e === "string" && value !== undefined) {
      setFormData((prev) => ({
        ...prev,
        [e]: value,
      }))
    } else if (typeof e !== "string") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }



  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to start your international education journey? Contact us today for personalized guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Contact Form */}
  <Card>
    <CardHeader>
      <CardTitle>Send us a Message</CardTitle>
      <CardDescription>
        Fill out the form below and we'll get back to you within 24 hours
      </CardDescription>
    </CardHeader>

    <CardContent>
  <form onSubmit={handleSubmit} className="mb-10">
    {/* Name */}
    <div className="mb-6">
      <Label htmlFor="name">Full Name</Label>
      <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />
    </div>

    {/* Email */}
    <div className="mb-6">
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
        required
      />
    </div>

    {/* Phone */}
    <div className="mb-6">
      <Label htmlFor="phone">Phone Number</Label>
      <Input
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+977 9800000000"
        required
      />
    </div>

    {/* Destination */}
    <div className="mb-6">
      <Label htmlFor="destination">Preferred Destination</Label>
      <Select onValueChange={(value) => handleChange("destination", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select destination" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="australia">🇦🇺 Australia</SelectItem>
          <SelectItem value="usa">🇺🇸 United States</SelectItem>
          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
          <SelectItem value="canada">🇨🇦 Canada</SelectItem>
          <SelectItem value="newzealand">🇳🇿 New Zealand</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Course */}
    <div className="mb-6">
      <Label htmlFor="course">Course of Interest</Label>
      <Input
        id="course"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="e.g., Computer Science, Business Administration"
      />
    </div>

    {/* Message */}
    <div className="mb-6">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your study abroad goals and questions..."
        required
      />
    </div>

    {/* Submit */}
    <Button type="submit" className="w-full">
      Send Message
    </Button>
  </form>
</CardContent>

  </Card>

  {/* Contact Information */}
  <div className="space-y-6">
    {/* Address */}
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Office Address</h3>
            <p className="text-muted-foreground">
              Suryabinaiak Bus Stop, Bhaktapur, Nepal
              <br />
              Nepal
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Phone */}
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone Numbers</h3>
            <p className="text-muted-foreground">
              +977-1-5929711
              <br />
              +977-9764774577
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Email */}
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email Address</h3>
            <p className="text-muted-foreground">
              info@7eleveneduconsultancy.com
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Hours */}
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-muted-foreground">
              Sunday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>

      </div>
    </section>
  )
}
