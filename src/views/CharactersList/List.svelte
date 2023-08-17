<script lang="ts">
    import { Character } from 'src/apiRequests'

    export let characters: Character[] = []

    function countWordsInMovieList(movieList: string[]) {
        const totalWordCount = movieList.reduce((total, movie) => {
            const wordsInMovie = movie.split(/\s+/).length
            return total + wordsInMovie
        }, 0)

        return totalWordCount
    }
</script>

<div class="characters-list-container">
    <div class="characters-list">
        <div class="header">Disney Characters</div>
        <div class="subtitles">
            <div class="avatar" />
            <div class="name">Name</div>
            <div class="movies">movies</div>
            <div class="favourite">Favourite</div>
        </div>
        <div class="list-row">
            {#each characters as character}
                {#if character.films.length > 0}
                    <div class="row">
                        <div class="wrapper">
                            <img src={character.imageUrl} alt="Avatar" class="character-avatar" />
                        </div>
                        <div class="character-name">{character.name}</div>
                        <div class="tv-icon">
                            {#if character.tvShows.length > 0}
                                <i class="bi bi-tv" />
                            {/if}
                        </div>
                        <div class="movies">{countWordsInMovieList(character.films)}</div>
                        <div class="favourite"><i class="bi bi-star" /></div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    .characters-list-container {
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lora', serif;
    }
    .characters-list {
        display: grid;
        grid-template-rows: 10% 10% auto;
        width: 90%;
        height: 90%;
        border: 1px solid rgba(172, 172, 172, 0.545);
        border-radius: 20px;
        font-family: 'Roboto Mono', monospace;
    }
    .header {
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 20px;
        color: rgb(255, 255, 255);
    }
    .subtitles {
        display: grid;
        grid-template-columns: 1.5fr 3fr 3fr 1.5fr;
        text-align: left;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: rgb(119, 119, 119);
    }
    .list-row {
        align-items: start;
        overflow-y: scroll;
    }
    .list-row::-webkit-scrollbar-track {
        background-color: rgb(25, 25, 25);
    }
    .list-row::-webkit-scrollbar {
        width: 3px;
        background-color: rgb(142, 132, 132);
    }

    .list-row::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(172, 172, 172, 0.38);
    }
    .character-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .row {
        display: grid;
        text-align: left;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 80px;
        grid-template-columns: 1.2fr 2.5fr 0.5fr 2.5fr 1.5fr;
        font-size: 1.1rem;
        margin-top: 10px;
        transition: background-color 0.2s;
        &:hover {
            cursor: pointer;
            background-color: rgb(36, 36, 36);
        }
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .favourite {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
