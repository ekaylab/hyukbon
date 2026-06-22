import { MetadataRoute } from 'next';

const BASE = 'https://hyukbon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about/greetings', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about/philosophy', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about/hierarchy', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about/capability', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/scope', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/scope/consulting', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/scope/research', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/scope/selling', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/scope/allience', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/performance', priority: 0.9, changeFrequency: 'daily' },
    { path: '/recruite', priority: 0.7, changeFrequency: 'weekly' },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
