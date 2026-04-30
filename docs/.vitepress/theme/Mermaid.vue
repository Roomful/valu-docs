<template>
  <div class="mermaid-container" v-html="svgContent" />
</template>

<script setup lang="ts">
import {ref, onMounted, watch, toRaw} from "vue";
import {useData} from "vitepress";
import mermaid from "mermaid";
import panzoom from "panzoom";

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
    const _isDark = isDark.value;
    const decodedCode = decodeURIComponent(props.code);
    const theme = mermaidPageTheme || 'neutral';
    
    const themeVariables = (() => theme !== 'neutral' ? {
      darkMode: _isDark,
    } : _isDark ? {
      darkMode: _isDark,
      
      primaryColor: '#fff',
      primaryTextColor: '#000',
      primaryBorderColor: '#fff',

      secondaryColor: '#fff',
      secondaryTextColor: '#000',
      secondaryBorderColor: '#fff',
      
      tertiaryColor: '#fff',
      tertiaryTextColor: '#000',
      tertiaryBorderColor: '#fff',
      
      labelColor: '#000',
      altBackground: '#fff',
      lineColor: '#fff',
      
      actorTextColor: '#000',
      actorLineColor: '#fff',
      
      signalColor: '#fff',
      signalTextColor: '#fff',
      
      labelTextColor: '#000',
      labelBoxBkgColor: '#fff',
      labelBoxBorderColor: '#fff',
      
      loopTextColor: '#fff',
      defaultLinkColor: '#fff',
      
      noteBkgColor: '#000',
      noteTextColor: '#fff',
      noteBorderColor: '#fff',
      
      nodeTextColor: '#000',
      nodeBorder: '#000',
      clusterBkg: '#ccc',
      
      mainBkg: '#fff',
      textColor: '#000',
      
      transitionColor: '#fff',
      specialStateColor: '#fff',
      stateLabelColor: '#000',
      transitionLabelColor : '#fff',
      edgeLabelBackground : '#000',
    } : {
      darkMode: _isDark,
      
      primaryColor: '#000',
      primaryTextColor: '#fff',
      primaryBorderColor: '#000',

      secondaryColor: '#000',
      secondaryTextColor: '#fff',
      secondaryBorderColor: '#000',
      
      tertiaryColor: '#000',
      tertiaryTextColor: '#fff',
      tertiaryBorderColor: '#000',
      
      labelColor: '#000',
      altBackground: '#000',
      lineColor: '#000',
      
      actorTextColor: '#fff',
      actorLineColor: '#000',
      
      signalColor: '#000',
      signalTextColor: '#000',
      
      labelTextColor: '#fff',
      labelBoxBkgColor: '#000',
      labelBoxBorderColor: '#000',
      
      loopTextColor: '#000',
      
      noteBkgColor: '#fff',
      noteTextColor: '#000',
      noteBorderColor: '#000',
      
      nodeTextColor: '#fff',
      nodeBorder: '#fff',
      clusterBkg: '#ccc',
      
      mainBkg: '#000',
      textColor: '#000',
      
      transitionColor: '#000',
      specialStateColor: '#000',
      stateLabelColor: '#fff',
      transitionLabelColor : '#000',
      edgeLabelBackground : '#fff',
    })();

    mermaid.initialize({
      startOnLoad: false,
      theme,
      themeVariables,
      securityLevel: 'loose',
    });
    
    const { svg } = await mermaid.render(`mermaid-${props.id}-${Date.now()}`, decodedCode);
    svgContent.value = svg;
  } catch (err) {
    console.error('Mermaid render error:', err);
    svgContent.value = `<pre class="mermaid-error">Mermaid Rendering Error: ${err}</pre>`;
  }
}

async function panzoomMermaid() {
  const $ = document.querySelectorAll('.mermaid-container svg:not(.panzoomsvg)');  
  if ($?.length > 0) {
    for(let i = 0, length = $.length; i < length; i++) {
      panzoom($[i], {
        zoomSpeed: 0.065,
        maxZoom: 5,
        minZoom: 0.5,
        
        beforeWheel: (e) => {
          return !(e.shiftKey || e.ctrlKey);
        },
        beforeMouseDown: (e) => {
          return !(e.shiftKey || e.ctrlKey);
        }
      });
      $[i].classList.add('panzoomsvg');
    }
  }
}

onMounted(async () => {
  await renderMermaid();
  await panzoomMermaid();
});


watch(isDark, async () => {
  // svgContent.value = '';
  await renderMermaid();
  await panzoomMermaid();
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
