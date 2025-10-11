"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCallback } from "react"

export default function FloatingBird() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { innerWidth, innerHeight } = window
      const relX = e.clientX / innerWidth - 0.5
      const relY = e.clientY / innerHeight - 0.5
      // inverse movement (float opposite to cursor)
      x.set(-relX * 200)
      y.set(-relY * 120)
    },
    [x, y]
  )

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <iframe
          title="White Necked Jacobin ♂ (Hummingbird)"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          width="260"
          height="200"
          className="pointer-events-none"
          src="https://sketchfab.com/models/65f886012a344b3da1c1d54f65441eae/embed?autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"
        />
      </motion.div>
    </div>
  )
}
