import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
    // Verhindert den Absturz, falls Figma-Assets im Ordner fehlen:
    load(id) {
      if (id.includes('src/assets/') && (id.endsWith('.png') || id.endsWith('.jpg') || id.endsWith('.svg'))) {
        if (!fs.existsSync(id)) {
          console.warn(`⚠️ Asset fehlt, Dummy wird geladen: ${id}`);
          return 'export default ""'; // Liefert einen leeren String statt abzustürzen
        }
      }
    }
  }
}

export default defineConfig({
  base: '/QSonic/',
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetResolver()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
