import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ethertrix.com';
  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/products/sports-os`, priority: 0.95, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/sports-technology`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio/matchmaking-applications`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio/fleet-management-application`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio/legal-services-application`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio/liberty-marathon-event-tech`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/insights`, priority: 0.75, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    ...r,
    lastModified: new Date(),
  }));
}
