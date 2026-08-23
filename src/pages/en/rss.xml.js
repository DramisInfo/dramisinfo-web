import rss from '@astrojs/rss';
import { getPosts } from '@/lib/blog';
import { ui } from '@/i18n/ui';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: ui.en.blog.metaTitle,
    description: ui.en.blog.metaDescription,
    site: context.site,
    customData: '<language>en-ca</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${post.id}/`,
    })),
  });
}
