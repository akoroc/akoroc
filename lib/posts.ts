import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  contentHtml: string
}

const postsDir = path.join(process.cwd(), 'content', 'posts')

function toDateString(v: any): string {
  if (!v) return new Date().toISOString().slice(0, 10)
  if (v instanceof Date) return v.toISOString().slice(0, 10)
  if (typeof v === 'string') return v
  try {
    const d = new Date(v)
    if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10)
  } catch {}
  return String(v)
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx?$/, ''))
}

export async function getPostBySlug(slug: string) {
  const fullPathMd = path.join(postsDir, `${slug}.md`)
  const fullPathMdx = path.join(postsDir, `${slug}.mdx`)
  const filePath = fs.existsSync(fullPathMd) ? fullPathMd : fs.existsSync(fullPathMdx) ? fullPathMdx : null
  if (!filePath) return null
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  const front = data as any
  return {
    slug,
    title: front.title ?? slug,
    date: toDateString(front.date),
    excerpt: front.excerpt ?? '',
    contentHtml,
  }
}

export async function getAllPosts() {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(slugs.map(s => getPostBySlug(s)))
  return (posts.filter(Boolean) as any[]).sort((a, b) => (a.date < b.date ? 1 : -1))
}
