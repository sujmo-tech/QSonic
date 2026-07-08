import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Dieses Plugin fängt alle fehlenden Bilder ab, BEVOR Vite den Build abbricht
function ignoreMissingImages() {
  return {
    name: 'ignore-missing-images',
    enforce: 'pre' as const, // Läuft ganz am Anfang
    resolveId(source, importer) {
      // Wenn es ein Bild-Import ist
      if (source.endsWith('.png') || source.endsWith('.jpg') || source.endsWith('.jpeg') || source.endsWith('.svg')) {
        // Falls es ein relativer Pfad ist, berechnen wir den echten Pfad auf dem Server
        if (source.startsWith('.') && importer) {
          const targetPath = path.resolve(path.dirname(importer), source);
          if (!fs.existsSync(targetPath)) {
            return 'virtual:missing-image';
          }
        } 
        // Falls es ein absoluter Pfad im src-Ordner ist
        else if (source.includes('src/assets/')) {
          const targetPath = path.resolve(__dirname, source.replace(/^@\//, './src/'));
          if (!fs.existsSync(targetPath)) {
            return 'virtual:missing-image';
          }
        }
      }
      return null;
    },
    load(id) {
      if (id === 'virtual:missing-image') {
        return 'export default ""'; // Liefert einfach einen leeren String statt abzustürzen
      }
      return null;
    }
  };
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    }
  }
}

export default defineConfig({
  base: '/QSonic/',
  plugins: [
    ignoreMissingImages(), // Als allererstes ausführen!
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
