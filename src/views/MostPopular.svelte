<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { mostPopularCharacters } from 'src/scripts/countingMovies'
    import Favourite from './Favourites/Favourite.svelte'

    export let characters: Character[] = []

    $: mostPopular = mostPopularCharacters(characters)
</script>

<div class="wrapper">
    <div class="mostPopular">
        {#each mostPopular as character}
            <div class="card">
                <div class="wrapper">
                    <img class="image" src={character.imageUrl} alt="mostPopular" />
                </div>
                <div class="card-content">
                    <h2>{character.name} <Favourite {character} /></h2>
                    <p>
                        Total movies: {character.films.length}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="less">
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mostPopular {
        border: 1px solid red;
        display: flex;
        padding: 10%;
        flex-wrap: wrap; /* Zawijanie do nowej linii przy braku miejsca */
        justify-content: space-around; /* Rozłożenie kart na dostępnym miejscu */
        gap: 90px; /* Odstęp między kartami */
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        font-family: 'Roboto', sans-serif;
    }
    .card > div {
        border: 1px solid red;
    }
    .image {
        width: 60%;
        height: 60%;
        border-radius: 50%;
    }
    .card {
        width: 20rem;
        height: 26rem;
        border-radius: 20px;
        display: grid;
        grid-template-rows: 2fr 1fr;
        cursor: pointer;
        position: relative;
        color: rgb(240, 240, 240);
        box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

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
