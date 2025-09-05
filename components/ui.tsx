'use client'
import React from 'react'
import { Sparkles } from 'lucide-react'

export const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`w-full py-20 md:py-28 ${className}`}>{children}</section>
)

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
)

export const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4"><Pill>{children}</Pill></div>
)

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">{children}</h2>
)

export const P = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-slate-300/90 leading-relaxed ${className}`}>{children}</p>
)
