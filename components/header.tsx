"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Search, User } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full border-b border-border backdrop-blur-sm ${isScrolled ? "bg-primary shadow-md" : "bg-primary"} transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/fra-logo.png" alt="FRA OnePortal" width={40} height={40} className="rounded-lg" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary-foreground leading-none">FRA OnePortal</span>
              <span className="text-xs text-primary-foreground/80">Ministry of Tribal Affairs</span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center flex-1">
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-primary-foreground transition-colors hover:text-accent">
              Dashboard
            </Link>
            <Link href="/atlas" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent">
              Atlas
            </Link>
            <Link href="/repository" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent">
              Data Repository
            </Link>
            <Link href="/ai-mapping" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent">
              AI Mapping
            </Link>
            <Link href="/dss" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent">
              DSS
            </Link>
            <Link href="/monitoring" className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent">
              Monitoring
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:bg-primary/50 hover:text-accent transition-colors">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/50 hover:text-accent transition-colors">
            <User className="h-4 w-4" />
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Login</Button>
          <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary/50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-primary p-4 md:hidden animate-in fade-in duration-300">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors">
              Dashboard
            </Link>
            <Link href="/atlas" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
              Atlas
            </Link>
            <Link href="/repository" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
              Data Repository
            </Link>
            <Link href="/ai-mapping" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
              AI Mapping
            </Link>
            <Link href="/dss" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
              DSS
            </Link>
            <Link href="/monitoring" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">
              Monitoring
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}