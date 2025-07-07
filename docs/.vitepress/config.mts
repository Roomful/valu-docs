import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Valu Framework Documentation",
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
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ]
  }
})
