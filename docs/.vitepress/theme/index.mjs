import {onMounted} from "vue";
import {useData} from "vitepress";
import {VPCarbon} from "vitepress-carbon";
import Mermaid from "./Mermaid.vue";
import ApiPlayground from "./explorer/ApiPlayground.vue";
import IntentPlayground from "./explorer/IntentPlayground.vue";
import SessionOverview from "./explorer/SessionOverview.vue";
import "./valu.css";
import "./explorer/explorer.css";

export default {
  extends: VPCarbon,
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
    app.component('ApiPlayground', ApiPlayground);
    app.component('IntentPlayground', IntentPlayground);
    app.component('SessionOverview', SessionOverview);
  },
  // Inside Valu Social the theme is the platform's: follow the scheme the host
  // pushes (caught by the head script in config.mts) through VitePress's own
  // isDark, so CSS, code blocks and Mermaid diagrams all switch together.
  setup() {
    const {isDark} = useData();
    onMounted(() => {
      const apply = scheme => {
        if (scheme === 'dark' || scheme === 'light') isDark.value = scheme === 'dark';
      };
      apply(window.__valuBridge?.colorScheme);
      window.addEventListener('valu_color-scheme', event => apply(event.detail));
    });
  },
};
