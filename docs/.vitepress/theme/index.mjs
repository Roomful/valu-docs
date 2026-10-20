import {VPCarbon} from "vitepress-carbon";
import Mermaid from "./Mermaid.vue";
import ApiPlayground from "./explorer/ApiPlayground.vue";
import IntentPlayground from "./explorer/IntentPlayground.vue";
import SessionOverview from "./explorer/SessionOverview.vue";
import "./explorer/explorer.css";

export default {
  extends: VPCarbon,
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
    app.component('ApiPlayground', ApiPlayground);
    app.component('IntentPlayground', IntentPlayground);
    app.component('SessionOverview', SessionOverview);
  }
};
