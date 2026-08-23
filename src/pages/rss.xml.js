import rss from '@astrojs/rss';
import { getPosts } from '@/lib/blog';
import { ui } from '@/i18n/ui';

export async function GET(context) {
  const posts = await getPosts('fr');
  return rss({
    title: ui.fr.blog.metaTitle,
    description: ui.fr.blog.metaDescription,
    site: context.site,
    customData: '<language>fr-ca</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blogue/${post.id}/`,
    })),
  });
}
