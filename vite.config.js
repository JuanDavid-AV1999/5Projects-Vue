import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, sep } from 'path'
console.log(join(__dirname, `src${sep}`))
export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, `src${sep}`),
        },
    },
    plugins: [vue()],
})
