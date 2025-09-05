import Link from 'next/link'
import { Section, H2, P } from '@/components/ui'

export const metadata = { title: 'Thanks — Akoroc' }

export default function ThanksPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <H2>Thanks — we’ll be in touch!</H2>
          <P className="mt-3">Your message has been received. A member of the team will reply shortly.</P>
          <div className="mt-6"><Link href="/" className="rounded-xl border border-slate-700/70 px-4 py-2 text-sm">Back home</Link></div>
        </div>
      </Section>
    </main>
  )
}
