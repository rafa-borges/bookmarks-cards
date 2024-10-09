import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {version as package_json_version} from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BOOKMARKS_CARDS_VERSION__: JSON.stringify(package_json_version),
    __BOOKMARKS_CARDS_DATE__: JSON.stringify(new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }))
  }
})
