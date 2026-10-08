// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { siteOrigin } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  site: siteOrigin,
  integrations: [
    icon(),
    sitemap({
      serialize(item) {
        if (item.url !== `${siteOrigin}/`) return item;
        return {
          ...item,
          img: [
            {
              url: `${siteOrigin}/og.jpg`,
              title: 'ビリヤニ、カレー、ナンなどのハラル料理',
            },
          ],
        };
      },
    }),
  ],
});
