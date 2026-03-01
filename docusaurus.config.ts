import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Last Second Coupon',
  tagline: 'Recover abandoned carts with time-limited popup coupons',
  favicon: 'img/favicon.ico',

  url: 'https://docs.marvel-labs.com',
  baseUrl: '/',

  organizationName: 'Marvel-Laboratory',
  projectName: 'popengine-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {label: 'English'},
      de: {label: 'Deutsch'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        language: ['en', 'de'],
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Last Second Coupon',
      logo: {
        alt: 'Last Second Coupon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/admin/overview',
          label: 'Admin Guide',
          position: 'left',
        },
        {
          to: '/docs/storefront/overview',
          label: 'Storefront Guide',
          position: 'left',
        },
        {
          to: '/docs/changelog/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://lastsecondcoupon.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://lastsecondcoupon.com/support',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Admin Guide', to: '/docs/admin/overview'},
            {label: 'Storefront Guide', to: '/docs/storefront/overview'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Contact Support', href: 'https://lastsecondcoupon.com/support'},
            {label: 'FAQ', to: '/docs/faq'},
            {label: 'Troubleshooting', to: '/docs/troubleshooting'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://lastsecondcoupon.com/privacy'},
            {label: 'Terms of Service', href: 'https://lastsecondcoupon.com/terms'},
            {label: 'Imprint', href: 'https://lastsecondcoupon.com/imprint'},
          ],
        },
      ],
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} Last Second Coupon. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(0, 0, 0, 0.9)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
