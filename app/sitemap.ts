import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { getAllPostSlugs } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.akoroc.com'
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  ]
  SERVICES.forEach(s => pages.push({ url: `${base}/services/${s.slug}`, changeFrequency: 'monthly', priority: 0.8 }))
  getAllPostSlugs().forEach(slug => pages.push({ url: `${base}/blog/${slug}`, changeFrequency: 'monthly', priority: 0.6 }))
  return pages
}
