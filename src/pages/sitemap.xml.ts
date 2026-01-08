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
];

// Main service category pages (from service/[slug].astro getStaticPaths)
const mainServicePages = [
  'fencing',
  'fence-repairs',
  'decking',
  'gates',
  'sheds',
  'garden-rooms',
];

// Additional service pages (from service/[slug].astro getStaticPaths)
const additionalServicePages = [
  'custom-fence-construction-irvine',
  'wood-fence-installation-irvine',
  'fence-replacement-irvine',
  'garden-fence-installation-irvine',
  'composite-fencing-installation-irvine',
  'chainlink-fencing-installation-irvine',
  'timber-decking-irvine',
  'composite-decking-irvine',
  'wooden-decking-irvine',
  'wooden-fencing-irvine',
  'composite-fencing-irvine',
  'chainlink-fencing-irvine',
  'nylofor-fencing-irvine',
  'concrete-fencing-irvine',
  'fence-design-irvine',
  'privacy-fence-installation-irvine',
  'security-fencing-and-metal-cage-installation-irvine',
  'deck-construction-irvine',
  'patio-construction-irvine',
  'deck-repair-irvine',
  'deck-replacement-irvine',
  'deck-design-irvine',
  'patio-decks-irvine',
  'cabin-design-and-building-irvine',
  'custom-shed-design-irvine',
  'storage-shed-design-and-building-irvine',
  'landscape-installations-irvine',
  'outdoor-step-construction-irvine',
  'patio-design-irvine',
  'repairs-and-maintenance-irvine',
];

// All service pages combined
const servicePages = [
  ...mainServicePages,
  ...additionalServicePages,
];

// Category pages (matching GBP categories)
const categoryPages = [
  'fence-contractor-irvine',
  'contractor-irvine',
  'deck-builder-irvine',
  'shed-builder-irvine',
  'garage-builder-irvine',
  'general-contractor-irvine',
  'landscape-designer-irvine',
  'landscape-architect-irvine',
  'construction-company-irvine',
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
