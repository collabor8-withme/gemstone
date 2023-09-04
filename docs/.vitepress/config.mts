import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DepAnlz 📦",
  description: "A CLI for analyzing NPM dependencies",
  themeConfig: {
    logo: "/Collabor8.svg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Docs', link: '/docs/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is DepAnlz 📦 ?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: '开发文档', link: '/guide/other' },
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Documents',
          items: [
            { text: '@depanlz/core', link: '/docs/index' },
            { text: '@depanlz/cli', link: '/docs/cli' },
            { text: '@depanlz/web-server', link: '/docs/web-server' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/collabor8-withme/depanlz' }
    ]
  }
})
