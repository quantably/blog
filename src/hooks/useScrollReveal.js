import { useEffect, useRef, useState } from "react"

function getDefaults() {
  if (typeof window === "undefined") return { threshold: 0.15, rootMargin: "0px" }
  const mobile = window.innerWidth <= 768
  return {
    threshold: mobile ? 0.1 : 0.2,
    rootMargin: mobile ? "0px 0px -60px 0px" : "0px 0px -250px 0px",
  }
}

export function useScrollReveal(opts = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const defaults = getDefaults()
    const threshold = opts.threshold ?? defaults.threshold
    const rootMargin = opts.rootMargin ?? defaults.rootMargin

    // Check if already in viewport on mount (avoid flash of invisible content)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [opts.threshold, opts.rootMargin])

  return { ref, isVisible }
}
