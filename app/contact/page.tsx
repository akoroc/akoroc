export const dynamic = 'force-static'
import { Section, Kicker, H2, P } from '@/components/ui'

export const metadata = { title: 'Contact — Akoroc' }

export default function ContactPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Kicker>Contact</Kicker>
          <H2>Tell us about your project</H2>
          <P className="mt-3">We’ll get back within 1–2 business days.</P>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks" className="mt-8 grid gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 outline-none placeholder:text-slate-500" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 outline-none placeholder:text-slate-500" />
            </div>
            <input name="company" placeholder="Company" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 outline-none placeholder:text-slate-500" />
            <select name="service" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 outline-none">
              <option>Custom Software</option>
              <option>Web & Mobile</option>
              <option>SEO & Marketing</option>
              <option>Cloud</option>
              <option>AI & ML</option>
              <option>Data & Analytics</option>
              <option>Digital Agents</option>
            </select>
            <textarea name="message" rows={6} placeholder="What are you trying to achieve?" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 outline-none placeholder:text-slate-500" />
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-95 md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </main>
  )
}
