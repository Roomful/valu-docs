import {fileURLToPath} from "node:url";
import {defineConfigWithTheme} from "vitepress";
import baseConfig from "vitepress-carbon/config";
import mermaidPlugin from "./mermaidPlugin.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  cleanUrls: true,

  title: "Valuverse Docs",
  description: "Developers documentation for developers",
  
  vite: {
    resolve: {
      alias: {
        // valu-api imports socket.io-client only on the socket path, which an
        // embedded app never takes; it is not the package's dependency either.
        'socket.io-client': fileURLToPath(new URL('./explorer/socket-io-absent.mjs', import.meta.url)),
      },
    },
  },

  markdown: {
    config: md => {
      md.use(mermaidPlugin);
    }
  },
  
  head: [
    ['link', {rel: 'icon', href: '/_resources/favicon.ico'}],
    [
      'script',
      {},
      `;(() => {
        // Framed = opened as the Valu Docs application inside Valu Social. Set
        // before first paint so the Explorer section (shown only in the
        // iframe, see theme/explorer/explorer.css) never flashes in or out.
        if (window.self !== window.top) document.documentElement.classList.add('valu-framed');

        // Everything the pages ask of Valu Social goes through the valu-api
        // package (theme/explorer/valuClient.mjs). This listens for one thing
        // only, the light/dark scheme the host pushes when the frame loads and
        // on every switch (valusocial-web IframeComponentLoader). Painted here,
        // before Vue mounts, so the first frame is already right; the theme's
        // setup (theme/index.mjs) then hands it to VitePress's isDark.
        window.addEventListener('message', event => {
          if (event.source !== window.parent || event.data?.target !== 'valuApi') return;
          if (event.data.name !== 'api:color-scheme') return;
          const scheme = event.data.message?.scheme;
          if (scheme !== 'light' && scheme !== 'dark') return;
          window.__valuColorScheme = scheme;
          document.documentElement.classList.toggle('dark', scheme === 'dark');
          window.dispatchEvent(new CustomEvent('valu_color-scheme', {detail: scheme}));
        });
      })()`
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/_resources/valu.svg',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/valu-overview'},
      {text: 'API', link: '/valu-api'},
      // Shown only inside Valu Social (html.valu-framed).
      {text: 'Explorer', link: '/explorer/', activeMatch: '/explorer/'}
    ],

    search: {
      provider: 'local'
    },

    // Two sidebars: the Explorer is its own section, entered from the nav (shown
    // only inside Valu Social, where its pages run valu-api's functions).
    sidebar: {
      '/explorer/': [
        {
          text: 'Explorer',
          items: [
            {text: 'Your session', link: '/explorer/'},
            {text: 'Functions', link: '/explorer/functions'},
            {text: 'REST APIs', link: '/explorer/rest-apis'},
          ]
        }
      ],
      '/': [
        {
          text: 'Docs',
          items: [
            {text: 'Valu Overview', link: '/valu-overview'},
            {text: 'Valu API (JavaScript package)', link: '/valu-api'},
            {text: 'Valuverse Bootsrap Pipeline', link: '/application-pipeline'},
            {text: 'Valu API Snippets', link: '/valu-snippets'},
            {text: 'Identity Token Validation', link: '/identity-token-validation'},
            {text: 'Valu API Functions', link: '/valu-api-functions'},
            {text: 'Valu Routing', link: '/valu-routing'},
            {text: 'CMS Service API', link: '/cms-service'},
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
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Roomful/valu-docs'}
    ]
  },
})
