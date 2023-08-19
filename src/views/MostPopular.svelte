<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { mostPopularCharacters } from 'src/scripts/countingMovies'
    import Favourite from './Favourites/Favourite.svelte'

    export let characters: Character[] = []

    $: mostPopular = mostPopularCharacters(characters)

    function assignTrophyClass(place: number): string {
        switch (place) {
            case 0:
                return 'gold'
            case 1:
                return 'silver'
            case 2:
                return 'bronze'
            default:
                return ''
        }
    }
</script>

<div class="wrapper">
    <div class="mostPopular">
        {#each mostPopular as character, index}
            <div class="card">
                <div class="wrapper">
                    <img class="image" src={character.imageUrl} alt="mostPopular" />
                </div>
                <div class="card-content">
                    <div class="header">
                        <div class="name">
                            {character.name}
                        </div>
                        <div class="icon">
                            <Favourite {character} />
                        </div>
                    </div>
                    <div class="description">
                        <div class="total-movies">
                            Total movies: {character.films.length}
                        </div>
                        <div class="tropheum {assignTrophyClass(index)}">
                            <i class="bi bi-trophy" />
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
    }
    .mostPopular {
        width: 90%;
        height: 90%;
        border: 1px solid green;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 90px;
        font-family: 'Roboto Mono', monospace;
        width: 90%;
        height: 90%;
        border: 1px solid rgba(172, 172, 172, 0.545);
        border-radius: 20px;
        font-family: 'Roboto Mono', monospace;
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
        border: 1px solid rgba(172, 172, 172, 0.545);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .header {
            position: absolute;
            width: 100%;
            display: grid;
            font-size: 1.2rem;
            grid-template-columns: 80% 20%;
            inset: auto auto 15%;
            margin: 0;
            transition: inset 0.3s 0.3s ease-out;
            font-weight: normal;
            text-transform: uppercase;
        }

        .description {
            position: absolute;
            opacity: 0;
            width: 100%;
            display: grid;
            grid-template-columns: 80% 20%;
            max-width: 80%;
            transition: opacity 0.3s ease-out;
        }

        .description {
            inset: auto auto 12% 30px;
        }

        &:hover .header {
            inset: auto auto 20%;
            transition: inset 0.3s ease-out;
        }

        &:hover .description {
            opacity: 1;
            transition: opacity 0.5s 0.1s ease-in;
        }
    }
    .gold {
        color: gold;
    }

    .silver {
        color: silver;
    }

    .bronze {
        color: #cd7f32;
    }
</style>
