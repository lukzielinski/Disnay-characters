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
            <div class="avatar">Avatar</div>
            <div class="name">Name</div>
            <div class="movies">All movies</div>
            <div class="favourite">Favourite</div>
        </div>
        <div class="list-row">
            {#each characters as character}
                {#if character.films.length > 0}
                    <div class="row">
                        <div class="wrapper">
                            <img src={character.imageUrl} alt="Avatar" class="character-avatar" />
                        </div>
                        <div class="name">
                            {character.name}
                            {#if character.tvShows.length > 0}
                                <div class="movies-count"><i class="bi bi-tv" /></div>
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
    .characters-list-container {
        border: 1px solid rgb(26, 255, 0);
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lora', serif;
    }
    .characters-list > div {
        border: 1px solid red;
    }
    .characters-list {
        display: grid;
        grid-template-rows: 10% 10% auto;
        width: 90%;
        height: 90%;
        border: 1px solid rgb(26, 255, 0);
        background-color: white;
        border-radius: 20px;
    }
    .header {
        font-size: 2rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
    .subtitles > div {
        border: 1px solid red;
    }
    .subtitles {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr 1fr;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        color: black;
    }
    .list-row {
        align-items: start;
        overflow-y: scroll;
    }
    .character-avatar {
        border: 1px solid red;
        width: 80px;
        height: 80px;
    }
    .row > div {
        border: 1px solid rgb(34, 255, 0);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row {
        border: 1px solid red;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr 3fr 2fr 1fr;
        margin-top: 10px;
        color: black;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
