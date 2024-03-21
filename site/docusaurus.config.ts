// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'Dekaf | UI for Apache Pulsar',
  tagline:
    'Equip your team with a top-notch UI tool and unleash the full power of Pulsar',
  favicon: 'img/favicon/favicon.ico',

  url: 'https://dekaf.io',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: '/js/crop-everything-at-page-except-content.js',
      async: true
    }
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docsRootComponent: '@site/src/components/ui/Layout/docs/DocsRoot'
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Dekaf Blog',
          blogDescription: 'Blog about messaging, streaming, and Apache Pulsar',
          postsPerPage: 'ALL',
          feedOptions: {
            type: 'all'
          },
          blogListComponent: '@site/src/components/ui/Layout/blog/BlogListPage',
          blogPostComponent: '@site/src/components/ui/Layout/blog/BlogPostPage',
          blogTagsPostsComponent: '@site/src/components/ui/Layout/blog/BlogTagsPostsPage',
          blogTagsListComponent: '@site/src/components/ui/Layout/blog/BlogTagsListPage',
          blogArchiveComponent: '@site/src/components/ui/Layout/blog/BlogArchivePage'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/fonts.css'),
            require.resolve('./src/css/docs.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/image-zoom.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/footer.css'),
            require.resolve('./src/css/navbarSidebar.css'),
            require.resolve('./src/css/navbarCustomLink.css'),
            require.resolve('./src/css/navbarSidebarCustomLink.css'),
          ],
        },
      } satisfies Preset.Options),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig:
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Dekaf Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/support', label: 'Support', position: 'left' },
          { to: '/pricing', label: 'Pricing', position: 'left' },
          {
            to: 'https://github.com/tealtools/dekaf',
            label: 'Get Dekaf',
            position: 'left',
            className: `navbar__action-button`
          },
        ],
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: '#fff',
          dark: '#111'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    } satisfies Preset.ThemeConfig),
};

export default config;
