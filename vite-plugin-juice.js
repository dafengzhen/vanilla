import juice from 'juice';

export default function viteJuicePlugin(options = {}) {
  const { enabled = true } = options;

  return {
    name: 'vite-plugin-juice',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_, bundle) {
      if (!enabled) {
        console.log('[plugin vite:juice     ] Skipped because enabled = false');
        return;
      }

      for (const [fileName, file] of Object.entries(bundle)) {
        if (fileName.endsWith('.html') && file.type === 'asset') {
          const originalHtml = file.source.toString();

          file.source = juice(originalHtml);

          console.log(`[plugin vite:juice     ] Inlined CSS for: ${fileName}`);
        }
      }
    },
  };
}
