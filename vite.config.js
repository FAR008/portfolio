import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' uses relative asset paths so this build works whether it's
// served from a domain root (username.github.io) or a project subpath
// (username.github.io/repo-name) — no need to hardcode the repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
