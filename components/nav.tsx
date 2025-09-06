'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X, Linkedin, Github, Twitter, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

function SocialLinks({ size = 'md' as 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <a href="https://www.linkedin.com/company/akoroc" aria-label="LinkedIn" className="hover:text-white" target="_blank" rel="noreferrer"><Linkedin className={cls} /></a>
      <a href="https://github.com/akoroc" aria-label="GitHub" className="hover:text-white" target="_blank" rel="noreferrer"><Github className={cls} /></a>
      <a href="https://twitter.com/akoroc" aria-label="Twitter/X" className="hover:text-white" target="_blank" rel="noreferrer"><Twitter className={cls} /></a>
      <a href="https://facebook.com/akoroc" aria-label="Facebook" className="hover:text-white" target="_blank" rel="noreferrer"><Facebook className={cls} /></a>
    </div>
  )
}

export default function SiteNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const [activeHash, setActiveHash] = React.useState<string>('')

  // Close mobile drawer on route change
  React.useEffect(() => setOpen(false), [pathname])

  // Track active section via IntersectionObserver
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const ids = ['services','about','process']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as Element[]
    if (els.length === 0) return

    const handler = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
      if (visible[0]) {
        const id = '#' + (visible[0].target as HTMLElement).id
        setActiveHash(id)
      }
    }

    const io = new IntersectionObserver(handler, {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })
    els.forEach(el => io.observe(el))
    if (window.location.hash) setActiveHash(window.location.hash)

    return () => { io.disconnect() }
  }, [])

  const linkCls = (href: string) =>
    'hover:text-white ' + (activeHash === href ? 'text-white underline underline-offset-4' : '')

  // Active section chip next to brand on home
  const labels: Record<string, string> = {
    '/#services': 'Services',
    '/#about': 'About',
    '/#process': 'Process',
  }
  const currentPath =
    typeof window !== 'undefined' && window.location
      ? window.location.pathname
      : (pathname || '')
  const isHome = currentPath === '/'
  const activeLabel = labels[activeHash as keyof typeof labels]

  return (
    <header className="fixed top-0 z-40 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500">
            <span className="text-sm font-bold tracking-wider">AK</span>
          </Link>
          <Link href="/" className="text-lg font-semibold tracking-tight">Akoroc</Link>
          {isHome && activeLabel && (
            <span className="ml-2 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200">
              {activeLabel}
            </span>
          )}
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="/#services" className={linkCls('/#services')}>Services</a>
          <a href="/#about" className={linkCls('/#about')}>About</a>
          <a href="/#process" className={linkCls('/#process')}>Process</a>
          <Link href="/services" className="hover:text-white">All Services</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-95">
            Let’s Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800/60 bg-slate-900 text-slate-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer: move classes to wrapper div to avoid TS complaints on motion.div */}
      <div className="overflow-hidden border-t border-slate-800/60 md:hidden bg-slate-950">
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            <a href="/#services" onClick={() => setOpen(false)} className={`block ${activeHash === "/#services" ? "text-white underline underline-offset-4" : "text-slate-200"}`}>Services</a>
            <a href="/#about" onClick={() => setOpen(false)} className={`block ${activeHash === "/#about" ? "text-white underline underline-offset-4" : "text-slate-200"}`}>About</a>
            <a href="/#process" onClick={() => setOpen(false)} className={`block ${activeHash === "/#process" ? "text-white underline underline-offset-4" : "text-slate-200"}`}>Process</a>
            <Link href="/services" onClick={() => setOpen(false)} className="block text-slate-200">All Services</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block text-slate-200">Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block text-slate-200">Contact</Link>
            <div className="flex items-center gap-3 pt-2">
              <SocialLinks size="sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500">
                <span className="text-sm font-bold tracking-wider">AK</span>
              </Link>
              <Link href="/" className="text-lg font-semibold tracking-tight">Akoroc</Link>
            </div>
            <p className="mt-3 text-sm text-slate-300/90">Vancouver, BC · Seattle, WA</p>
            <a className="mt-2 block text-sm text-indigo-300 hover:text-indigo-200" href="mailto:hello@akoroc.com">hello@akoroc.com</a>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
              <li><a href="/#about" className="hover:text-white">About</a></li>
              <li><a href="/#services" className="hover:text-white">Services</a></li>
              <li><a href="/#process" className="hover:text-white">Process</a></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
              <li><Link href="/services/custom-software" className="hover:text-white">Software Development</Link></li>
              <li><Link href="/services/web-mobile" className="hover:text-white">Web & Mobile</Link></li>
              <li><Link href="/services/seo-marketing" className="hover:text-white">SEO & Marketing</Link></li>
              <li><Link href="/services/ai-ml" className="hover:text-white">AI & ML</Link></li>
              <li><Link href="/services/cloud" className="hover:text-white">Cloud & DevOps</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-white">Data & Analytics</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Social</div>
            <div className="mt-3"><SocialLinks /></div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800/60 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Akoroc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
