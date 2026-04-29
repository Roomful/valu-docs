<template>
  <div class="mermaid-container" v-html="svgContent" />
</template>

<script setup lang="ts">
import {ref, onMounted, watch, toRaw} from "vue";
import {useData} from "vitepress";
import mermaid from "mermaid";

const props = defineProps<{
  id: string;
  code: string;
  theme: string;
}>();

const svgContent = ref<string>('');
const {isDark, page} = useData();
const {frontmatter} = toRaw(page.value);
const mermaidPageTheme = frontmatter.mermaidTheme || '';

async function renderMermaid() {
  try {
    const decodedCode = decodeURIComponent(props.code);

    mermaid.initialize({
      startOnLoad: false,
      theme: mermaidPageTheme || 'neutral',
      themeVariables: {
        darkMode: isDark.value
      },
      securityLevel: 'loose',
    });
    
    const { svg } = await mermaid.render(`mermaid-${props.id}`, decodedCode);
    svgContent.value = svg;
  } catch (err) {
    console.error('Mermaid render error:', err);
    svgContent.value = `<pre class="mermaid-error">Mermaid Rendering Error: ${err}</pre>`;
  }
}

onMounted(() => {
  renderMermaid();
});


watch(() => isDark, () => {
  renderDiagram();
});

</script>

<style scoped>
.mermaid-container {
  margin: 1rem 0;
}
.mermaid-error {
  color: red;
  background: #ffe0e0;
  padding: 0.5rem;
}
</style>
