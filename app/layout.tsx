import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Suspense } from "react"
import OverflowDebugger from "@/components/overflow-debug"

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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="overflow-x-hidden">
          <Header />
          <Suspense fallback={null}>
            {children}
            <OverflowDebugger />
          </Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
