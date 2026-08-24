import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/ui';

/**
 * Articles publiés d'une langue, du plus récent au plus ancien.
 * Les brouillons (`draft: true`) sont visibles en développement, jamais en production.
 */
export async function getPosts(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => {
    if (data.lang !== lang) return false;
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Estimation à 200 mots/minute, arrondie vers le haut.
 *
 * Le corps brut contient les figures SVG dessinées à la main : sans les retirer,
 * chaque coordonnée et chaque nom de couleur compte pour un mot et l'estimation
 * double. On ne mesure que la prose.
 */
export function readingTime(body: string | undefined): number {
  const prose = (body ?? '')
    .replace(/<figure[\s\S]*?<\/figure>/g, '')
    .replace(/<[^>]+>/g, ' ');
  const words = prose.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * `pubDate: 2026-08-24` est une date de calendrier, pas un instant : Zod la lit
 * comme minuit UTC. Sans `timeZone: 'UTC'`, elle se formate dans le fuseau de la
 * machine qui construit le site — au Québec (UTC-4), tout le blogue reculait
 * d'une journée. Netlify construit en UTC, alors la production était juste et le
 * défaut ne se voyait qu'en local.
 */
export function formatDate(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}
