// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dekaf | UI for Apache Pulsar',
  tagline:
    'Equip your team with a top-notch UI tool and unleash the full power of Pulsar',
  favicon: 'img/favicon/favicon.ico',

  url: 'https://dekaf.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
            to: '/get',
            label: 'Get Dekaf',
            position: 'left',
            className: `navbar__action-button`
          },
        ],
      },
      docs: {

      }
      // footer: {
      // },
      /* prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, */
      /* algolia: {
        appId: 'abc',
        apiKey: 'xyz',
        indexName: 'abc',
      } */
    } satisfies Preset.ThemeConfig),
};

module.exports = config;
