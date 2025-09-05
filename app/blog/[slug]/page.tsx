import { notFound } from 'next/navigation'
import { Section } from '@/components/ui'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-xs text-slate-400">{post!.date}</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-white">{post!.title}</h1>
          <article className="prose prose-invert mt-6" dangerouslySetInnerHTML={{ __html: post!.contentHtml }} />
        </div>
      </Section>
    </main>
  )
}
