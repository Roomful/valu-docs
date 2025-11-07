import {defineConfigWithTheme} from "vitepress";
import baseConfig from "vitepress-carbon/config";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,

  title: "Valuverse Docs",
  description: "Developers documentation for developers",
  head: [['link', {rel: 'icon', href: '/_resources/favicon.ico'}]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/_resources/valu.svg',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/valu-overview'},
      {text: 'API', link: '/valu-api'}
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Docs',
        items: [
          {text: 'Valu Overview', link: '/valu-overview'},
          {text: 'Valuverse SuperApp API', link: '/valu-api'},
          {text: 'Valuverse Backend Server', link: '/Valuverse_Backend'},
          {text: 'Valuverse Backend API', link: '/apidocs/Readme'},
          {text: 'Gaming Architecture Overview', link: '/netcode'},
          {text: 'Gaming Backend Server', link: '/netcode-topology'},
          {text: 'Gaming Client Engine', link: '/netcode-client'},
          {text: 'Crypto Server', link: '/crypto_server'},
          {text: 'Valu Wallet API', link: 'https://valu-verse.github.io/valuapi/'},
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Roomful/valu-docs'}
    ]
  }
})
