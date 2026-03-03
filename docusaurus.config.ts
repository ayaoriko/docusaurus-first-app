import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docusaurus First App',
  tagline: 'Dinosaurs って便利だね。',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // 自分のURLに変更する
  url: 'https://ayaoriko.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // リポジトリ名を / で囲む
  baseUrl: '/docusaurus-first-app/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ayaoriko',// GitHubのID
  projectName: 'docusaurus-first-app', // リポジトリ名

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // ここを ja にすることで、HTMLのlang属性が ja になる。
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // outeBasePathを変更することでURLの単語が変わる。（フォルダは変更不可）
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Tutorial、Blog以外のドキュメントを追加するためにプラグインを使う。今回はLearnというドキュメントを追加する。
  //plugins: [
  //  [
  //    '@docusaurus/plugin-content-docs',
  //    {
  //      id: 'learn',
  //      path: 'learn',
  //      routeBasePath: 'learn',
  //      sidebarPath: false,// falseにするとサイドバーが表示されなくなる。変更するときは要再読み込み
  //    },
  //  ],
  //],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light', // デフォルトのテーマモードを設定する。light、dark、autoのいずれかを指定できる。autoにすると、ユーザーのOSのテーマ設定に従う。
      disableSwitch: true, // ユーザーがテーマを切り替えることができるようにする。trueにすると、ユーザーはテーマを切り替えることができなくなる。
      respectPrefersColorScheme: true, // ユーザーのOSのテーマ設定を尊重する。trueにすると、ユーザーがダークモードを選択している場合、サイトも自動的にダークモードになる。falseにすると、サイトは常にライトモードになる。
    },
    navbar: {
      title: 'Docusaurus First App',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'サンプル1：Tutorial',
        },
        { to: '/blog', label: 'サンプル2：Blog', position: 'left' },
        //{ to: '/learn', label: 'Learn', position: 'left' },
        {
          href: 'https://github.com/ayaoriko/docusaurus-first-app', // hrefにすることで、外部リンクになる。アイコンも自動でつく
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'サンプル',
          items: [
            {
              label: 'サンプル1：Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'サンプル2：Blog',
              to: '/blog',
            },
            //{
            //  label: 'Learn',
            //  to: '/learn',
            //},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://ayaoriko.com',
            },
            {
              label: 'X',
              href: 'https://x.com/ayaoriko',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ayaoriko/docusaurus-first-app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ayaoriko, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
