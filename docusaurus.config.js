// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alist Document",
  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?0d5809a3ff8af1329f415ca8088cc2a0",
      async: true,
    },
  ],
  tagline: "A file list program that supports multiple storage.",
  url: "https://nn.ci",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://store.heytapimage.com/cdo-portal/feedback/202112/05/1542f45f86b8609495b69c5380753135.png",
  organizationName: "Xhofe", // Usually your GitHub org/user name.
  projectName: "alist", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Xhofe/alist-doc/edit/main/",
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Xhofe/alist-doc/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Alist Doc",
        logo: {
          alt: "Alist Doc Logo",
          src: "https://store.heytapimage.com/cdo-portal/feedback/202112/05/1542f45f86b8609495b69c5380753135.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorials",
          },
          {
            position: "left",
            label: "Demo",
            href: "https://alist.nn.ci",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/Xhofe/alist",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/Xhofe/alist",
              },
              {
                label: "QQ Group",
                href: "https://jq.qq.com/?_wv=1027&k=OVPJcv2b",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://nn.ci",
              },
              {
                label: "GitHub",
                href: "https://github.com/Xhofe/alist",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alist, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
  },

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};

module.exports = config;
