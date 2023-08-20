<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { mostPopularCharacters } from 'src/scripts/countingMovies'
    import Favourite from '../Favourites/Favourite.svelte'

    export let characters: Character[] = []

    $: mostPopular = mostPopularCharacters(characters)

    function assignTrophyColor(place: number): string {
        switch (place) {
            case 0:
                return 'color:gold'
            case 1:
                return 'color:silver'
            case 2:
                return 'color:bronze'
            default:
                return ''
        }
    }
</script>

<div class="most-popular-wrapper">
    <div class="most-popular-container">
        <div class="most-popular-header">
            <h1>Most popular characters</h1>
        </div>
        <div class="cards-container">
            {#each mostPopular as character, index}
                <div class="card">
                    <div class="image-container">
                        <img class="image" src={character.imageUrl} alt="mostPopular" />
                    </div>
                    <div class="card-content">
                        <div class="header">
                            {character.name}
                            <Favourite {character} />
                        </div>
                        <div class="description">
                            <div class="total-movies">
                                Total movies: {character.films.length}
                            </div>
                            <div style={assignTrophyColor(index)}>
                                <i class="bi bi-trophy" />
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

    .flex-center() {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .most-popular-wrapper {
        .flex-center();
    }
    .most-popular-container {
        width: 90%;
        height: 90%;
        border-radius: 20px;
        margin: 40px 0px 40px 0px;
        font-family: 'Roboto Mono', monospace;
    }
    .cards-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-radius: 20px;
    }
    .most-popular-header {
        font-size: 0.7rem;
        font-weight: bold;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 20px;
        color: rgb(255, 255, 255);
        animation: fadeIn 1s ease-in-out forwards;
    }
    .image-container {
        .flex-center();
    }
    .image {
        width: 60%;
        height: 60%;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(41, 41, 41) 0px 0px 0px 3px;
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
        margin: 30px;
        border: 1px solid rgba(172, 172, 172, 0.545);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        animation: fadeIn 1s ease-in-out forwards;

        .header {
            position: absolute;
            width: 100%;
            display: grid;
            font-size: 1.2rem;
            grid-template-columns: 70% 30%;
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
            grid-template-columns: 70% 30%;
            transition: opacity 0.3s ease-out;
        }

        .description {
            inset: auto auto 12% 0px;
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
