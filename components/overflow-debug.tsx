"use client"

import { useEffect } from "react"

export default function OverflowDebugger() {
  useEffect(() => {
    try {
      const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname.startsWith("127."))
      if (!isLocal) return

      const findOverflowing = () => {
        const w = window.innerWidth
        const els = Array.from(document.querySelectorAll("*")).filter(Boolean) as HTMLElement[]
        const offenders: { el: HTMLElement; r: number; l: number }[] = []
        els.forEach((el) => {
          const rect = el.getBoundingClientRect()
          // ignore invisible elements
          if (rect.width === 0 || rect.height === 0) return
          // consider small tolerances
          if (rect.right > w - 1 || rect.left < -1) {
            offenders.push({ el, r: Math.round(rect.right), l: Math.round(rect.left) })
            // add a visible outline for debugging
            el.style.outline = "3px solid rgba(255,0,0,0.65)"
            el.style.outlineOffset = "-2px"
            el.dataset.__overflowDebugger = `r:${Math.round(rect.right)} l:${Math.round(rect.left)}`
          } else {
            if (el.dataset && el.dataset.__overflowDebugger) {
              el.style.outline = ""
              el.style.outlineOffset = ""
              delete el.dataset.__overflowDebugger
            }
          }
        })

        if (offenders.length) {
          console.warn("OverflowDebugger: found elements outside viewport:", offenders.map(o => ({ tag: o.el.tagName, class: o.el.className, right: o.r, left: o.l })))
        } else {
          console.info("OverflowDebugger: no overflowing elements detected")
        }
      }

      // run once and on resize
      findOverflowing()
      window.addEventListener("resize", findOverflowing)
      // also observe DOM changes briefly
      const obs = new MutationObserver(() => findOverflowing())
      obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true })

      return () => {
        window.removeEventListener("resize", findOverflowing)
        obs.disconnect()
      }
    } catch (e) {
      // swallow errors in debugger helper
      // eslint-disable-next-line no-console
      console.error("OverflowDebugger error", e)
    }
  }, [])

  return null
}
