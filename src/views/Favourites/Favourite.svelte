<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { favourites } from 'src/stores/favourites'

    export let character: Character
    $: isFavourite = $favourites.some((fav) => fav.name === character.name)

    function addToFavourites() {
        favourites.update((favList) => {
            if (!favList.some((fav) => fav.name === character.name)) {
                favList.push(character)
            } else {
                favList = favList.filter((fav) => fav.name !== character.name)
            }
            return favList
        })
    }
</script>

<div class="favourite-container" class:yellow={isFavourite} on:click={addToFavourites}>
    <i class="bi bi-star" />
</div>

<style lang="less">
    .favourite-container {
        font-size: 1.3rem;
    }
    .yellow {
        color: yellow !important;
    }
</style>
