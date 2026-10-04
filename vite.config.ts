import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  // Determine base path for GitHub Pages deployment:
  // 1. Explicit BASE_PATH environment variable (for custom domain or manual override)
  // 2. Auto-detect from GitHub Actions GITHUB_REPOSITORY (e.g., "owner/repo" -> "/repo/")
  //    If repo name ends with ".github.io" (user/org site), the base path is "/"
  // 3. Default to "/" for local development
  let base = '/';
  if (process.env.BASE_PATH) {
    base = process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`;
  } else if (process.env.GITHUB_REPOSITORY) {
    const repoParts = process.env.GITHUB_REPOSITORY.split('/');
    const repoName = repoParts[1] || '';
    if (repoName && !repoName.toLowerCase().endsWith('.github.io')) {
      base = `/${repoName}/`;
    }
  }

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
