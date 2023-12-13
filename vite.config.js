import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { 
      '/api': { 
           target: 'http://92.63.105.26:3999', 
           changeOrigin: true, 
           secure: false,       
           ws: true, 
       } ,
       '/login': { 
        target: 'http://92.63.105.26:3999', 
        changeOrigin: true, 
        secure: false,       
        ws: true, 
    }
  }
  }
})
