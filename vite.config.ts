import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Defines process.env for the Google GenAI SDK to work if needed, 
    // though ideally you use import.meta.env in Vite.
    'process.env': process.env
  }
})