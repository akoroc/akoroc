'use client'
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section, Kicker, P } from '@/components/ui'
import { SERVICES } from '@/lib/services'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Hero() {
  
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={container} initial={reduce ? false : "hidden"} animate={reduce ? false : "show"} className="space-y-6">
            <motion.div variants={item}><Kicker>Full‑Spectrum Digital Agency</Kicker></motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Powering the <span className="bg-gradient-to-br from-indigo-400 to-sky-400 bg-clip-text text-transparent">Digital Future</span>
            </motion.h1>
            <motion.div variants={item}>
              <P className="text-lg">
                We design, build, and scale modern products and platforms — from brand to backend. Enterprise discipline for startups and SMBs, craftsmanship for global teams.
              </P>
            </motion.div>
          </motion.div>
          <motion.div initial={reduce ? false : { opacity: 0, scale: 0.96 }} whileInView={reduce ? undefined : { opacity: 1, scale: 1 }} transition={reduce ? undefined : { duration: 0.6 }} className="relative">
            <div className="relative rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SERVICES.slice(0, 8).map(s => {
                  const Icon = s.icon
                  return (
                    <div key={s.slug} className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4">
                      <div className="mb-2 text-indigo-300"><Icon className="h-5 w-5" /></div>
                      <div className="text-sm font-medium text-slate-200">{s.title}</div>
                      <div className="text-xs text-slate-400">End‑to‑end delivery</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
