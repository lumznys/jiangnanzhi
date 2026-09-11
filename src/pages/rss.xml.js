import rss from '@astrojs/rss';
import content from '../data/content.json';
export function GET(context) {
  return rss({
    title:'江南枝 · 茶叶科普',
    description:'岩茶知识、选茶指南、冲泡技巧与存茶方法。',
    site:context.site,
    items:content.tea.map(article=>({title:article.title,description:article.excerpt,pubDate:new Date(article.date),link:`/tea-knowledge/${article.id}`})),
    customData:'<language>zh-cn</language>',
  });
}
