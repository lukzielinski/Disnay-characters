<script lang="ts">
    import 'bootstrap-icons/font/bootstrap-icons.css'
    import { push } from 'svelte-spa-router'
    import NavbarMobile from './NavbarMobile.svelte'

    $: windowWidth = window.innerWidth

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
    })
</script>

{#if windowWidth > 900}
    <nav class="navbar">
        <div class="element" on:click={() => push('/mostPopular')}>Most Popular</div>
        <div class="element" on:click={() => push('/list')}>Character List</div>
        <div class="element logo"><i class="bi bi-moon-stars-fill" /></div>
        <div class="element" on:click={() => push('/favourites')}>Your Favourite</div>
        <div class="element" on:click={() => push('/contact')}>Contact</div>
    </nav>
{:else}
    <NavbarMobile />
{/if}

<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    .navbar {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        height: 50px;
        padding: 20px;
        color: white;
        text-transform: uppercase;
        z-index: 2;
        background-color: rgb(25, 25, 25);
        font-family: 'Roboto Mono', monospace;
    }
    .element {
        margin: 0 10px;
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;

        &:hover {
            cursor: pointer;
        }
    }

    .element:nth-child(1) {
        animation-delay: 0.2s;
    }
    .element:nth-child(2) {
        animation-delay: 0.3s;
    }
    .element:nth-child(3) {
        animation-delay: 0.5s;
    }
    .element:nth-child(4) {
        animation-delay: 0.7s;
    }
    .element:nth-child(5) {
        animation-delay: 0.9s;
    }

    .logo {
        font-size: 2rem;
        font-weight: bold;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
