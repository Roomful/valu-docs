import {VPCarbon} from "vitepress-carbon";
import Mermaid from "./Mermaid.vue";
import IntentPlayground from "./explorer/IntentPlayground.vue";
import RestExplorer from "./explorer/RestExplorer.vue";
import SessionOverview from "./explorer/SessionOverview.vue";
import "./explorer/explorer.css";

export default {
  extends: VPCarbon,
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
    app.component('IntentPlayground', IntentPlayground);
    app.component('RestExplorer', RestExplorer);
    app.component('SessionOverview', SessionOverview);
  }
};
