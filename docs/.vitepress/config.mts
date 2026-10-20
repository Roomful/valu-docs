import {defineConfigWithTheme} from "vitepress";
import baseConfig from "vitepress-carbon/config";
import mermaidPlugin from "./mermaidPlugin.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  cleanUrls: true,

  title: "Valuverse Docs",
  description: "Developers documentation for developers",
  
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
        let applicationId, source, origin;

        // Framed = opened as the Valu Docs application inside Valu Social. Set
        // before first paint so the Explorer section (shown only in the
        // iframe, see theme/explorer/explorer.css) never flashes in or out.
        if (window.self !== window.top) document.documentElement.classList.add('valu-framed');

        // What the Explorer pages need to call the host: filled on api:ready,
        // which can arrive before the Vue app has mounted.
        const bridge = window.__valuBridge = {ready: false, applicationId: '', source: null, origin: ''};

        window.addEventListener('message', event => {
          if (event.data?.target !== 'valuApi') return;

          const message = event.data.message;

          switch (event.data.name) {
            case 'api:ready': {
              applicationId = message.applicationId;
              source = event.source;
              origin = event.origin;
              Object.assign(bridge, {ready: true, applicationId, source, origin});
              window.dispatchEvent(new CustomEvent('valu_api-ready', {detail: {}}));
              console.info('Valu API Ready, from: ' + applicationId);
              break;
            }
            // The host pushes its light/dark scheme when the frame loads and on
            // every switch (valusocial-web IframeComponentLoader). Painted here,
            // before Vue mounts, so the first frame is already right; the theme's
            // setup (theme/index.mjs) then hands it to VitePress's isDark.
            case 'api:color-scheme': {
              const scheme = message?.scheme;
              if (scheme !== 'light' && scheme !== 'dark') break;
              bridge.colorScheme = scheme;
              document.documentElement.classList.toggle('dark', scheme === 'dark');
              window.dispatchEvent(new CustomEvent('valu_color-scheme', {detail: scheme}));
              break;
            }
          }
        });

        const postToValuApplication = (name, message) => {
          const data = {name, message};
          source.postMessage(data, origin);
        };

        const pushRoute = path => {
          postToValuApplication('api:run-command', {
            command: 'pushRoute',
            data: path,
          });
        };

        window.addEventListener('valu_api-ready', async () => {
          let oldPath = document.location.pathname;
          const body = document.querySelector('body');
          const observer = new MutationObserver(() => {
            if (oldPath !== document.location.pathname) {
              pushRoute(document.location.pathname);
              oldPath = document.location.pathname;
            }
          });
          observer.observe(body, {childList: true, subtree: true});
          pushRoute(document.location.pathname);
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
    // only inside Valu Social, where its pages can call the host's bridge).
    sidebar: {
      '/explorer/': [
        {
          text: 'Explorer',
          items: [
            {text: 'Your session', link: '/explorer/'},
            {text: 'Intents', link: '/explorer/intents'},
            {text: 'Service Intents', link: '/explorer/service-intents'},
            {text: 'REST APIs', link: '/explorer/rest-apis'},
          ]
        }
      ],
      '/': [
        {
          text: 'Docs',
          items: [
            {text: 'Valu Overview', link: '/valu-overview'},
            {text: 'Valuverse SuperApp API', link: '/valu-api'},
            {text: 'Valuverse Bootsrap Pipeline', link: '/application-pipeline'},
            {text: 'Valuverse API Snippets', link: 'valu-snippets'},
            {text: 'Identity Token Validation', link: '/identity-token-validation'},
            {text: 'Intents Reference', link: '/intents-doc'},
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
