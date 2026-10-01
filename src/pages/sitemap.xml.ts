import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';

const siteUrl = 'https://www.ayrshirefencinggroup.com';

// All static pages
const staticPages = [
  '',
  '/about',
  '/contact',
  '/services',
  '/projects',
  '/fencing-projects',
  '/decking-projects',
  '/gallery',
];

// Service pages - must match service/[slug].astro getStaticPaths.
// Keyword-variant and town pages were removed in the spam update cleanup;
// do not add them back (see seo-recovery/spam-update-recovery-plan.md).
const mainServicePages = [
  'fencing',
  'fence-repairs',
  'decking',
  'gates',
  'garden-rooms',
];

const additionalServicePages = [
  'outdoor-step-construction-irvine',
  'patio-construction-irvine',
];

const servicePages = [
  ...mainServicePages,
  ...additionalServicePages,
];

// Standalone pages that kept their original URL because they rank
const categoryPages = [
  'shed-builder-irvine',
];

function generateSitemap(): string {
  // Get project slugs from projects data
  const projectSlugs = projects.map(project => project.slug);
  
  const allPages = [
    ...staticPages,
    ...servicePages.map(slug => `/service/${slug}`),
    ...projectSlugs.map(slug => `/project/${slug}`),
    ...categoryPages.map(page => `/${page}`),
  ];

  const urls = allPages.map(page => {
    const url = `${siteUrl}${page}`;
    // Set priority based on page type
    let priority = '0.8';
    if (page === '') {
      priority = '1.0';
    } else if (page === '/services' || mainServicePages.includes(page.replace('/service/', ''))) {
      priority = '0.9';
    } else if (categoryPages.includes(page.replace('/', ''))) {
      priority = '0.85';
    } else if (page.startsWith('/project/')) {
      priority = '0.7';
    } else if (page.startsWith('/service/')) {
      priority = '0.8';
    }
    
    // Set change frequency based on page type
    let changefreq = 'monthly';
    if (page === '' || page === '/projects') {
      changefreq = 'weekly';
    } else if (page.startsWith('/project/')) {
      changefreq = 'monthly';
    } else if (page.startsWith('/service/')) {
      changefreq = 'monthly';
    }
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET: APIRoute = () => {
  const sitemap = generateSitemap();
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
