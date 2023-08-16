<script lang="ts">
    import { onMount } from 'svelte'

    type Character = {
        _id: number
        films: string[]
        tvShows: string[]
        imageUrl: string
        name: string
    }

    let characters: Character[] = []

    onMount(async () => {
        try {
            const response = await fetch('https://api.disneyapi.dev/character?page=1&pageSize=100')
            const data = await response.json()
            if (data) {
                characters = data.data
                console.log(characters)
            }
        } catch (error) {
            console.error('Błąd pobierania danych:', error)
        }
    })
</script>

<svelte:head>
    <link rel="icon" type="image/svg" href="/assets/robotIcon.svg" />
    <title>Hang Man</title>
</svelte:head>

<main>
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
    // :global(:root) {
    //     margin: 0;
    //     padding: 0;
    // }
</style>
