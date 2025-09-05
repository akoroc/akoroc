'use client'
import React from 'react'
import Link from 'next/link'
import { Section, Kicker, H2, P } from '@/components/ui'
import { SERVICES } from '@/lib/services'
import { ArrowRight, ShieldCheck, LineChart, MonitorSmartphone, Globe2 } from 'lucide-react'

export function TrustStrip() {
  return (
    <div className="border-y border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 text-slate-400 md:gap-12 md:px-6">
        {['AWS','Azure','GCP','PostgreSQL','Django','React','Node.js','Kubernetes'].map((logo) => (
          <span key={logo} className="text-xs tracking-wider opacity-75">{logo}</span>
        ))}
      </div>
    </div>
  )
}

export function ServicesGrid() {
  return (
    <Section id="services" className="bg-slate-950 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>What We Do</Kicker>
          <H2>Full‑spectrum services for modern teams</H2>
          <P className="mt-4">Everything you need under one roof — strategy, design, engineering, and growth.</P>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.slug} className="group rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 shadow hover:border-slate-700/70 hover:bg-slate-900/70">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <P className="mt-2 text-sm">{s.desc}</P>
                <div className="mt-4">
                  <Link href={`/services/${s.slug}`} className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export function About() {
  return (
    <Section id="about" className="bg-slate-950 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Who We Are</Kicker>
            <H2>Enterprise discipline, startup speed</H2>
            <P className="mt-4">
              Akoroc blends strategy, design, and engineering to deliver measurable results. We partner with founders and operators at every stage — from MVP to modernization — bringing clarity, craft, and accountability.
            </P>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300/90 md:grid-cols-2">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-indigo-400"/>Security‑first delivery</li>
              <li className="flex items-center gap-2"><LineChart className="h-4 w-4 text-indigo-400"/>Outcomes over outputs</li>
              <li className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-indigo-400"/>Cloud‑native architectures</li>
              <li className="flex items-center gap-2"><MonitorSmartphone className="h-4 w-4 text-indigo-400"/>Mobile‑first experiences</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-sky-500/10 blur-2xl" />
            <div className="relative h-full rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6">
              <dl className="grid grid-cols-2 gap-6">
                {[
                  { k: "Years Experience", v: "10+" },
                  { k: "Shipped Projects", v: "100+" },
                  { k: "Clouds Supported", v: "AWS · Azure · GCP" },
                  { k: "Security", v: "Best practice by default" },
                ].map(({ k, v }) => (
                  <div key={k} className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4">
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{k}</dt>
                    <dd className="mt-1 text-lg font-semibold text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Deep-dive on goals, users, and constraints. Audits & roadmaps." },
    { n: "02", t: "Design", d: "Information architecture, UX flows, and visual systems." },
    { n: "03", t: "Build", d: "Agile delivery with CI/CD, testing, and observability." },
    { n: "04", t: "Scale", d: "Performance, cloud, security, and growth marketing." },
  ]
  return (
    <Section id="process" className="bg-slate-950 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>How We Work</Kicker>
          <H2>Simple, transparent, outcome‑driven</H2>
          <P className="mt-4">From kickoff to launch, we keep momentum high and surprises low.</P>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <div className="text-xs font-mono text-slate-400">{s.n}</div>
              <div className="mt-2 text-lg font-semibold text-white">{s.t}</div>
              <P className="mt-2 text-sm">{s.d}</P>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function TechStack() {
  const items = [
    { label: "Frontend", value: "React, Next.js, Vite, Tailwind" },
    { label: "Backend", value: "Node.js, Django, FastAPI" },
    { label: "Data", value: "PostgreSQL, Redis, Kafka, dbt" },
    { label: "AI/ML", value: "PyTorch, scikit‑learn, vector search" },
    { label: "Cloud & Ops", value: "AWS, Azure, GCP, Docker, K8s, Terraform" },
    { label: "Analytics", value: "Metabase, Superset, Grafana" },
  ]
  return (
    <Section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>Capabilities</Kicker>
          <H2>Built with proven technologies</H2>
          <P className="mt-4">We choose battle‑tested tools for reliability, speed, and scale.</P>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5">
              <div className="text-sm uppercase tracking-wider text-slate-400">{it.label}</div>
              <div className="mt-1 text-lg font-semibold text-white">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function CTA() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 select-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <Kicker>Let’s Talk</Kicker>
        <H2>Ready to build the future together?</H2>
        <P className="mx-auto mt-4 max-w-2xl">
          Tell us about your goals. We’ll craft a clear plan and execute with precision — no client is too big or too small.
        </P>
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-95">
            Contact Form
          </Link>
          <a href="mailto:hello@akoroc.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5">
            Email hello@akoroc.com
          </a>
        </div>
      </div>
    </Section>
  )
}
