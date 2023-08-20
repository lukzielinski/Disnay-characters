<script lang="ts">
    import { Character } from 'src/apiRequests'
    import Tooltip from 'src/elements/Tooltip.svelte'
    import Favourite from '../Favourites/Favourite.svelte'

    export let character: Character
</script>

<div class="character-row">
    <div class="wrapper">
        <img src={character.imageUrl} alt="Avatar" class="character-avatar" />
    </div>
    <div class="character-name">{character.name}</div>
    <div class="tv-icon">
        {#if character.tvShows.length > 0}
            <Tooltip tooltip={character.tvShows}><i class="bi bi-tv" /></Tooltip>
        {/if}
    </div>
    <div class="movies">{character.films.length}</div>
    <div class="favourite">
        <Favourite {character} />
    </div>
</div>

<style lang="less">
    .center-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .character-row {
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
    .wrapper,
    .favourite {
        .center-flex();
    }
    .character-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>
