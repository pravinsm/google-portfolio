import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pravin Portfolio",
  description:
    "Interactive portfolio website inspired by Google Search, showcasing Pravin Sampathraj Manack Chand's projects, experience, and skills.",
  keywords: "Pravin Sampathraj Manack Chand, Portfolio, Software Engineer, React, Next.js, Full Stack Developer",
  authors: [{ name: "Pravin Sampathraj Manack Chand" }],
  creator: "Pravin Sampathraj Manack Chand",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
