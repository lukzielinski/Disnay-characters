<div class="subtitles">
    <div class="avatar" />
    <div class="name">Name</div>
    <div class="movies">movies</div>
    <div class="favourite">Favourite</div>
</div>

<style lang="less">
    .subtitles {
        display: grid;
        grid-template-columns: 1.5fr 3fr 3fr 1.5fr;
        text-align: left;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: rgb(119, 119, 119);
        @media (max-width: 900px) {
            grid-template-columns: 1fr 2fr 2fr 3fr;
        }
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    .favourite {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
