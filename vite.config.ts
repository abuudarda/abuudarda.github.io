import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Setting the third argument to '' loads all variables from .env and the system environment.
  // We cast process to any because the TypeScript configuration might be targeting the browser (DOM),
  // causing the Node.js 'process.cwd()' method to be missing from the type definition.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // This is critical: it replaces occurrences of 'process.env.API_KEY' in your code
      // with the actual string value of the API key from the environment during the build.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY)
    }
  }
})