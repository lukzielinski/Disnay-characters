<script lang="ts">
    import Tooltip from 'src/elements/Tooltip.svelte'
    import { favourites } from '../../stores/favourites'
    import AddFavourite from './Favourite.svelte'
</script>

<div class="characters-list-container">
    <div class="characters-list">
        <div class="header">Favourites</div>
        <div class="subtitles">
            <div class="avatar" />
            <div class="name">Name</div>
            <div class="movies">movies</div>
            <div class="favourite">Favourite</div>
        </div>
        <div class="list-row">
            {#each $favourites as favourite}
                <div class="row">
                    <div class="wrapper">
                        <img src={favourite.imageUrl} alt="Avatar" class="character-avatar" />
                    </div>
                    <div class="character-name">{favourite.name}</div>
                    <div class="tv-icon">
                        {#if favourite.tvShows.length > 0}
                            <Tooltip tooltip={favourite.tvShows}><i class="bi bi-tv" /></Tooltip>
                        {/if}
                    </div>
                    <div class="movies">{favourite.films.length}</div>
                    <div class="favourite">
                        <AddFavourite character={favourite} />
                    </div>
                </div>
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
        margin: 10px 10px 10px 10px;
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
