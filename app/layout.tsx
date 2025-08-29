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
    "study abroad Nepal",
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
    url: "https://7eleveneducationconsultancy.vercel.app/",
    siteName: "7 Eleven Education Consultancy",
    type: "website",
    images: [
      {
        url: "https://7eleveneducationconsultancy.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "7 Eleven Education Consultancy - Study Abroad Experts",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "7 Eleven Education Consultancy - Study Abroad Experts",
  //   description:
  //     "Guiding Nepali students to study abroad in Australia, USA, UK, Canada, and New Zealand. Get expert university and visa guidance.",
  //   images: ["https://yourwebsite.com/og-image.png"],
  //   creator: "@7ElevenEdu",
  // },
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
