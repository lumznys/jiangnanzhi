// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.jiangnantea.com',
	integrations: [
		mdx(),
		sitemap({
			// /brand-news/qa/6/ 是茶博会文章的旧地址存档（canonical 指向 /brand-news/news/2026-spring-tea-expo/ 且 noindex），不进入 sitemap
			filter: (page) => !page.includes('/brand-news/qa/6/'),
		}),
	],
});

