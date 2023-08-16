import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { defineConfig } from 'vite'
import postcss from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            onwarn: (warning, handler) => {
                // Skip certain warnings

                // should intercept ... but doesn't in some rollup versions
                if (warning.code === 'a11y-click-events-have-key-events') {
                    return
                }

                // let Rollup handle all other warnings normally
                handler(warning)
            },
        }),
    ],
    css: {
        postcss,
    },
    resolve: {
        alias: {
            src: path.resolve('src/'),
            Api: path.resolve('../Api'),
        },
    },
})
