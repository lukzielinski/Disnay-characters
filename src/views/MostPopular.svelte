<script lang="ts">
    import { Character } from 'src/apiRequests'
    import { mostPopularCharacters } from 'src/scripts/countingMovies'

    export let characters: Character[] = []

    $: mostPopular = mostPopularCharacters(characters)
</script>

<div />
