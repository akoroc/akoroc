import type { LucideIcon } from 'lucide-react'
import { Code2, Smartphone, MessageSquare, Cloud, Cpu, Database, Bot, ShieldCheck } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  desc: string
  content: string
  bullets: string[]
  icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    desc: 'Scalable apps, APIs, and platforms tailored to your business.',
    content:
      'We create mission-critical software systems that scale as you grow. Our team specializes in building resilient architectures, robust APIs, and enterprise-grade platforms. We emphasize maintainability, documentation, and long-term support.',
    bullets: [
      'Architecture & domain modeling',
      'API design (REST/GraphQL)',
      'Testing, CI/CD, observability',
      'Security & compliance by default',
    ],
    icon: Code2,
  },
  {
    slug: 'web-mobile',
    title: 'Web & Mobile Development',
    desc: 'Responsive, accessible, and high-performance experiences.',
    content:
      'Our web and mobile experiences put users first. We design responsive interfaces, optimize performance, and deliver accessible apps. From consumer products to enterprise dashboards, our builds combine elegance and speed.',
    bullets: [
      'React/Next.js, Tailwind',
      'iOS/Android with React Native',
      'Accessibility & performance (Lighthouse)',
      'Headless CMS & e-commerce',
    ],
    icon: Smartphone,
  },
  {
    slug: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    desc: 'Visibility, engagement, and growth backed by analytics.',
    content:
      'Our SEO and marketing approach drives results. We mix technical SEO with storytelling content, implement conversion funnels, and use analytics to continually improve ROI.',
    bullets: [
      'Technical SEO & content strategy',
      'Paid media & conversion funnels',
      'Analytics & attribution',
      'Marketing ops & automation',
    ],
    icon: MessageSquare,
  },
  {
    slug: 'cloud',
    title: 'Cloud Solutions',
    desc: 'Architecture, migration, DevOps, and cost optimization.',
    content:
      'Design and run cloud-native systems with confidence. We build containerized workloads, IaC pipelines, and observability-first architectures that scale globally and cost-effectively.',
    bullets: ['AWS, Azure, GCP', 'Containers & Kubernetes', 'Terraform & IaC', 'Cost/performance optimization'],
    icon: Cloud,
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    desc: 'From prototypes to production — models, pipelines, and MLOps.',
    content:
      'Ship AI features that matter: retrieval-augmented apps, fine-tuned models, and safe agentic automation. We build evaluation harnesses and MLOps to keep quality high.',
    bullets: [
      'LLM apps & retrieval (vector search)',
      'Model training & evaluation',
      'MLOps pipelines',
      'Agentic automation',
    ],
    icon: Cpu,
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    desc: 'Warehouses, dashboards, governance, and decision intelligence.',
    content:
      'Turn raw data into actionable intelligence. We implement ELT pipelines, semantic layers, and intuitive BI dashboards — with governance baked in.',
    bullets: ['Warehousing & ETL/ELT', 'Metrics & BI dashboards', 'Data governance', 'Event streaming & real-time'],
    icon: Database,
  },
  {
    slug: 'digital-agents',
    title: 'Digital Agents',
    desc: 'Workflow copilots, support bots, and internal automations.',
    content:
      'Integrate helpful agentic copilots across your customer and internal workflows. We focus on reliability, safety, and measurable ROI.',
    bullets: ['Lead triage & inbox copilots', 'Support & knowledge copilots', 'Back-office automations', 'Evals & safety'],
    icon: Bot,
  },
  {
    slug: 'security',
    title: 'Security & Compliance',
    desc: 'Privacy by design, SOC-2 hygiene, and best practices.',
    content:
      'Bake in security from day one. We apply threat modeling, secure SDLC, and least-privilege cloud patterns to minimize risk and keep audits light.',
    bullets: ['Threat modeling & hardening', 'AuthN/Z, SSO, least privilege', 'Compliance readiness', 'Secure SDLC'],
    icon: ShieldCheck,
  },
]

export function getService(slug: string) {
  return SERVICES.find(s => s.slug === slug)
}
