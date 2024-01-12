// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: '',
        },
        blog: {
          showReadingTime: true,
          // editUrl: '',
          blogTitle: 'Dekaf Blog',
          blogDescription: 'Blog about messaging, streaming, and Apache Pulsar',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/fonts.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/footer.css'),
            require.resolve('./src/css/navbarSidebar.css'),
            require.resolve('./src/css/navbarCustomLink.css'),
            require.resolve('./src/css/navbarSidebarCustomLink.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
          /* Left------------------------------------------------------------ */
          { to: '/docs', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/pricing', label: 'Pricing', position: 'left' },
          { to: '/support', label: 'Support', position: 'left' },

          /* Right----------------------------------------------------------- */
          { type: 'search', position: 'right' },
          {
            to: 'https://billing.stripe.com/p/login/aEU15N5g42A64GQ9AA',
            label: 'Billing Portal',
            position: 'right',
            className: 'accountLink',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pricing',
            items: [],
          },
          {
            title: 'Docs',
            items: [],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Teal Tools Inc. on GitHub',
                href: 'https://github.com/tealtools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teal Tools, Inc.`,
      },
      /* prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, */
      /* algolia: {
        appId: 'abc',
        apiKey: 'xyz',
        indexName: 'abc',
      } */
    }),
};

module.exports = config;
