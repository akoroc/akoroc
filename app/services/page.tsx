import Link from 'next/link'
import { Section, Kicker, H2, P } from '@/components/ui'
import { SERVICES } from '@/lib/services'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Services — Akoroc' }

export default function ServicesIndex() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Kicker>Services</Kicker>
          <H2>Everything you need to move faster</H2>
          <P className="mt-3">Browse our core capabilities. Each service can be tailored to your stage and constraints.</P>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.slug} className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5">
                  <div className="mb-2 text-indigo-300"><Icon className="h-5 w-5" /></div>
                  <div className="text-base font-semibold text-white">{s.title}</div>
                  <P className="mt-1 text-sm">{s.desc}</P>
                  <Link href={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-300 hover:text-indigo-200">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Section>
    </main>
  )
}
