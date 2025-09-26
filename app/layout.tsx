import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import './globals.css'

export const metadata: Metadata = {
  title:
    "7 Eleven Education Consultancy - Study Abroad Experts for Nepali Students",
  description:
    "7 Eleven Education Consultancy guides Nepali students to study abroad in Australia, USA, UK, Canada, and New Zealand. Get expert advice, university selection support, visa guidance, and career counseling for global education opportunities.",
  keywords: [
    "seven eleven",
    "7 eleven",
    "7 eleven nepal",
    "7 eleven education consultancy",
    "7 eleven consultancy",
    "seven eleven education consultancy",
    "7 eleven edu consultancy",
    "study abroad Nepal",
    "education consultancy",
    "education consultancy Nepal",
    "Nepal consultancy",
    "consultancy near me",
    "study in Australia",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in New Zealand",
    "Nepali students overseas",
    "university guidance",
    "visa assistance",
    "career counseling",
  ],
  authors: [{ name: "7 Eleven Education Consultancy" }],
  openGraph: {
    title:
      "7 Eleven Education Consultancy - Study Abroad Experts for Nepali Students",
    description:
      "Professional consultancy helping Nepali students study in top universities across Australia, USA, UK, Canada, and New Zealand. Expert guidance, visa support, and career counseling.",
    url: "https://7eleveneduconsultancy.com/",
    siteName: "7 Eleven Education Consultancy",
    type: "website",
    images: [
      {
        url: "https://7eleveneduconsultancy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "7 Eleven Education Consultancy - Study Abroad Experts",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <TopNav />
      <MainNav />
        {children}
      </body>
    </html>
  )
}
