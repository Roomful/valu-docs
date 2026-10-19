import {VPCarbon} from "vitepress-carbon";
import Mermaid from "./Mermaid.vue";
import IntentExplorer from "./explorer/IntentExplorer.vue";
import RestExplorer from "./explorer/RestExplorer.vue";
import ServerOnlyTools from "./explorer/ServerOnlyTools.vue";
import "./explorer/explorer.css";

export default {
  extends: VPCarbon,
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
    app.component('IntentExplorer', IntentExplorer);
    app.component('RestExplorer', RestExplorer);
    app.component('ServerOnlyTools', ServerOnlyTools);
  }
};
