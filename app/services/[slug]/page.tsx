import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, Kicker, H2, P } from '@/components/ui'
import { getService, SERVICES } from '@/lib/services'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const svc = getService(params.slug)
  if (!svc) return {}
  return {
    title: `${svc.title} — Akoroc`,
    description: svc.desc
  }
}

export default function ServiceDetail({ params }: Props) {
  const svc = getService(params.slug)
  if (!svc) notFound()

  const faqs = [
    { q: `How long does a typical ${svc!.title.toLowerCase()} engagement take?`, a: "Most projects run 6–12 weeks for MVPs and 3–6 months for complex platforms, depending on scope and integrations." },
    { q: "What’s your delivery model?", a: "Agile sprints with weekly demos, shared roadmap, and transparent metrics. You own the IP." },
    { q: "How do you handle security?", a: "Threat modeling, secure SDLC, code reviews, dependency scanning, and least privilege by default." },
  ]

  return (
    <main>
      <Section>
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Kicker>Service</Kicker>
          <H2>{svc!.title}</H2>
          <P className="mt-4 max-w-3xl">{svc!.desc}</P>

          <div className="mt-8 rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <div className="text-lg font-semibold text-white">Overview</div>
            <P className="mt-2">{svc!.content}</P>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['Faster time‑to‑value','Lower total cost','Scalable foundations'].map((o) => (
              <div key={o} className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5">
                <div className="text-base font-semibold text-white">{o}</div>
                <P className="mt-2 text-sm">Impact we optimize for on every engagement.</P>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <div className="text-lg font-semibold text-white">What you get</div>
            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
              {svc!.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{b}</span></li>))}
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>Project plan, demos, and documentation</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>Post‑launch support options</span></li>
            </ul>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-95">
              Start Your Project
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
