import { MetadataRoute } from 'next'
import { projects } from '@/data/portfolio'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adityasmukti.github.io'
  
  // Halaman utama
  const routes = [
    '',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Halaman proyek dinamis
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes]
}
