import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxInject: `import {createElement, Fragment} from '/src/tsx'`
  }
})