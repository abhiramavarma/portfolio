import { motion, useScroll, useTransform } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

export default function Background() {
  const { scrollYProgress } = useScroll()
  // Parallax motion values (different speeds per layer)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80])
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 160])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {/* Spline background (lazy-loaded). Hidden on small screens for perf */}
      <div className="absolute inset-0 hidden md:block">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full opacity-30 dark:opacity-25"
          onLoad={(app: any) => {
            try {
              // Try to find head by common names or by scanning scene graph
              let head = app.findObjectByName?.('Head') || app.findObjectByName?.('head')
              if (!head && app?.scene?.children) {
                const stack = [...app.scene.children]
                while (stack.length && !head) {
                  const node = stack.pop()
                  if (!node) break
                  if (typeof node.name === 'string' && /head/i.test(node.name)) {
                    head = node
                    break
                  }
                  if (node.children?.length) stack.push(...node.children)
                }
              }
              if (!head) return
              const maxYaw = 0.8 // radians left/right (increased)
              const maxPitch = 0.45 // radians up/down (increased)
              let rafId = 0
              let targetX = 0
              let targetY = 0
              const onMove = (e: MouseEvent) => {
                const nx = e.clientX / window.innerWidth
                const ny = e.clientY / window.innerHeight
                targetX = (nx - 0.5) * 2
                targetY = (ny - 0.5) * 2
                if (!rafId) rafId = requestAnimationFrame(tick)
              }
              const tick = () => {
                rafId = 0
                // Faster smoothing
                head.rotation.y += ((targetX * maxYaw) - head.rotation.y) * 0.25
                head.rotation.x += ((targetY * maxPitch) - head.rotation.x) * 0.25
              }
              window.addEventListener('mousemove', onMove)
              // Cleanup if component unmounts (defensive)
              return () => {
                window.removeEventListener('mousemove', onMove)
                if (rafId) cancelAnimationFrame(rafId)
              }
            } catch {}
          }}
        />
      </div>
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-black/40 dark:fill-white/30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 size-[40vmax] rounded-full"
          style={{ y: ySlow, background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.45), transparent 55%)', filter: 'blur(40px)', transform: 'translateZ(0)', willChange: 'transform' }}
          initial={{ x: -40, scale: 1 }}
          animate={{ x: 30, scale: 1.05 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] size-[45vmax] rounded-full"
          style={{ y: yFast, background: 'radial-gradient(circle at 70% 70%, rgba(34,197,94,0.35), transparent 55%)', filter: 'blur(42px)', transform: 'translateZ(0)', willChange: 'transform' }}
          initial={{ x: 20, scale: 1 }}
          animate={{ x: -25, scale: 1.06 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 size-[30vmax] rounded-full"
          style={{ y: yMedium, background: 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.28), transparent 60%)', filter: 'blur(35px)', transform: 'translateZ(0)', willChange: 'transform' }}
          initial={{ x: 0, scale: 1 }}
          animate={{ x: 15, scale: 1.04 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </div>

      {/* Film grain via SVG fractal noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.08] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 [background:radial-gradient(80%_60%_at_center,transparent,rgba(0,0,0,0.08))] dark:[background:radial-gradient(80%_60%_at_center,transparent,rgba(0,0,0,0.35))]" />
    </div>
  )
}


