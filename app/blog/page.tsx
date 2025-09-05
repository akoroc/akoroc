import Link from 'next/link'
import { Section, Kicker, H2, P } from '@/components/ui'
import { getAllPosts } from '@/lib/posts'

export const metadata = { title: 'Blog — Akoroc' }

export default async function BlogIndex() {
  const posts = await getAllPosts()
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Kicker>Blog</Kicker>
          <H2>Insights, playbooks, and updates</H2>
          <div className="mt-8 space-y-4">
            {posts.map(p => (
              <div key={p.slug} className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="text-xs text-slate-400">{p.date}</div>
                <div className="text-lg font-semibold text-white"><Link href={`/blog/${p.slug}`}>{p.title}</Link></div>
                <P className="mt-2 text-sm">{p.excerpt}</P>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
