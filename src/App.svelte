<script lang="ts">
    import { onMount } from 'svelte'
    import Router from 'svelte-spa-router'
    import { wrap } from 'svelte-spa-router/wrap'
    import { Character, getCharacters } from './apiRequests'
    import Loader from './elements/Loader.svelte'
    import List from './views/CharactersList/List.svelte'
    import HeaderBackground from './views/HeaderBackground.svelte'
    import Navbar from './views/Navbar.svelte'

    let characters: Character[] = []

    const routes = {
        '/favourites': wrap({
            asyncComponent: () => import('./views/Favourites/Favourites.svelte'),
        }),
    }

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
        <HeaderBackground />
        <List {characters} />
        <div class="main-elements">
            {#if isLoading}
                <div class="loader">
                    <Loader />
                </div>
            {:else}
                <Router {routes} />
                <div class="cyce">cyce</div>
            {/if}
        </div>
    </div>
</main>

<!-- <div class="container">
    
</div> -->

<!-- <style lang="less">
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
</style> -->

<!-- <h1>Lista Postaci Disneya</h1>
        <ul>
            {#each characters as character}
                <li>
                    <img src={character.imageUrl} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>Filmy: {character.films.join(', ')}</p>
                    <p>Serie TV: {character.tvShows.join(', ')}</p>
                </li>
            {/each}
        </ul> -->

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
