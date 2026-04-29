import {VPCarbon} from "vitepress-carbon";
import Mermaid from "./Mermaid.vue";

export default {
  extends: VPCarbon,
  enhanceApp({app}) {
    app.component('Mermaid', Mermaid);
  }
};
