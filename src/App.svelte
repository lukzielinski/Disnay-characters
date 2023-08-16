<script lang="ts">
    import { onMount } from 'svelte'
    import { Character, getCharacters } from './apiRequests'
    import Loader from './views/Loader.svelte'

    let characters: Character[] = []
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
    {#if isLoading}
        <div class="loader">
            <Loader />
        </div>
    {:else}
        <h1>Lista Postaci Disneya</h1>
        <ul>
            {#each characters as character}
                <li>
                    <img src={character.imageUrl} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>Filmy: {character.films.join(', ')}</p>
                    <p>Serie TV: {character.tvShows.join(', ')}</p>
                </li>
            {/each}
        </ul>
    {/if}
</main>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    main {
        height: calc(100vh - 5px);
        width: 100%;
        margin: 0 auto;

        border: 1px solid red;
    }
    .loader {
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>
