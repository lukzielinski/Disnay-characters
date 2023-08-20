import App from './App.svelte'

const target = document.getElementById('app')
if (!target) {
    throw new Error('No target element found')
}

const app = new App({
    target: target,
})

export default app
