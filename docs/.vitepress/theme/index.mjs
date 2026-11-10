import {h, nextTick, onMounted, watch} from "vue";
import {useData, useRoute} from "vitepress";
import {VPCarbon} from "vitepress-carbon";
import AppMenu from "./AppMenu.vue";
import Mermaid from "./Mermaid.vue";
import ApiPlayground from "./explorer/ApiPlayground.vue";
import FunctionPlayground from "./explorer/FunctionPlayground.vue";
import SessionOverview from "./explorer/SessionOverview.vue";
import {getValu} from "./explorer/valuClient.mjs";
import "./valu.css";
import "./explorer/explorer.css";

export default {
  extends: VPCarbon,
  // Carbon's layout, with the Valu app menu (Expand / Close) at the end of the
  // nav bar. It renders nothing outside Valu Social.
  Layout: () => h(VPCarbon.Layout, null, {
    'nav-bar-content-after': () => h(AppMenu),
  }),
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
    app.component('ApiPlayground', ApiPlayground);
    app.component('FunctionPlayground', FunctionPlayground);
    app.component('SessionOverview', SessionOverview);
  },
  setup() {
    const {isDark} = useData();
    const route = useRoute();
    onMounted(() => {
      // Inside Valu Social the theme is the platform's: follow the scheme the
      // host pushes (caught by the head script in config.mts) through
      // VitePress's own isDark, so CSS, code blocks and Mermaid diagrams all
      // switch together.
      const apply = scheme => {
        if (scheme === 'dark' || scheme === 'light') isDark.value = scheme === 'dark';
      };
      apply(window.__valuColorScheme);
      window.addEventListener('valu_color-scheme', event => apply(event.detail));

      // Valu Social keeps the app's own route in its address bar, so a
      // reload or a shared link opens this page: valu.route.push on every
      // page change, and once for the page it opened on.
      if (window.self === window.top) return;
      const push = () => getValu().then(valu => valu.route.push(window.location.pathname)).catch(() => {});
      push();
      watch(() => route.path, () => nextTick(push));
    });
  },
};
