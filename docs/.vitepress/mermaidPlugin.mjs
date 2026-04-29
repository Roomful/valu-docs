export default function mermaidPlugin(md) {
  const originalFenceRenderer = md.renderer.rules.fence;

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const language = token.info.trim();

    if (language === 'mermaid') {
       const encodedContent = encodeURIComponent(token.content);
       return `<Mermaid id="mermaid-${idx}" code="${encodedContent}"></Mermaid>`;
    }

    return originalFenceRenderer
      ? originalFenceRenderer(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options);
  };
}
