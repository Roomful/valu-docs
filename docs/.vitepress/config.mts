import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Valuverse Docs",
  description: "Developers documentation for developers",
  head: [['link', {rel: 'icon', href: '/_resources/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/_resources/valu.svg',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/markdown-examples'},
      {text: 'API', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Valuverse Backend Server', link: '/Valuverse_Backend'},
          {text: 'Valuverse Backend API', link: '/apidocs/Readme'},
          {text: 'Valuverse Frontend API', link: '/valu-api'},
          {text: 'Gaming Architecture Overview', link: '/netcode'},
          {text: 'Gaming Backend Server', link: '/netcode-topology'},
          {text: 'Gaming Client Engine', link: '/netcode-client'},
          {text: 'Crypto Server', link: '/crypto_server'}
        ]
      }
    ]
  }
})
