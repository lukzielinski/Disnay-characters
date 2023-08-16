import sveltePreprocess from 'svelte-preprocess'

export default {
    preprocess: sveltePreprocess({
        less: {
            // prependData: `@import './src/GlobalMediaQueries.less';`
        },
    }),
}
