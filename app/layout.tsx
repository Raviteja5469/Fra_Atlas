import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Suspense } from "react"
import OverflowDebugger from "@/components/overflow-debug"
import Script from "next/script"
import FloatingChatbot from "@/components/floating-chatbot"

export const metadata: Metadata = {
  title: "FRA OnePortal",
  description: "FRA OnePortal — AI-powered WebGIS and Decision Support for the Forest Rights Act",
  generator: "v0.app",
  icons: [{ rel: "icon", url: "/fra-logo.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="overflow-x-hidden pt-16">
          <Header />
          <Suspense fallback={null}>
            {children}
            <OverflowDebugger />
          </Suspense>
        </div>
        <FloatingChatbot />
        <Analytics />
      </body>
    </html>
  )
}
