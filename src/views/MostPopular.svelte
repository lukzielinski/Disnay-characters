<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { mostPopularCharacters } from 'src/scripts/countingMovies'
    import Favourite from './Favourites/Favourite.svelte'

    export let characters: Character[] = []

    $: mostPopular = mostPopularCharacters(characters)
</script>

<div class="mostPopular">
    {#each mostPopular as character}
        <main>
            <div class="card">
                <img src={character.imageUrl} alt="mostPopular" />
                <div class="card-content">
                    <h2>{character.name} <Favourite {character} /></h2>
                    <p>
                        Total movies: {character.films.length}
                    </p>
                </div>
            </div>
        </main>
    {/each}
</div>

<style lang="less">
    .mostPopular {
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lora', serif;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        font-family: 'Roboto', sans-serif;
    }

    .card {
        width: 24rem;
        height: 36rem;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        color: rgb(240, 240, 240);
        box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.9;
            transition: opacity 0.2s ease-out;
        }

        h2 {
            position: absolute;
            inset: auto auto 30px 30px;
            margin: 0;
            transition: inset 0.3s 0.3s ease-out;
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: normal;
            text-transform: uppercase;
        }

        p,
        a {
            position: absolute;
            opacity: 0;
            max-width: 80%;
            transition: opacity 0.3s ease-out;
        }

        p {
            inset: auto auto 80px 30px;
        }

        a {
            inset: auto auto 40px 30px;
            color: inherit;
            text-decoration: none;
        }

        &:hover h2 {
            inset: auto auto 220px 30px;
            transition: inset 0.3s ease-out;
        }

        &:hover p,
        &:hover a {
            opacity: 1;
            transition: opacity 0.5s 0.1s ease-in;
        }

        &:hover img {
            transition: opacity 0.3s ease-in;
            opacity: 1;
        }
    }

    .material-symbols-outlined {
        vertical-align: middle;
    }
</style>
