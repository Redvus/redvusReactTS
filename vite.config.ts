import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "./src/styles/variables.scss";`
    //         }
    //     }
    // },
    build: {
        outDir: 'public',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    gsap: ['gsap']
                }
            }
        }
    }
})
