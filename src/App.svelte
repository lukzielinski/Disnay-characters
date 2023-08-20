<script lang="ts">
    import { onMount } from 'svelte'
    import { location } from 'svelte-spa-router'
    import { Character, getCharacters } from './apiRequests'
    import Loader from './elements/Loader.svelte'
    import Navbar from './elements/Navbar.svelte'
    import List from './views/CharactersList/List.svelte'
    import Contact from './views/Contact/Contact.svelte'
    import Favourites from './views/Favourites/Favourites.svelte'
    import HeaderBackground from './views/HeaderBackground.svelte'
    import MostPopular from './views/MostPopular.svelte'

    let characters: Character[] = []

    $: currentPath = $location

    let isLoading = true

    onMount(async () => {
        try {
            characters = await getCharacters()
        } finally {
            isLoading = false
        }
    })
</script>

<svelte:head>
    <title>💯 ↁisney ¢haracters</title>
</svelte:head>

<main>
    <div class="container">
        <Navbar />
        {#if isLoading}
            <Loader />
        {:else if currentPath === '/contact'}
            <Contact />
        {:else if currentPath === '/favourites'}
            <Favourites />
        {:else if currentPath === '/list'}
            <List {characters} />
        {:else}
            <HeaderBackground />
            <MostPopular {characters} />
        {/if}
    </div>
</main>

<style lang="less">
    .container {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }
    :global(html)::-webkit-scrollbar-track {
        background-color: rgb(25, 25, 25);
    }
    :global(html)::-webkit-scrollbar {
        width: 6px;
        background-color: rgb(142, 132, 132);
        @media (max-width: 900px) {
            width: 0px;
        }
    }

    :global(html)::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(172, 172, 172, 0.38);
    }
</style>
