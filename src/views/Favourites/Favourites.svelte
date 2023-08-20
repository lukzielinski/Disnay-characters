<script lang="ts">
    import { favourites } from '../../stores/favourites'
    import CharacterRow from '../CharactersList/CharacterRow.svelte'
    import ListHeaders from '../CharactersList/ListHeaders.svelte'
</script>

<div class="characters-list-container">
    <div class="characters-list">
        <div class="header">Favourites</div>
        <ListHeaders />
        <div class="favourite-character-row">
            {#each $favourites as favourite}
                <CharacterRow character={favourite} />
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
        animation: fadeIn 1s ease-in-out forwards;
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
    .favourite-character-row {
        align-items: start;
        overflow-y: scroll;
    }
    .favourite-character-row::-webkit-scrollbar-track {
        background-color: rgb(25, 25, 25);
    }
    .favourite-character-row::-webkit-scrollbar {
        width: 3px;
        background-color: rgb(142, 132, 132);
    }

    .favourite-character-row::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(172, 172, 172, 0.38);
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
