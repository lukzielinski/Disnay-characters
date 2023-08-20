<script lang="ts">
    import { onMount } from 'svelte'
    import { location } from 'svelte-spa-router'
    import { Character, getCharacters } from './apiRequests'
    import Loader from './elements/Loader.svelte'
    import List from './views/CharactersList/List.svelte'
    import Contact from './views/Contact/Contact.svelte'
    import Favourites from './views/Favourites/Favourites.svelte'
    import HeaderBackground from './views/HeaderBackground.svelte'
    import MostPopular from './views/MostPopular.svelte'
    import Navbar from './views/Navbar.svelte'

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
        <div class="main-elements">
            {#if isLoading}
                <div class="loader">
                    <Loader />
                </div>
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
    </div>
</main>

<style lang="less">
    .container {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }
    .main-elements {
        width: 100%;
        max-width: 100% !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    :global(html)::-webkit-scrollbar-track {
        background-color: rgb(25, 25, 25);
    }
    :global(html)::-webkit-scrollbar {
        width: 8px;
        background-color: rgb(142, 132, 132);
    }

    :global(html)::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(172, 172, 172, 0.38);
    }
</style>
