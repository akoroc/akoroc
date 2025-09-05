'use client'
import React from 'react'

export default function TopProgress() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const doc = document.documentElement
      const height = (doc.scrollHeight - window.innerHeight) || 1
      const p = Math.min(1, Math.max(0, scrollTop / height))
      el.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div aria-hidden className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-0.5">
      <div ref={ref} className="origin-left h-full w-full bg-gradient-to-r from-indigo-500 to-sky-500" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
