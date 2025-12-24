import { defineConfig } from 'vite'
import react from '@vitejs/react-config'

export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this is set to '/' or removed
})