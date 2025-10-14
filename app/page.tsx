"use client"

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react"
// Image from next/image is replaced with standard <img> to resolve build errors
// import Image from "next/image" 
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IndiaMap } from "@/components/india-map"
import { RecentUpdates } from "@/components/recent-updates"
import { StateSelector } from "@/components/state-selector"
import { StatCard } from "@/components/stat-card"
import { FileText, Map, Database, Brain, BarChart3, Users, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

// NOTE: Component imports are used from `components/` (real components imported above).

export default function HomePage() {
  // framer-motion Variants typing can be strict about easing types; use `any` here to avoid TS noise
  const childVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/Forest.png"
        bgImageSrc="/Forest2.png"
        title="FRA OnePortal"
        scrollToExpand="Scroll to Explore"
        textBlend={true}
      >
        <div className="container relative text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.div
              variants={childVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/20 px-4 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white">AI-Powered Geo-Insights Platform</span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="mb-6 text-white text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Empowering Forest Rights with AI & GIS
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mb-8 text-white text-pretty text-lg text-muted-foreground md:text-xl"
            >
              Streamlining Forest Rights Act implementation with advanced AI, remote sensing, and WebGIS technology.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Discover Atlas
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent hover:text-accent-foreground">
                Access DSS
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </ScrollExpandMedia>

      {/* Stats Section */}
      <section className="container px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total FRA Claims"
            value="122,124"
            subtitle="Digitized across 4 states"
            icon={FileText}
            trend={{ value: "12.5%", positive: true }}
            className="bg-card border-border hover:shadow-[0_0_10px_var(--ring)] transition-shadow"
          />
          <StatCard
            title="Titles Granted"
            value="89,456"
            subtitle="IFR, CFR, and CR combined"
            icon={Map}
            trend={{ value: "8.3%", positive: true }}
            className="bg-card border-border hover:shadow-[0_0_10px_var(--ring)] transition-shadow"
          />
          <StatCard
            title="Villages Mapped"
            value="3,847"
            subtitle="With complete GIS data"
            icon={Database}
            trend={{ value: "15.2%", positive: true }}
            className="bg-card border-border hover:shadow-[0_0_10px_var(--ring)] transition-shadow"
          />
          <StatCard
            title="Total FRA Area"
            value="6.1M ha"
            subtitle="Across all claim types"
            icon={BarChart3}
            trend={{ value: "5.7%", positive: true }}
            className="bg-card border-border hover:shadow-[0_0_10px_var(--ring)] transition-shadow"
          />
        </div>
      </section>

      {/* States Section */}
      <section className="container px-4 py-8">
        <StateSelector />
      </section>

      {/* Interactive Map */}
      <section className="container px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Geo-Insights Map</h2>
          <p className="text-muted-foreground">Explore FRA data by hovering over states</p>
        </div>
        

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map column: create a sized relative container so the actual map can be positioned absolutely inside it */}
          <div className="lg:col-span-2">
            <div className="relative min-h-[60vh] lg:min-h-[72vh] w-full">
              {/* <div className="absolute inset-0 w-full h-full"> */}
                {/* IndiaMap will fill the absolute area */}
                <IndiaMap />
              {/* </div> */}
            </div>
          </div>

          {/* Sidebar: sticky RecentUpdates that can scroll within the same visual height as the map */}
          <div className="lg:col-span-1">
            <div className="sticky top-16 self-start">
              <div className="max-h-[60vh] lg:max-h-[72vh] overflow-auto">
                <RecentUpdates />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Modules */}
      <section className="container px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Explore Key Modules</h2>
          <p className="text-muted-foreground">Powerful tools for FRA implementation and monitoring</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ModuleCard
            icon={Map}
            title="FRA Atlas"
            description="Interactive WebGIS with advanced layer controls and geospatial analytics"
            href="/atlas"
          />
          <ModuleCard
            icon={Database}
            title="Data Repository"
            description="Digital archive for FRA records with OCR and AI-powered extraction"
            href="/repository"
          />
          <ModuleCard
            icon={Brain}
            title="AI Asset Mapping"
            description="AI-driven visualization of natural and physical assets from satellite data"
            href="/ai-mapping"
          />
          <ModuleCard
            icon={Sparkles}
            title="Decision Support System"
            description="AI-powered insights for Central Sector Scheme recommendations"
            href="/dss"
          />
          <ModuleCard
            icon={BarChart3}
            title="Monitoring & Progress"
            description="Real-time analytics for tracking FRA implementation nationwide"
            href="/monitoring"
          />
          <ModuleCard
            icon={Users}
            title="Stakeholder Portal"
            description="Collaborative hub for field officers, NGOs, and community engagement"
            href="/feedback"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-white">
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">About FRA OnePortal</h3>
              <p className="text-sm text-white/70">
                A unified platform for digitizing and monitoring Forest Rights Act implementation across India.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">FRA Guidelines</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Training Materials</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Data Standards</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">User Manual</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Ministry of Tribal Affairs</li>
                <li>Government of India</li>
                <li>Email: support@fraatlas.gov.in</li>
                <li>Helpline: 1800-XXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-white/70">
            <p>© 2025 Ministry of Tribal Affairs, Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ===================================================================================
// COMPONENT DEFINITIONS
// ===================================================================================

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image"
  mediaSrc: string
  posterSrc?: string
  bgImageSrc: string
  title?: string
  date?: string
  scrollToExpand?: string
  textBlend?: boolean
  children?: ReactNode
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [showContent, setShowContent] = useState<boolean>(false)
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false)
  const [touchStartY, setTouchStartY] = useState<number>(0)
  const [isMobileState, setIsMobileState] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setScrollProgress(0)
    setShowContent(false)
    setMediaFullyExpanded(false)
  }, [mediaType])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()
        const scrollDelta = e.deltaY * 0.0009
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)
        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }
      }
    }

    

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false)
        e.preventDefault()
      } else if (!mediaFullyExpanded) {
        e.preventDefault()
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005
        const scrollDelta = deltaY * scrollFactor
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)
        if (newProgress >= 1) {
          setMediaFullyExpanded(true)
          setShowContent(true)
        } else if (newProgress < 0.75) {
          setShowContent(false)
        }
        setTouchStartY(touchY)
      }
    }

    const handleTouchEnd = (): void => setTouchStartY(0)
    const handleScroll = (): void => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0)
    }

    window.addEventListener("wheel", handleWheel as unknown as EventListener, { passive: false })
    window.addEventListener("scroll", handleScroll as EventListener)
    window.addEventListener("touchstart", handleTouchStart as unknown as EventListener, { passive: false })
    window.addEventListener("touchmove", handleTouchMove as unknown as EventListener, { passive: false })
    window.addEventListener("touchend", handleTouchEnd as EventListener)

    return () => {
      window.removeEventListener("wheel", handleWheel as unknown as EventListener)
      window.removeEventListener("scroll", handleScroll as EventListener)
      window.removeEventListener("touchstart", handleTouchStart as unknown as EventListener)
      window.removeEventListener("touchmove", handleTouchMove as unknown as EventListener)
      window.removeEventListener("touchend", handleTouchEnd as EventListener)
    }
  }, [scrollProgress, mediaFullyExpanded, touchStartY])

  useEffect(() => {
    const checkIfMobile = (): void => setIsMobileState(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250)
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400)
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150)
  const firstWord = title ? title.split(" ")[0] : ""
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : ""

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div className="absolute inset-0 z-0 h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 - scrollProgress }} transition={{ duration: 0.1 }}>
            <img src={bgImageSrc} alt="Background" className="w-screen h-screen object-cover object-center" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl" style={{ width: `${mediaWidth}px`, height: `${mediaHeight}px`, maxWidth: "95vw", maxHeight: "85vh", boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)" }}>
                {mediaType === "image" ? (
                  <div className="relative w-full h-full">
                    <img src={mediaSrc} alt={title || "Media content"} className="w-full h-full object-cover rounded-xl" />
                    <motion.div className="absolute inset-0 bg-black/50 rounded-xl" initial={{ opacity: 0.7 }} animate={{ opacity: 0.7 - scrollProgress * 0.3 }} transition={{ duration: 0.2 }} />
                  </div>
                ) : (
                  <div>Video Player not implemented in this version</div>
                )}
                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && <p className="text-2xl text-blue-200" style={{ transform: `translateX(-${textTranslateX}vw)` }}>{date}</p>}
                  {scrollToExpand && <p className="text-blue-200 font-medium text-center" style={{ transform: `translateX(${textTranslateX}vw)` }}>{scrollToExpand}</p>}
                </div>
              </div>
              <div className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${textBlend ? "mix-blend-difference" : "mix-blend-normal"}`}>
                <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200 transition-none" style={{ transform: `translateX(-${textTranslateX}vw)` }}>{firstWord}</motion.h2>
                <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-200 transition-none" style={{ transform: `translateX(${textTranslateX}vw)` }}>{restOfTitle}</motion.h2>
                <motion.div
                  className="w-full text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 - scrollProgress }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {children}
                </motion.div>
              </div>
            </div>
            <motion.section
              className="flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              style={{ display: showContent ? 'flex' : 'none' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* This section now correctly holds the content that appears after scroll */}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  )
}

function ModuleCard({
  icon: Icon,
  title,
  description,
  href,
}: { icon: any; title: string; description: string; href: string }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-[0_0_10px_var(--ring)] bg-card border-border">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary">
          <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button variant="ghost" asChild className="group/btn gap-2 p-0 hover:bg-transparent text-primary hover:text-accent">
          <a href={href}>
            <span className="text-sm font-medium">Access Module</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

// Placeholder (removed) — real components are imported from `components/`

